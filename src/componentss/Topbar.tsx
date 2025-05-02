"use client";

import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import Image from "next/image";

export default function Topbar() {
    const [time, setTime] = useState<string>("");
    const [showPopup, setShowPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef: any = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours() % 12 || 12;
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "PM" : "AM";
            setTime(`${hours}:${minutes} ${ampm}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-700 to-purple-500 pl-4 pr-1 py-2 text-white shadow-md relative">
            {/* Logo */}
            <div className="text-lg font-bold whitespace-nowrap">
                Zans_One <span className="text-cyan-300">001</span>
            </div>

            {/* Search */}
            {mounted && (
                <div className="relative flex-1 max-w-xl mx-4">
                    <input
                        id="searchglobal"
                        type="text"
                        placeholder="find people, documents, and more"
                        className="w-full rounded-full bg-purple-500 placeholder-white text-sm pl-10 pr-4 py-1.5 outline-none"
                    />
                    <FaSearch className="absolute left-3 top-2.5 text-white text-sm" />
                </div>
            )}
            {/* Right Side */}
            <div className="flex items-center space-x-4 mr-1">
                {/* Time */}
                <div
                    onClick={() => setShowPopup(!showPopup)}
                    className="cursor-pointer relative"
                >
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="font-medium text-2xl">{time}</div>
                        <div className="text-xs">🕒 WORKING</div>
                    </div>


                    {/* Popup */}
                    {showPopup && (
                        <div className="absolute top-10 right-0 bg-white text-black text-sm rounded shadow-md p-2 z-50 w-40">
                            <div className="mb-1">⏱ Clock Settings</div>
                            <div className="mb-1">🔔 Reminders</div>
                            <div className="mb-1">📝 Daily Report</div>
                            <div className="text-right">
                                <button
                                    id="close"
                                    className="text-blue-500 hover:underline text-xs"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative" ref={menuRef}>
                    {mounted && (
                        <button
                            id="akun"
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Image
                                src="/img/zans.jpeg"
                                alt="User"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <span className="text-sm font-medium whitespace-nowrap">
                                Fauzan Ramdani Ferdiansyah
                            </span>
                            <FiChevronDown className="text-xs" />
                        </button>
                    )}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">Settings</a>
                            <hr className="my-1" />
                            <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100">Logout</a>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                {mounted && (
                    <button id="myplan" className="bg-purple-600 px-3 py-1 rounded-full text-sm cursor-pointer">My plan</button>
                )}
                {mounted && (
                    <button id="invite" className="bg-cyan-400 px-3 py-1 rounded-full text-sm font-semibold text-black cursor-pointer">
                        Invite
                    </button>
                )}
            </div>
            {/* Help */}
            {mounted && (
                <button id="info" className="bg-blue-400 rounded-lg p-2 text-white cursor-pointer">
                    <BsQuestionCircle />
                </button>
            )}
        </div>
    );
}
