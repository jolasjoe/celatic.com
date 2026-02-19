import React, { useState } from 'react';
import {
    Button,
    Select,
    Tabs,
    Tag,
    Typography,
    Space,
    Spin,
} from 'antd';
import AppLayout from './components/AppLayout';
import CodeEditor from './components/CodeEditor';

const { Title, Text, Paragraph } = Typography;

const TEMPLATES = {
    swift: `class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        
    }
}`,
    kotlin: `class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        
    }
}`,
};

const BORDER = '1px solid rgba(255,255,255,0.08)';
const BG_PANEL = '#0a0a0a';
const BG_TOOLBAR = '#000';

function App() {
    const [language, setLanguage] = useState('swift');
    const [code, setCode] = useState(TEMPLATES.swift);
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState(null);
    const [activeCase, setActiveCase] = useState('case1');
    const [mobilePanel, setMobilePanel] = useState('code');

    const handleLanguageChange = (val) => {
        setLanguage(val);
        setCode(TEMPLATES[val]);
    };

    const handleRun = () => {
        setIsRunning(true);
        setResult(null);
        setTimeout(() => {
            setIsRunning(false);
            setResult({
                status: 'Accepted',
                runtime: '12ms',
                memory: '14.2 MB',
                cases: [
                    { id: 'case1', input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', expected: '[0,1]' },
                    { id: 'case2', input: 'nums = [3,2,4], target = 6', output: '[1,2]', expected: '[1,2]' },
                    { id: 'case3', input: 'nums = [3,3], target = 6', output: '[0,1]', expected: '[0,1]' },
                ],
            });
        }, 1500);
    };

    // ── Description panel ──
    const descriptionJSX = (
        <div style={{ height: '100%', overflowY: 'auto', padding: '28px 24px', background: BG_PANEL }}>
            <Title level={4} style={{ color: '#fff', marginBottom: 4 }}>
                1. Two Sum
            </Title>
            <Tag color="default" style={{ marginBottom: 20, fontSize: 11 }}>Easy</Tag>

            <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.7 }}>
                Given an array of integers <Text code>nums</Text> and an integer <Text code>target</Text>, return{' '}
                <Text italic>indices of the two numbers such that they add up to <Text code>target</Text></Text>.
            </Paragraph>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.7 }}>
                You may assume that each input would have <Text strong style={{ color: '#fff' }}>exactly one solution</Text>,
                and you may not use the <Text italic>same</Text> element twice.
            </Paragraph>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.7 }}>
                You can return the answer in any order.
            </Paragraph>

            <Text type="secondary" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginTop: 20, marginBottom: 8 }}>
                Example 1
            </Text>
            <pre
                style={{
                    background: '#111',
                    border: BORDER,
                    borderRadius: 6,
                    padding: '10px 14px',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                    overflowX: 'auto',
                    margin: 0,
                }}
            >
                {`Input:  nums = [2,7,11,15], target = 9
Output: [0,1]`}
            </pre>
        </div>
    );

    // ── Editor panel ──
    const editorJSX = (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: BG_PANEL }}>
            {/* Toolbar */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    height: 44,
                    background: BG_TOOLBAR,
                    borderBottom: BORDER,
                    flexShrink: 0,
                }}
            >
                <Select
                    value={language}
                    onChange={handleLanguageChange}
                    size="small"
                    variant="borderless"
                    style={{ width: 90, color: 'rgba(255,255,255,0.55)', fontSize: 12 }}
                    options={[
                        { value: 'swift', label: 'Swift' },
                        { value: 'kotlin', label: 'Kotlin' },
                    ]}
                    popupMatchSelectWidth={false}
                />
            </div>

            {/* Monaco */}
            <div style={{ flex: result ? '0 0 60%' : 1, minHeight: 0, transition: 'flex 0.2s' }}>
                <CodeEditor language={language} code={code} onChange={setCode} />
            </div>

            {/* Console */}
            {result && (
                <div
                    style={{
                        flex: '0 0 40%',
                        borderTop: BORDER,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 0,
                        background: BG_PANEL,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            padding: '6px 16px',
                            borderBottom: BORDER,
                            background: BG_TOOLBAR,
                            flexShrink: 0,
                        }}
                    >
                        <Text style={{ fontSize: 12, color: result.status === 'Accepted' ? '#fff' : 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                            {result.status}
                        </Text>
                        <Text type="secondary" style={{ fontSize: 11 }}>{result.runtime}</Text>
                        <Text type="secondary" style={{ fontSize: 11 }}>{result.memory}</Text>
                        <Button
                            type="text"
                            size="small"
                            onClick={() => setResult(null)}
                            style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: 12 }}
                        >
                            ✕
                        </Button>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
                        <Tabs
                            size="small"
                            activeKey={activeCase}
                            onChange={setActiveCase}
                            items={result.cases.map((c, i) => ({
                                key: c.id,
                                label: `Case ${i + 1}`,
                                children: (
                                    <Space direction="vertical" style={{ width: '100%' }} size={10}>
                                        {[['Input', c.input], ['Output', c.output], ['Expected', c.expected]].map(([label, val]) => (
                                            <div key={label}>
                                                <Text type="secondary" style={{ fontSize: 11, display: 'block', marginBottom: 4 }}>{label}</Text>
                                                <div
                                                    style={{
                                                        fontFamily: 'monospace',
                                                        fontSize: 12,
                                                        background: '#111',
                                                        border: BORDER,
                                                        borderRadius: 4,
                                                        padding: '6px 10px',
                                                        color: 'rgba(255,255,255,0.75)',
                                                        overflowX: 'auto',
                                                    }}
                                                >
                                                    {val}
                                                </div>
                                            </div>
                                        ))}
                                    </Space>
                                ),
                            }))}
                        />
                    </div>
                </div>
            )}

            {/* Action bar */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 8,
                    padding: '0 16px',
                    height: 48,
                    borderTop: BORDER,
                    background: BG_TOOLBAR,
                    flexShrink: 0,
                }}
            >
                <Button
                    size="small"
                    onClick={handleRun}
                    disabled={isRunning}
                    icon={isRunning ? <Spin size="small" /> : null}
                >
                    {isRunning ? 'Running…' : 'Run'}
                </Button>
                <Button size="small" type="primary">
                    Submit
                </Button>
            </div>
        </div>
    );

    return (
        <AppLayout>
            {/* Mobile: Tabs */}
            <div className="flex md:hidden flex-col w-full h-full min-h-0">
                <Tabs
                    activeKey={mobilePanel}
                    onChange={setMobilePanel}
                    size="small"
                    style={{ background: BG_TOOLBAR, padding: '0 16px', flexShrink: 0 }}
                    items={[
                        { key: 'description', label: 'Description' },
                        { key: 'code', label: 'Code' },
                    ]}
                />
                <div style={{ flex: 1, minHeight: 0 }}>
                    {mobilePanel === 'description' ? descriptionJSX : editorJSX}
                </div>
            </div>

            {/* Desktop: Split */}
            <div className="hidden md:flex w-full h-full">
                <div style={{ width: '40%', borderRight: BORDER, height: '100%' }}>
                    {descriptionJSX}
                </div>
                <div style={{ width: '60%', height: '100%' }}>
                    {editorJSX}
                </div>
            </div>
        </AppLayout>
    );
}

export default App;
