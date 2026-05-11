import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} deleteTask={deleteTask} toggleTask={toggleTask}/>
      ))}
    </ul>
  );
}
