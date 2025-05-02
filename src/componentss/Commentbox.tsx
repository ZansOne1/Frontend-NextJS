"use client";

import { useState } from "react";

export default function CommentBox() {
    const [comments, setComments] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim()) {
            setComments([...comments, input]);
            setInput("");
        }
    };

    return (
        <div className="mt-4 space-y-3">
            {comments.map((comment, idx) => (
                <div key={idx} className="text-sm text-gray-700 bg-gray-100 p-2 rounded">
                    <strong>Julia Miller:</strong> {comment}
                </div>
            ))}

            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 border rounded px-2 py-1 text-sm"
                    placeholder="Write a comment..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    id="post"
                    onClick={handleSubmit}
                    className="bg-purple-600 text-white px-4 py-1 rounded text-sm"
                >
                    Post
                </button>
            </div>
        </div>
    );
}
