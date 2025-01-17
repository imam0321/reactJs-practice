import React, { useState } from "react";

export default function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
        };
        onAddPost(newPost);

        // reset form
        setTitle("");
        setBody("");
    };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Add new post</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Post title"
            className="border border-black my-2 px-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="Post body"
            className="border border-black my-2 px-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>

        <div>
          <input className='border-2 border-x-green-400 rounded-lg px-4 py-1' type="submit" />
        </div>
      </form>
    </div>
  );
}
