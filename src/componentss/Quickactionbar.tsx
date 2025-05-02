import { Bell, Settings, Search } from 'lucide-react'

const QuickActionBar = () => {
    return (
        <div className="w-10 flex flex-col items-center py-4 bg-gradient-to-b from-purple-600 to-purple-800 text-white space-y-4">

            {/* Top icons */}
            <div className="relative hover:bg-purple-700">
                <Bell size={18} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] rounded-full w-4 h-4 flex items-center justify-center">20</span>
            </div>

            <Settings size={18} />
            <Search size={18} />

            {/* Divider */}
            <div className="h-0.5 w-6 bg-white opacity-20 my-2" />

            {/* Scrollable avatars */}
            <div className="flex-1 overflow-y-auto space-y-3 px-1">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="relative">
                        <img
                            src={`/img/zans.jpeg`}
                            // src={`/avatar${(i % 6) + 1}.png`}
                            className="w-7 h-7 rounded-full border-2 border-white"
                            alt={`Avatar ${i}`}
                        />
                        {i % 3 === 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">!</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuickActionBar
