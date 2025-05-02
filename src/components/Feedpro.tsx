"use client";
import { useState } from "react";

export default function Feed() {
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
        <div className="bg-white rounded-xl p-6 shadow-md max-w-3xl mt-4">
            <h2 className="text-lg font-semibold">Sam Love ➤ To all employees</h2>
            <p className="text-sm text-gray-500 mb-4">Today, 10:30 am</p>
            <div className="space-y-4 text-sm leading-relaxed">
                <p>
                    I'm super excited to share some awesome news with you all! Our recent
                    campaign was a huge success!
                </p>
                <p>
                    I want to take a moment to express my heartfelt gratitude to all the
                    team members...
                </p>
                <p>
                    I also want to give a big shoutout to our awesome customers and
                    partners...
                </p>
                <p>
                    Once again, a huge thank you to each and every one of you...
                </p>
                <p>
                    Best regards, <br />
                    Sam
                </p>
            </div>

            {/* Reaction and Comment Section */}
            <div className="mt-6 pt-4 border-t">
                <div className="flex items-center gap-4 mb-4">
                    <button
                        onClick={toggleLike}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${liked ? "bg-pink-200 text-pink-800" : "bg-gray-100"
                            }`}
                    >
                        {liked ? "💖 You liked this" : "💬 Kiss"}
                    </button>
                </div>

                <div className="space-y-2 mb-4">
                    {comments.map((comment, i) => (
                        <div
                            key={i}
                            className="bg-gray-100 rounded-lg p-2 text-sm text-gray-700"
                        >
                            {comment}
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 border border-gray-300 rounded p-2 text-sm"
                    />
                    <button
                        onClick={handleComment}
                        className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}
