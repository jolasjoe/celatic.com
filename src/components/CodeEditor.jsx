import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, code, onChange }) => {
    return (
        <div className="h-full w-full">
            <Editor
                height="100%"
                language={language.toLowerCase()}
                theme="vs-dark"
                value={code}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    folding: false,
                    glyphMargin: false,
                    padding: { top: 12 },
                }}
            />
        </div>
    );
};

export default CodeEditor;
