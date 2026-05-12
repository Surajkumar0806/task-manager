import React, { useEffect, useState } from 'react';

export default function TaskModal({
  closeModal,
  addTask,
  editingTask,
  updateTask,
}) {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [date, setDate] = useState('');
  const [reminder, setReminder] =
  useState('None');

  const [recurring, setRecurring] =
  useState('None');


  useEffect(() => {

    if (editingTask) {
      setTitle(editingTask.title);
      setCategory(editingTask.category);
      setPriority(editingTask.priority);
      setDate(editingTask.date);
      setReminder(editingTask.reminder || 'None');
      setRecurring(editingTask.recurring || 'None');
    }

  }, [editingTask]);



  const handleSubmit = (e) => {

    e.preventDefault();

    const taskData = {
      title,
      category,
      priority,
      date,
      reminder,
      recurring,
    };


    if (editingTask) {

      updateTask({
        ...editingTask,
        ...taskData,
      });

    } else {

      addTask(taskData);

    }

    closeModal();
  };



  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

      <div className="bg-[#0E1422] border border-[#1F2937] rounded-3xl p-6 w-full max-w-md">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-white">

            {editingTask ? 'Edit Task' : 'Add Task'}

          </h2>


          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

        </div>



        <form onSubmit={handleSubmit} className="space-y-5">


          <div>

            <label className="block text-sm mb-2 text-gray-300">
              Task Title
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
              placeholder="Enter task title"
            />

          </div>



          <div>

            <label className="block text-sm mb-2 text-gray-300">
              Category
            </label>

            <input
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
              placeholder="Enter category"
            />

          </div>



          <div>

            <label className="block text-sm mb-2 text-gray-300">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
            >

              <option>High</option>
              <option>Medium</option>
              <option>Low</option>

            </select>

          </div>



          <div>

            <label className="block text-sm mb-2 text-gray-300">
              Due Date
            </label>

            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
            />

          </div>



          <button
            type="submit"
            
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-3 rounded-xl font-medium hover:scale-[1.02] transition"
          >
            <div>

  <label className="block text-sm mb-2 text-gray-300">
    Reminder
  </label>

  <select
    value={reminder}
    onChange={(e) => setReminder(e.target.value)}
    className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
  >

    <option>None</option>
    <option>1 Hour Before</option>
    <option>1 Day Before</option>

  </select>

</div>



<div>

  <label className="block text-sm mb-2 text-gray-300">
    Recurring
  </label>

  <select
    value={recurring}
    onChange={(e) => setRecurring(e.target.value)}
    className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
  >

    <option>None</option>
    <option>Daily</option>
    <option>Weekly</option>
    <option>Monthly</option>

  </select>

</div>

            {editingTask ? 'Update Task' : 'Add Task'}

          </button>

        </form>

      </div>

    </div>
  );
}