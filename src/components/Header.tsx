'use client';

import { Bell, User } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
    const [username, setUsername] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const user = localStorage.getItem('username');
        if (user) setUsername(user);
    }, []);
    // console.log(localStorage.getItem('username'));
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <header className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Kiri: Sidebar toggle + Title dekat */}
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="text-gray-600 text-xl cursor-pointer">
                        ☰
                    </button>
                    <div className="text-lg font-bold text-gray-800">Dashboard</div>
                </div>

                {/* Profile Toggle */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-gray-600 hover:text-blue-600 flex items-center space-x-2 cursor-pointer"
                    >
                        <User className="w-5 h-5" />
                        <span className="hidden sm:block">{username}</span>
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50">


                            <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                Profile
                            </Link>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('username');
                                    window.location.href = '/login';
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>

    );
}
