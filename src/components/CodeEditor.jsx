import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, code, onChange }) => {
    return (
        <div className="h-full w-full flex flex-col bg-[#1e1e1e]">
            <div className="flex-1 overflow-hidden relative">
                <Editor
                    height="100%"
                    language={language.toLowerCase()}
                    theme="vs-dark"
                    value={code}
                    onChange={onChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: window.innerWidth < 768 ? 13 : 14,
                        scrollBeyondLastLine: false,
                        automaticLayout: true,

                        wordWrap: 'on',
                        lineNumbers: window.innerWidth < 768 ? 'off' : 'on',
                        folding: window.innerWidth >= 768,
                        glyphMargin: false,
                        lineDecorationsWidth: window.innerWidth < 768 ? 4 : 10,
                        padding: { top: 8 },
                    }}
                />
            </div>
        </div>
    );
};

export default CodeEditor;
