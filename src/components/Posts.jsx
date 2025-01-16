import React from "react";

export default function Posts({ posts, onDeletePost, onEditClick }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">All Posts</h2>
      <div>
        <ul className="ms-2">
          {posts.map((post) => (
            <li className="ms-2 flex gap-2" key={post.id}>
              <span>{post.id}</span>
              <span>{post.title}</span>
              <div>
                <span onClick={() => onDeletePost(post.id)}>❌</span>
                <span onClick={() => onEditClick(post)}>✏️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
