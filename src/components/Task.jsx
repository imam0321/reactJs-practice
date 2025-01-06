import { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
          className="border rounded-sm border-black px-2"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="border border-black px-1"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
          className="border rounded-sm border-black px-1"
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <li>
      <label className="flex gap-2 my-2 mx-2">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
          className="border border-black"
        />
        {taskContent}
        <button
          onClick={() => onDeleteTask(task.id)}
          className="border rounded-sm border-black px-2"
        >
          Delete
        </button>
      </label>
    </li>
  );
}
