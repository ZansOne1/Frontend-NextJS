"use client";
import { useState } from "react";

export default function ReactionBar() {
    const [liked, setLiked] = useState(false);

    return (
        <div className="flex gap-4 mt-4 border-t pt-4 text-sm">
            <button
                id="kiss"
                onClick={() => setLiked(!liked)}
                className={`${liked ? "text-pink-600" : "text-gray-600"
                    } hover:underline`}
            >
                {liked ? "💖 Kiss" : "Kiss"}
            </button>
            <button id="komen" className="text-gray-600 hover:underline">Comment</button>
            <button id="unfollow" className="text-gray-600 hover:underline">Unfollow</button>
        </div>
    );
}
