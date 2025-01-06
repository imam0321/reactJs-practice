import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div className="my-2">
      <input
        className="border border-black mx-2 px-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
        className="border rounded-sm border-black px-2"
      >
        Add
      </button>
    </div>
  );
}
