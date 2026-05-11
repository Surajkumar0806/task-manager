import React, { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={() => { addTask(input); setInput(""); }}>Add</button>
    </div>
  );
}
