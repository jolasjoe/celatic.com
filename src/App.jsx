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
        <div className="h-full flex flex-col bg-[#1e1e1e]">
            <div className="hidden md:flex bg-[#282828] px-4 py-2 border-b border-[#3e3e3e] items-center">
                <span className="font-semibold text-sm text-gray-300">Description</span>
            </div>
            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
                <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">1. Two Sum</h1>
                <div className="flex space-x-2 mb-3 md:mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-green-900 text-green-400 text-xs font-medium">Easy</span>
                </div>
                <p className="mb-3 md:mb-4 text-gray-300 text-sm md:text-base">
                    Given an array of integers <code className="bg-[#3e3e3e] px-1 rounded text-sm">nums</code> and an integer{' '}
                    <code className="bg-[#3e3e3e] px-1 rounded text-sm">target</code>, return{' '}
                    <em>indices of the two numbers such that they add up to <code className="bg-[#3e3e3e] px-1 rounded text-sm">target</code></em>.
                </p>
                <p className="mb-3 md:mb-4 text-gray-300 text-sm md:text-base">
                    You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
                </p>
                <p className="mb-3 md:mb-4 text-gray-300 text-sm md:text-base">
                    You can return the answer in any order.
                </p>
                <h3 className="font-bold mt-4 md:mt-6 mb-2 text-sm md:text-base">Example 1:</h3>
                <pre className="bg-[#282828] p-3 rounded-lg text-xs md:text-sm text-gray-300 overflow-x-auto">
                    {`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
                </pre>
            </div>
        </div>
    );

    const editorJSX = (
        <div className="h-full flex flex-col">
            <div className="bg-[#282828] px-3 md:px-4 py-2 border-b border-[#3e3e3e] flex justify-between items-center">
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-[#3e3e3e] text-white text-xs px-2 py-1 rounded border-none focus:ring-0 cursor-pointer"
                >
                    <option value="swift">Swift</option>
                    <option value="kotlin">Kotlin</option>
                </select>
            </div>

            <div className="flex-1 relative flex flex-col min-h-0">
                <div className={`transition-all duration-300 ${result ? 'h-[55%] md:h-[60%]' : 'h-full'}`}>
                    <CodeEditor language={language} code={code} onChange={setCode} />
                </div>

                {result && (
                    <div className="h-[45%] md:h-[40%] bg-[#1e1e1e] border-t border-[#3e3e3e] flex flex-col">
                        <div className="flex items-center space-x-2 md:space-x-4 px-3 md:px-4 py-2 bg-[#282828] border-b border-[#3e3e3e]">
                            <span className={`${result.status === 'Accepted' ? 'text-green-500' : 'text-red-500'} font-semibold text-sm`}>
                                {result.status}
                            </span>
                            <span className="text-xs text-gray-400">{result.runtime}</span>
                            <span className="text-xs text-gray-400 hidden sm:inline">{result.memory}</span>
                            <button onClick={() => setResult(null)} className="ml-auto text-gray-400 hover:text-white text-xs">✕</button>
                        </div>
                        <div className="flex-1 p-3 md:p-4 overflow-y-auto">
                            <div className="flex space-x-1 md:space-x-2 mb-3">
                                {result.cases.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => setActiveTab(c.id)}
                                        className={`px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors ${activeTab === c.id ? 'bg-[#3e3e3e] text-white' : 'text-gray-400 hover:bg-[#282828]'}`}
                                    >
                                        Case {c.id.replace('case', '')}
                                    </button>
                                ))}
                            </div>
                            {result.cases.map((c) => (
                                c.id === activeTab && (
                                    <div key={c.id} className="space-y-2 font-mono text-xs md:text-sm">
                                        <div>
                                            <div className="text-gray-500 mb-1">Input</div>
                                            <div className="bg-[#282828] p-2 rounded text-gray-300 overflow-x-auto">{c.input}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 mb-1">Output</div>
                                            <div className="bg-[#282828] p-2 rounded text-gray-300">{c.output}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 mb-1">Expected</div>
                                            <div className="bg-[#282828] p-2 rounded text-gray-300">{c.expected}</div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="h-11 md:h-12 bg-[#282828] border-t border-[#3e3e3e] flex items-center justify-end px-3 md:px-4 space-x-2 md:space-x-3">
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className={`px-3 md:px-4 py-1.5 rounded bg-[#3e3e3e] text-white text-xs md:text-sm font-medium hover:bg-[#4e4e4e] transition-colors flex items-center ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isRunning ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Running...
                        </>
                    ) : 'Run'}
                </button>
                <button className="px-3 md:px-4 py-1.5 rounded bg-green-600 text-white text-xs md:text-sm font-medium hover:bg-green-700 transition-colors">Submit</button>
            </div>
        </div>
    );

    return (
        <AppLayout>
            {/* Mobile: Tabbed layout */}
            <div className="flex md:hidden flex-col w-full h-full min-h-0">
                <div className="flex bg-[#282828] border-b border-[#3e3e3e]">
                    <button
                        onClick={() => setMobilePanel('description')}
                        className={`flex-1 py-2.5 text-xs font-semibold text-center transition-colors ${mobilePanel === 'description' ? 'text-white border-b-2 border-yellow-500' : 'text-gray-400'}`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setMobilePanel('code')}
                        className={`flex-1 py-2.5 text-xs font-semibold text-center transition-colors ${mobilePanel === 'code' ? 'text-white border-b-2 border-yellow-500' : 'text-gray-400'}`}
                    >
                        Code
                    </button>
                </div>
                <div className="flex-1 min-h-0">
                    {mobilePanel === 'description' ? descriptionJSX : editorJSX}
                </div>
            </div>

            {/* Desktop: Split layout */}
            <div className="hidden md:flex w-full h-full">
                <div className="w-1/2 h-full border-r border-[#3e3e3e]">
                    {descriptionJSX}
                </div>
                <div className="w-1/2 h-full">
                    {editorJSX}
                </div>
            </div>
        </AppLayout>
    );
}

export default App;
