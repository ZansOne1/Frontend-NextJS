'use client';

import Sidebar from './Sidebar';
import Header from './Header';
import Footerdash from './Footerdash';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            {/* Main content */}
            <div
                className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'md:ml-[-30] ml-0' : 'ml-0'
                    }`}
            >
                {/* Header */}
                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-100 max-h-screen max-w-full">
                    {children}
                </main>

                {/* Footer */}
                <Footerdash />
            </div>
        </div>
    );
}
