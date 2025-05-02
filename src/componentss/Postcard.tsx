// components/PostCard.tsx
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react';

const PostCard = () => {
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const toggleLike = () => setLiked(!liked);

    const handleComment = () => {
        if (input.trim() !== "") {
            setComments([...comments, input.trim()]);
            setInput("");
        }
    };
    return (
        <>
            <div className="relative w-full bg-white rounded-lg shadow-md p-6 mb-6">
                {/* Tiga titik pojok kanan atas */}
                <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                    <MoreHorizontal size={20} />
                </div>

                {/* Header */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/img/zans.jpeg"
                        className="w-10 h-10 rounded-full"
                        alt="Avatar"
                    />
                    <div>
                        <p className="font-semibold text-sm">Sam Love</p>
                        <p className="text-xs text-gray-500">To all employees • Today, 10:30 am</p>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <p>Hey team,</p>
                    <p>
                        I'm super excited to share some awesome news with you all! Our recent campaign was a huge success!
                        We achieved an open rate of 74% and a click rate of 19.3%!
                    </p>
                    <p>
                        Your creativity, expertise, and commitment have made a huge impact. Big shoutout to all of you!
                    </p>
                </div>

                {/* Footer actions */}
                <div className="mt-4 flex text-xs text-gray-500 space-x-6 border-t pt-2">
                    <button id='like' className="hover:text-blue-600">Kiss</button>
                    <button id='comment' className="hover:text-blue-600">Comment</button>
                    <button id='more' className="hover:text-blue-600">More</button>
                    <span>• 10</span>
                </div>

                {/* Comment */}
                <div className="mt-4 flex items-start space-x-3">
                    <img
                        src="/img/zans.jpeg"
                        className="w-8 h-8 rounded-full"
                        alt="Commenter"
                    />
                    <div className="flex bg-gray-100 p-2 text-gray-700 rounded-lg text-sm">
                        <p className="font-medium ">Julia Miller, So cool! 🔥</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-white rounded-lg shadow-md p-6 mb-6">
                {/* Tiga titik pojok kanan atas */}
                <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                    <MoreHorizontal size={20} />
                </div>

                {/* Header */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/img/zans.jpeg"
                        className="w-10 h-10 rounded-full"
                        alt="Avatar"
                    />
                    <div>
                        <p className="font-semibold text-sm">Sam Love</p>
                        <p className="text-xs text-gray-500">To all employees • Today, 10:30 am</p>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <p>Hey team,</p>
                    <p>
                        I'm super excited to share some awesome news with you all! Our recent campaign was a huge success!
                        We achieved an open rate of 74% and a click rate of 19.3%!
                    </p>
                    <p>
                        Your creativity, expertise, and commitment have made a huge impact. Big shoutout to all of you!
                    </p>
                </div>

                {/* Footer actions */}
                <div className="mt-4 flex text-xs text-gray-500 space-x-6 border-t pt-2 pb-2">
                    <button
                        onClick={toggleLike}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${liked ? "bg-pink-200 text-pink-800" : "bg-gray-100"
                            }`}
                    >
                        {liked ? "💖 You liked this" : "💬 Like"}
                    </button>

                    <button id='more2' className="hover:text-blue-600">More</button>
                    <span className='pt-1'>• 10</span>
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 border border-gray-300 rounded p-2 text-sm text-black"
                    />
                    <button
                        onClick={handleComment}
                        className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
                    >
                        Post
                    </button>
                </div>

                {/* Comment */}
                <div className="mt-2 bg-purple-200 p-4 rounded-lg space-y-4 text-sm">

                    {/* Komentar utama (teman) */}
                    <div className="flex items-start space-x-3">
                        <img
                            src="/img/zans.jpeg"
                            className="w-8 h-8 rounded-full"
                            alt="Commenter"
                        />
                        <div className="bg-gray-100 p-3 rounded-lg text-gray-800 max-w-xs">
                            <p className="font-medium">Julia Miller</p>
                            <p>So cool! 🔥</p>
                        </div>
                    </div>

                    {/* Balasan / Komentar lain */}
                    <div className="space-y-3">
                        {comments.map((comment, i) => {
                            const isMe = comment.startsWith("me:"); // Aturan: komentar kita diawali "me:"
                            const cleanComment = comment.replace(/^me:/, "");

                            return (
                                <div
                                    key={i}
                                    className={`flex items-start space-x-2 ${isMe ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    {!isMe && (
                                        <img
                                            src="/img/zans.jpeg"
                                            className="w-6 h-6 rounded-full"
                                            alt="Commenter"
                                        />
                                    )}
                                    <div
                                        className={`p-3 rounded-lg max-w-xs ${isMe
                                            ? "bg-purple-600 text-white rounded-br-none"
                                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                                            }`}
                                    >
                                        <p className="font-medium">{isMe ? "You" : "Zans"}</p>
                                        <p>{cleanComment}</p>
                                    </div>
                                    {isMe && (
                                        <img
                                            src="/img/zans.jpeg"
                                            className="w-6 h-6 rounded-full"
                                            alt="You"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </>
    )
}

export default PostCard
