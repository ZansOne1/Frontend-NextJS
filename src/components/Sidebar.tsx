'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home, Projector, CheckCircle, User, Users,
    ChevronDown, ChevronUp, ShieldCheck
} from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [userMenuOpen2, setUserMenuOpen2] = useState(false);
    const [userMenuOpen3, setUserMenuOpen3] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <aside className={`fixed md:static z-40 md:z-auto bg-white shadow-md h-full w-64 p-4 transform transition-transform duration-300 
                ${isOpen ? 'md:ml-[-260]' : '-translate-x-full'} md:translate-x-0`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">ProjectTask</h2>
                </div>

                <nav className="mt-6 space-y-2 text-sm font-medium overflow-y-auto max-h-[calc(100vh-100px)] pr-1">
                    <SidebarLink href="/dashboard" icon={<Home className="w-5 h-5" />} label="Dashboard" pathname={pathname} />
                    <SidebarLink href="/project" icon={<Projector className="w-5 h-5" />} label="Projects" pathname={pathname} />
                    <SidebarLink href="/task" icon={<CheckCircle className="w-5 h-5" />} label="Tasks" pathname={pathname} />

                    {/* User Management Dropdown */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className={`w-full cursor-pointer flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${userMenuOpen ||
                                pathname?.startsWith('/users') ||
                                pathname?.startsWith('/roles') ||
                                pathname?.startsWith('/permissions') ||
                                pathname?.startsWith('/profile')
                                ? 'bg-blue-100 text-blue-700 font-semibold'
                                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                                }`}
                        >
                            <span className="flex items-center space-x-2">
                                <Users className="w-5 h-5" />
                                <span>User Management</span>
                            </span>
                            {userMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {userMenuOpen && (
                            <div className="ml-8 space-y-1 text-gray-600 text-sm">
                                <SidebarLink href="/users" icon={<User className="w-5 h-5" />} label="All Users" pathname={pathname} />
                                <SidebarLink href="/roles" icon={<ShieldCheck className="w-5 h-5" />} label="Roles" pathname={pathname} />
                                <SidebarLink href="/profile" icon={<User className="w-5 h-5" />} label="Profile" pathname={pathname} />
                                <SidebarLink href="/permissions" icon={<ShieldCheck className="w-5 h-5" />} label="Permissions" pathname={pathname} />
                                <button
                                    onClick={() => setUserMenuOpen2(!userMenuOpen2)}
                                    className={`w-full cursor-pointer flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${userMenuOpen2 ||
                                        pathname?.startsWith('/users') ||
                                        pathname?.startsWith('/roles') ||
                                        pathname?.startsWith('/permissions') ||
                                        pathname?.startsWith('/profile')
                                        ? 'bg-blue-100 text-blue-700 font-semibold'
                                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                                        }`}
                                >
                                    <span className="flex items-center space-x-2">
                                        <Users className="w-5 h-5" />
                                        <span>zannns</span>
                                    </span>
                                    {userMenuOpen2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>
                                {userMenuOpen2 && (
                                    <div className="ml-8 space-y-1 text-gray-600 text-sm">
                                        <SidebarLink href="/users" icon={<User className="w-5 h-5" />} label="All Users" pathname={pathname} />
                                        <SidebarLink href="/roles" icon={<ShieldCheck className="w-5 h-5" />} label="Roles" pathname={pathname} />
                                        <SidebarLink href="/profile" icon={<User className="w-5 h-5" />} label="Profile" pathname={pathname} />
                                        <SidebarLink href="/permissions" icon={<ShieldCheck className="w-5 h-5" />} label="Permissions" pathname={pathname} />
                                        <button
                                            onClick={() => setUserMenuOpen3(!userMenuOpen3)}
                                            className={`w-full cursor-pointer flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${userMenuOpen3 ||
                                                pathname?.startsWith('/users') ||
                                                pathname?.startsWith('/roles') ||
                                                pathname?.startsWith('/permissions') ||
                                                pathname?.startsWith('/profile')
                                                ? 'bg-blue-100 text-blue-700 font-semibold'
                                                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                                                }`}
                                        >
                                            <span className="flex items-center space-x-2">
                                                <Users className="w-5 h-5" />
                                                <span>zannns</span>
                                            </span>
                                            {userMenuOpen3 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </button>
                                        {userMenuOpen3 && (
                                            <div className="ml-8 space-y-1 text-gray-600 text-sm">
                                                <SidebarLink href="/users" icon={<User className="w-5 h-5" />} label="All Users" pathname={pathname} />
                                                <SidebarLink href="/roles" icon={<ShieldCheck className="w-5 h-5" />} label="Roles" pathname={pathname} />
                                                <SidebarLink href="/profile" icon={<User className="w-5 h-5" />} label="Profile" pathname={pathname} />
                                                <SidebarLink href="/permissions" icon={<ShieldCheck className="w-5 h-5" />} label="Permissions" pathname={pathname} />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </aside>

            <div
                className={`fixed inset-0 bg-black opacity-50 z-30 md:hidden transition-opacity ${isOpen ? 'block' : 'hidden'}`}
                onClick={toggleSidebar}
            />
        </>
    );
}

function SidebarLink({
    href,
    icon,
    label,
    pathname
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathname: string;
}) {
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 space-x-2 ${isActive
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
        >
            <div className="min-w-[20px]">{icon}</div>
            <span className="truncate" title={label}>{label}</span>

        </Link>
    );
}
