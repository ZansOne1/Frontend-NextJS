import { FaApple, FaGooglePlay, FaLinux, FaWindows } from 'react-icons/fa'

const Rightpanel = () => {
    return (
        <aside className="w-[280px] h-max p-4 space-y-4 bg-gradient-to-b from-purple-400 to-purple-600 text-white text-sm">

            {/* Announcements */}
            <div className="bg-orange-500 rounded-lg p-2 space-y-2">
                <p className="text-xs font-bold">ANNOUNCEMENTS</p>
                <div className="bg-yellow-200 rounded-lg p-3 text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                        <img
                            src="/img/zans.jpeg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="text-xs font-bold text-blue-600">Sam Kwan</div>
                    </div>
                    <p className="text-xs text-gray-600">Unity in the workforce. We can all see that technology is developing with blinding speed...</p>
                    <div className="flex justify-between items-center text-xs">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-[10px]">Mark as read</button>
                        <span className="text-gray-400">1 / 11</span>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-blue-400 rounded-lg p-2 space-y-2">
                <div className="flex justify-between items-center">
                    <p className="text-xs font-bold">UPCOMING EVENTS</p>
                    <button className="bg-yellow-300 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">+</button>
                </div>

                <div className="space-y-3">
                    {[
                        { date: '12', day: 'MON', time: '08:00 am - 09:00 am', title: 'Review Sprint' },
                        { date: '12', day: 'MON', time: '09:00 am - 10:00 am', title: 'Daily Planning Meeting' },
                        { date: '12', day: 'MON', time: '02:00 pm - 03:00 pm', title: 'Sprint Retrospective' },
                        { date: '12', day: 'MON', time: '04:00 pm - 05:00 pm', title: 'Plan Sprint' },
                        { date: '13', day: 'TUE', time: '09:00 am - 10:00 am', title: 'Daily Planning Meeting' },
                    ].map((event, i) => (
                        <div key={i} className="bg-white rounded-lg flex gap-3 p-2 items-center text-gray-700">
                            <div className="flex flex-col items-center text-blue-500 font-bold text-[10px] w-10">
                                <span>{event.day}</span>
                                <span className="text-lg">{event.date}</span>
                            </div>
                            <div className="flex flex-col text-[10px]">
                                <span>{event.time}</span>
                                <span className="text-xs font-bold">{event.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workflows */}
            <div className="bg-cyan-400 rounded-lg p-2 space-y-1">
                <p className="text-xs font-bold text-white">WORKFLOWS</p>
                {[
                    { title: 'Pending', count: 2 },
                    { title: 'Feed', count: 2 },
                    { title: 'My Workflows', count: 5 },
                ].map((flow, i) => (
                    <div key={i} className="flex justify-between items-center text-xs bg-white text-gray-700 rounded-md px-3 py-1">
                        <span>{flow.title}</span>
                        <span className="font-bold">{flow.count}</span>
                    </div>
                ))}
            </div>

            {/* Top - Live Clocked In */}
            <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-3 shadow-sm">
                {/* Badge + LIVE */}
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        28
                    </div>
                    <span className="absolute -top-1 -left-2 text-[10px] bg-red-500 text-white px-1.5 rounded-full shadow">
                        LIVE
                    </span>
                </div>

                {/* Avatar & Info */}
                <div>
                    <div className="flex -space-x-2 mb-1">
                        {[...Array(7)].map((_, i) => (
                            <img
                                key={i}
                                src={`/img/zans.jpeg`}
                                // src={`/avatar${(i % 6) + 1}.png`}
                                className="w-6 h-6 rounded-full border-2 border-white"
                                alt={`Avatar ${i}`}
                            />
                        ))}
                    </div>
                    <p className=" text-gray-700" style={{ fontSize: '9px' }}>
                        CLOCKED IN <b className="text-gray-900">27</b> &nbsp; CLOCKED OUT <b className="text-gray-400">0</b>
                    </p>
                </div>
            </div>

            {/* Company Pulse */}
            <div className="bg-blue-400 rounded-lg px-3 py-1">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white bg-blue-400 px-2 rounded-full">
                        COMPANY PULSE
                    </span>
                    <div className="flex items-center bg-white rounded-lg px-3 space-x-2">
                        <span className="text-base font-bold text-gray-800">89</span>
                        <span className="text-[10px] text-blue-400 font-semibold">45%</span>
                    </div>
                </div>
            </div>



            {/* My Tasks */}
            <div className="bg-white text-purple-700 rounded-lg space-y-2">
                <div className="flex justify-between items-center px-3 py-1 bg-blue-400 w-full rounded-t-lg">
                    <p className="text-xs text-white font-bold">MY TASKS</p>
                    <button id="task" className="bg-blue-400 text-white w-5 h-5 text-xs font-bold">+</button>
                </div>
                {[
                    { title: 'Ongoing', count: 8, badge: 1 },
                    { title: 'Assisting', count: 2, badge: 0 },
                    { title: 'Set by me', count: 5, badge: 0 },
                    { title: 'Following', count: 1, badge: 0 },
                ].map((task, i) => (
                    <div key={i} className="flex px-3 py-1 justify-between items-center text-sm">
                        <span className='text-gray-500'>{task.title}</span>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-500">{task.count}</span>
                            <span className="bg-red-200 text-red-500 font-bold text-[10px] p-1 text-center rounded-full w-5 h-5">
                                {task.badge}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Client */}
            <div className="bg-white text-purple-700 rounded-lg">
                <div className="flex justify-between items-center px-3 py-1 bg-green-400 w-full rounded-t-lg">
                    <p className="text-xs text-white font-bold ">DESKTOP CLIENT</p>
                </div>
                <div className="flex justify-around p-2">
                    <div className="flex flex-col text-gray-500 font-bold items-center">
                        <FaApple size={20} />
                        <span className="text-[11px] mt-1">MAC OS</span>
                    </div>
                    <div className="flex flex-col text-gray-500 font-bold items-center">
                        <FaWindows size={20} />
                        <span className="text-[11px] mt-1">WINDOWS</span>
                    </div>
                    <div className="flex flex-col text-gray-500 font-bold items-center">
                        <FaLinux size={20} />
                        <span className="text-[11px] mt-1">LINUX</span>
                    </div>
                </div>
            </div>

            {/* Mobile Application */}
            <div className="bg-white text-purple-700 rounded-lg">
                <div className="flex justify-between items-center px-3 py-1 bg-blue-400 w-full rounded-t-lg">
                    <p className="text-xs text-white font-bold ">MOBILE APPLICATION</p>
                </div>
                <div className="flex justify-around text-[11px] p-2">
                    <div className="flex flex-col text-gray-500 font-bold items-center">
                        <FaApple size={20} />
                        <span className="mt-1">APP STORE</span>
                    </div>
                    <div className="flex flex-col text-gray-500 font-bold items-center">
                        {/* <img src="/google-play.svg" alt="Google Play" className="w-5 h-5" /> */}
                        <FaGooglePlay size={20} />
                        <span className="mt-1">GOOGLE PLAY</span>
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default Rightpanel
