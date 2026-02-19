import React from 'react';

const Sidebar = () => (
    <div className="hidden md:flex w-16 bg-leetcode-gray flex-col items-center py-4 space-y-4 border-r border-[#3e3e3e]">
        <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black mb-4">L</div>
        <div className="text-gray-400 hover:text-white cursor-pointer"><i className="fas fa-list"></i></div>
        <div className="text-gray-400 hover:text-white cursor-pointer"><i className="fas fa-code"></i></div>
        <div className="text-gray-400 hover:text-white cursor-pointer"><i className="fas fa-user"></i></div>
    </div>
);

const MobileHeader = () => (
    <div className="flex md:hidden items-center px-3 py-2 bg-leetcode-gray border-b border-[#3e3e3e]">
        <div className="w-7 h-7 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">L</div>
        <span className="ml-2 text-sm font-semibold text-gray-200">LeetCode</span>
    </div>
);

const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row h-screen h-[100dvh] bg-leetcode-dark text-white overflow-hidden">
            <MobileHeader />
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 flex overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
