"use client"
import { Settings } from 'lucide-react'
import PostCard from './Postcard'
import { useEffect, useState } from 'react';

const MainFeed = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <div className="overflow-y-auto">
            {/* Header with gradient background */}
            <div className=" py-4 rounded-b-2xl text-white flex items-center justify-between">
                <h2 className="text-white text-xl font-semibold rounded-full bg-purple-500 px-4">Feed</h2>

                <div className="flex items-center space-x-3">
                    {/* Search input */}
                    {mounted && (
                        <div className="relative flex-1 max-w-xl mx-4">
                            <input
                                type="text"
                                placeholder="Filter and search"
                                className="w-full rounded-full bg-purple-500 placeholder-white text-sm pl-10 pr-4 py-1.5 outline-none"
                            />
                            <svg
                                className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                />
                            </svg>
                        </div>
                    )}
                    {/* Gear Icon */}
                    {mounted && (
                        <button id='settings' className="text-white bg-purple-500 p-1.5 rounded-lg hover:text-gray-200">
                            <Settings size={18} />
                        </button>
                    )}
                </div>
            </div>

            {/* Post List */}
            <div className="">
                <PostCard />
            </div>
        </div>
    )
}

export default MainFeed
