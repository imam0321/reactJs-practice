import React, { useState } from "react";

export default function EditPost({ post, onEditPost }) {
  const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = {
            id: post.id,
            title,
            body,
        };
        onEditPost(updatedPost);

        // reset form
        setTitle("");
        setBody("");
    };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Edit post</h2>

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
