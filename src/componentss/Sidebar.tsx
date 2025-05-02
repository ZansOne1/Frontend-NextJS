"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FiMessageSquare, FiUsers, FiSettings } from "react-icons/fi";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-12"
                    } bg-purple-800 h-screen text-white transition-all duration-300 relative`}
            >
                {/* Header: Logo + Hamburger */}
                <div className="flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    {isOpen &&
                        <div className="flex items-center space-x-2 overflow-hidden transition-all duration-300">
                            <img src="/img/zans.jpeg" alt="Logo" className="h-6 w-6" />
                            <span className="text-white font-bold text-lg">ZansApp</span>
                        </div>
                    }
                    {/* Hamburger */}

                    {mounted && (
                        <div className="space-y-6 flex flex-col items-center">
                            <button id="hamburger" onClick={toggleSidebar} className="flex items-center hover:bg-purple-700 rounded w-full text-white cursor-pointer">
                                <FaBars />
                            </button>
                        </div>
                    )}

                </div>



                <div className="mt-4 space-y-6 flex flex-col items-center">
                    <SidebarItem icon={<FiMessageSquare />} label="Messages" isOpen={isOpen} />
                    <SidebarItem icon={<FiUsers />} label="Users" isOpen={isOpen} />
                    <SidebarItem icon={<FiSettings />} label="Settings" isOpen={isOpen} />
                </div>
            </div>

            {/* Main content */}
            {/* <div className="flex-1 bg-gray-100 p-6">
                <h1 className="text-xl font-semibold">Main Content Area</h1>
            </div> */}
        </div>
    );
}

function SidebarItem({ icon, label, isOpen }: { icon: React.ReactNode; label: string; isOpen: boolean }) {
    return (
        <div className="flex items-center gap-4 cursor-pointer hover:bg-purple-700 px-4 py-2 rounded w-full">
            {icon}
            {isOpen && <span>{label}</span>}
        </div>
    );
}
