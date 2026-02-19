import React from 'react';

const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen bg-black text-white overflow-hidden" style={{ height: '100dvh' }}>
            {/* Top bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/10">
                <span className="text-sm font-medium tracking-wide">Code</span>
            </div>
            <div className="flex-1 flex overflow-hidden min-h-0">
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
