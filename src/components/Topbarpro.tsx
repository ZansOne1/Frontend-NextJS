export default function Topbar() {
    return (
        <div className="bg-purple-500 px-6 py-4 shadow flex items-center justify-between">
            <input type="text" placeholder="Search..." className="border p-2 rounded w-1/3" />
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">12:55 PM ● Working</span>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
        </div>
    );
}
