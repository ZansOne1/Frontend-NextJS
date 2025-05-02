'use client'

import { useState, useEffect } from 'react'

const tabs = ['MESSAGE', 'TASK', 'EVENT', 'POLL', 'MORE']

const Topbar = () => {
    const [activeTab, setActiveTab] = useState('MESSAGE')
    const [expanded, setExpanded] = useState(false)
    const [showEventModal, setShowEventModal] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
        setExpanded(false)
        if (tab === 'EVENT') {
            setShowEventModal(true)
        } else {
            setShowEventModal(false)
        }
    }

    return (
        <div className="bg-white rounded-md border border-purple-300 relative">
            {/* Tab menu */}
            {mounted && (
                <div className="flex space-x-6 px-4 pt-2 text-sm font-semibold text-gray-600">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`pb-1 ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            )}

            {/* Content bawah */}
            <div className="px-4 pb-4 pt-2">
                {mounted && activeTab !== 'EVENT' && (
                    <>
                        {!expanded ? (
                            // Awal: input kecil
                            <input
                                type="text"
                                placeholder={`Send ${activeTab.toLowerCase()} ...`}
                                className="w-full bg-white border border-gray-200 rounded-md px-4 py-2 mt-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 text-black"
                                onFocus={() => setExpanded(true)}
                            />
                        ) : (
                            // Expanded form
                            <div className="mt-2 space-y-3">
                                {/* Judul kalau TASK */}
                                {activeTab === 'TASK' && (
                                    <input
                                        type="text"
                                        placeholder="Monthly Report"
                                        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 text-black font-semibold"
                                    />
                                )}

                                {/* Toolbar */}
                                <div className="flex flex-wrap items-center space-x-2 text-xs text-gray-600 border-b pb-2">
                                    {['B', 'I', 'U', 'S', 'Font', '🔗', '📎', '📷', '😊', 'BB'].map((item, i) => (
                                        <button key={i} className="hover:text-blue-500">{item}</button>
                                    ))}
                                </div>

                                {/* Textarea */}
                                <textarea
                                    rows={6}
                                    placeholder={activeTab === 'MESSAGE' ? "Write your message..." : "Prepare and submit a comprehensive monthly report..."}
                                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 text-black"
                                ></textarea>

                                {/* Task fields khusus kalau TASK */}
                                {activeTab === 'TASK' && (
                                    <div className="space-y-3 text-xs text-gray-600">
                                        {/* Assignee */}
                                        <div>
                                            <label className="font-semibold text-gray-700">Assignee</label>
                                            <div className="flex gap-2 mt-1">
                                                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Charlotte Emma</div>
                                                <button className="text-blue-500 hover:underline">+ Add more</button>
                                            </div>
                                        </div>

                                        {/* Deadline */}
                                        <div className="flex flex-col">
                                            <label className="font-semibold text-gray-700">Deadline</label>
                                            <input
                                                type="datetime-local"
                                                className="w-60 mt-1 bg-white border border-gray-300 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-200 text-black"
                                            />
                                        </div>

                                        {/* Task Status Summary */}
                                        <div className="flex items-center gap-2 mt-2">
                                            <input type="checkbox" id="task-summary" />
                                            <label htmlFor="task-summary">Task status summary is required</label>
                                        </div>
                                    </div>
                                )}

                                {/* Send & Cancel */}
                                <div className="flex gap-3 mt-4">
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-blue-600">
                                        SEND
                                    </button>
                                    <button
                                        className="text-gray-500 text-sm hover:underline"
                                        onClick={() => setExpanded(false)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modal untuk Event */}
            {showEventModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-[700px] text-gray-500 max-h-[90vh] overflow-y-auto rounded-md p-6 relative">
                        <h2 className="text-xl font-bold mb-4">New Event</h2>

                        {/* Isi Form Event */}
                        <div className="space-y-4 text-sm">
                            {/* Event Name */}
                            <input
                                type="text"
                                placeholder="Daily Meet"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                            />

                            {/* Time */}
                            <div className="flex flex-col">
                                <label className="font-semibold">Time</label>
                                <div className="flex space-x-2 mt-1">
                                    <input type="date" className="border rounded-md px-2 py-1 text-sm" />
                                    <input type="time" className="border rounded-md px-2 py-1 text-sm" />
                                    <input type="date" className="border rounded-md px-2 py-1 text-sm" />
                                    <input type="time" className="border rounded-md px-2 py-1 text-sm" />
                                </div>
                            </div>

                            {/* Calendar */}
                            <div className="flex flex-col">
                                <label className="font-semibold">Calendar</label>
                                <select className="border rounded-md px-2 py-1 text-sm">
                                    <option>Company Calendar</option>
                                    <option>Personal Calendar</option>
                                </select>
                            </div>

                            {/* Repeat */}
                            <div className="flex flex-col">
                                <label className="font-semibold">Repeat</label>
                                <div className="flex items-center space-x-2">
                                    <select className="border rounded-md px-2 py-1 text-sm">
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                    <span>every</span>
                                    <input type="number" defaultValue={1} className="w-16 border rounded-md px-2 py-1 text-sm" />
                                    <span>day(s)</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col">
                                <label className="font-semibold">Location</label>
                                <select className="border rounded-md px-2 py-1 text-sm">
                                    <option>Select a meeting room</option>
                                </select>
                            </div>

                            {/* Attendees */}
                            <div className="flex flex-col">
                                <label className="font-semibold">Attendees</label>
                                <div className="flex gap-2 mt-1">
                                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Charlotte Emma</div>
                                    <button className="text-blue-500 hover:underline">+ Add</button>
                                </div>
                            </div>

                            {/* Notify */}
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="notify" />
                                <label htmlFor="notify">Notify when attendees confirm or decline</label>
                            </div>

                            {/* Save and Cancel */}
                            <div className="flex gap-3 mt-6">
                                <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-green-600">
                                    SAVE
                                </button>
                                <button
                                    className="text-gray-500 text-sm hover:underline"
                                    onClick={() => setShowEventModal(false)}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Topbar
