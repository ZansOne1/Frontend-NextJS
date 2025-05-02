import { FaHome, FaTasks, FaUsers, FaComments } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-20 bg-purple-900 text-white flex flex-col items-center py-4 space-y-6">
            <div className="text-xl font-bold">Z</div>
            <div className="flex flex-col space-y-4">
                {[FaHome, FaTasks, FaUsers, FaComments].map((Icon, idx) => (
                    <Icon key={idx} className="w-6 h-6 hover:text-purple-300 cursor-pointer" />
                ))}
            </div>
        </div>
    );
}