import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import CodeEditor from './components/CodeEditor';

const TEMPLATES = {
    swift: `class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        
    }
}`,
    kotlin: `class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        
    }
}`
};

function App() {
    const [language, setLanguage] = useState('swift');
    const [code, setCode] = useState(TEMPLATES.swift);
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState(null);
    const [activeTab, setActiveTab] = useState('case1');
    const [mobilePanel, setMobilePanel] = useState('code');

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        setCode(TEMPLATES[newLang]);
    };

    const handleRun = () => {
        setIsRunning(true);
        setResult(null);
        setTimeout(() => {
            setIsRunning(false);
            setResult({
                status: 'Accepted',
                runtime: '12ms',
                memory: '14.2MB',
                cases: [
                    { id: 'case1', input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', expected: '[0,1]' },
                    { id: 'case2', input: 'nums = [3,2,4], target = 6', output: '[1,2]', expected: '[1,2]' },
                    { id: 'case3', input: 'nums = [3,3], target = 6', output: '[0,1]', expected: '[0,1]' }
                ]
            });
        }, 1500);
    };

    const descriptionJSX = (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-1 p-5 md:p-8 overflow-y-auto">
                <h1 className="text-lg font-semibold mb-1">1. Two Sum</h1>
                <p className="text-xs text-white/40 mb-5">Easy</p>

                <p className="text-sm text-white/80 mb-3 leading-relaxed">
                    Given an array of integers <code className="font-mono text-white">nums</code> and an integer{' '}
                    <code className="font-mono text-white">target</code>, return indices of the two numbers such that they add up to{' '}
                    <code className="font-mono text-white">target</code>.
                </p>
                <p className="text-sm text-white/80 mb-3 leading-relaxed">
                    You may assume that each input would have exactly one solution, and you may not use the same element twice.
                </p>
                <p className="text-sm text-white/80 mb-5 leading-relaxed">
                    You can return the answer in any order.
                </p>

                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Example 1</p>
                <pre className="text-xs font-mono text-white/70 border border-white/10 rounded p-3 overflow-x-auto leading-relaxed">
                    {`Input:  nums = [2,7,11,15], target = 9
Output: [0,1]`}
                </pre>
            </div>
        </div>
    );

    const editorJSX = (
        <div className="h-full flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-transparent text-white/60 text-xs border border-white/20 rounded px-2 py-1 cursor-pointer focus:outline-none"
                >
                    <option value="swift" className="bg-black">Swift</option>
                    <option value="kotlin" className="bg-black">Kotlin</option>
                </select>
            </div>

            {/* Editor */}
            <div className={`transition-all duration-200 ${result ? 'h-[55%] md:h-[60%]' : 'flex-1'}`}>
                <CodeEditor language={language} code={code} onChange={setCode} />
            </div>

            {/* Console */}
            {result && (
                <div className="h-[45%] md:h-[40%] border-t border-white/10 flex flex-col">
                    <div className="flex items-center gap-4 px-4 py-2 border-b border-white/10 text-xs">
                        <span className={result.status === 'Accepted' ? 'text-white' : 'text-white/40'}>
                            {result.status}
                        </span>
                        <span className="text-white/40">{result.runtime}</span>
                        <span className="text-white/40 hidden sm:inline">{result.memory}</span>
                        <button onClick={() => setResult(null)} className="ml-auto text-white/30 hover:text-white">✕</button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex gap-2 mb-3">
                            {result.cases.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setActiveTab(c.id)}
                                    className={`text-xs px-2 py-1 rounded border transition-colors ${activeTab === c.id
                                            ? 'border-white/40 text-white'
                                            : 'border-transparent text-white/30 hover:text-white/60'
                                        }`}
                                >
                                    Case {c.id.replace('case', '')}
                                </button>
                            ))}
                        </div>
                        {result.cases.map((c) =>
                            c.id === activeTab && (
                                <div key={c.id} className="space-y-3 font-mono text-xs">
                                    {[['Input', c.input], ['Output', c.output], ['Expected', c.expected]].map(([label, val]) => (
                                        <div key={label}>
                                            <div className="text-white/30 mb-1">{label}</div>
                                            <div className="border border-white/10 rounded p-2 text-white/70 overflow-x-auto">{val}</div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 px-4 py-2 border-t border-white/10">
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="text-xs px-3 py-1.5 border border-white/20 rounded text-white/70 hover:text-white hover:border-white/40 transition-colors disabled:opacity-30 flex items-center gap-1.5"
                >
                    {isRunning ? (
                        <>
                            <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Running
                        </>
                    ) : 'Run'}
                </button>
                <button className="text-xs px-3 py-1.5 bg-white text-black rounded hover:bg-white/90 transition-colors font-medium">
                    Submit
                </button>
            </div>
        </div>
    );

    return (
        <AppLayout>
            {/* Mobile: Tabs */}
            <div className="flex md:hidden flex-col w-full h-full min-h-0">
                <div className="flex border-b border-white/10">
                    {['description', 'code'].map((p) => (
                        <button
                            key={p}
                            onClick={() => setMobilePanel(p)}
                            className={`flex-1 py-2 text-xs capitalize transition-colors ${mobilePanel === p ? 'text-white border-b border-white' : 'text-white/30'
                                }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <div className="flex-1 min-h-0">
                    {mobilePanel === 'description' ? descriptionJSX : editorJSX}
                </div>
            </div>

            {/* Desktop: Split */}
            <div className="hidden md:flex w-full h-full">
                <div className="w-2/5 h-full border-r border-white/10">
                    {descriptionJSX}
                </div>
                <div className="w-3/5 h-full">
                    {editorJSX}
                </div>
            </div>
        </AppLayout>
    );
}

export default App;
