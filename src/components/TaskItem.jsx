import React from "react";

export default function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <span
        onClick={()=>toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "green" : "black"
        }}
      >
        {task.text}
      </span>
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </li>
  );
}
