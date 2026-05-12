import React, { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';
import TaskModal from './components/TaskModal';
import FilterButtons from './components/FilterButtons';
import StatCard from './components/StatCard';
import MobileNavbar from './components/MobileNavbar';
import CalendarView from './components/CalendarView';
const initialTasks = [
  {
    id: 1,
    title: 'Create Landing Page',
    category: 'UI/UX Design',
    priority: 'High',
    date: 'Aug 14',
    completed: false,
  },
  {
    id: 2,
    title: 'Review Requirements',
    category: 'Website Redesign',
    priority: 'Medium',
    date: 'Aug 15',
    completed: true,
  },
];


export default function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [filter, setFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePage, setActivePage] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] =
  useState(new Date());
  const [editingTask, setEditingTask] = useState(null);



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  const addTask = (task) => {

    setTasks([
      ...tasks,
      {
        ...task,
        id: Date.now(),
        completed: false,
      },
    ]);
  };



  const updateTask = (updatedTask) => {

    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };



  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };



  const toggleComplete = (id) => {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed,
          }
          : task
      )
    );
  };

  const categories = [
    'All',
    ...new Set(tasks.map((task) => task.category)),
  ];

  const filteredTasks = tasks.filter((task) => {

    const matchesStatus =
      filter === 'All'
        ? true
        : filter === 'Completed'
          ? task.completed
          : !task.completed;

    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : task.category === selectedCategory;

    return matchesStatus && matchesCategory;
  });
const homeTasks = selectedDate

  ? tasks.filter((task) => {

      const taskDate = new Date(task.date);

      return (
        taskDate.toDateString() ===
        selectedDate.toDateString()
      );
    })

  : tasks;


  return (

    <div className="min-h-screen bg-[#070B14] text-white flex">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />


<div className="flex-1 p-4 md:p-8 pb-28 md:pb-8">

  {/* HEADER */}
  <div className="flex justify-between items-center mb-8">

    <div>

      <h1 className="text-3xl md:text-4xl font-bold">
        {activePage}
      </h1>

      <p className="text-gray-400 mt-2">
        Organize your work efficiently.
      </p>

    </div>


    <button
      onClick={() => {
        setEditingTask(null);
        setIsModalOpen(true);
      }}
      className="bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 rounded-xl font-medium hover:scale-105 transition"
    >
      + Add Task
    </button>

  </div>



  {/* HOME PAGE */}
{activePage === 'Home' && (

  <>

    {/* TOP DASHBOARD */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">

      {/* STATS */}
      <div className="lg:col-span-1 space-y-4">

        <StatCard
          title="Total Tasks"
          number={tasks.length}
        />

        <StatCard
          title="Completed"
          number={tasks.filter((t) => t.completed).length}
        />

        <StatCard
          title="Pending"
          number={tasks.filter((t) => !t.completed).length}
        />

      </div>



      {/* CALENDAR */}
      <div className="lg:col-span-3">

        <CalendarView
          tasks={tasks}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

      </div>

    </div>



    {/* TASKS SECTION */}
    <div className="space-y-4">

      {homeTasks.length > 0 ? (

        homeTasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={() => {
              setEditingTask(task);
              setIsModalOpen(true);
            }}
          />

        ))

      ) : (

        <div className="bg-[#0E1422] border border-[#1F2937] rounded-3xl p-10 text-center">

          <h2 className="text-2xl font-bold mb-4 text-white">
            No Tasks For This Date
          </h2>

          <p className="text-gray-400">
            Select another date or create a task.
          </p>

        </div>

      )}

    </div>

  </>

)}


  {/* MY TASKS PAGE */}
  {activePage === 'My Tasks' && (

    <>

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />


      <div className="flex gap-3 flex-wrap mt-6">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl transition ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-[#151C2C] hover:bg-[#1C2333]'
            }`}
          >

            {category}

          </button>

        ))}

      </div>



      <div className="space-y-4 mt-6">

        {filteredTasks.length > 0 ? (

          filteredTasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              editTask={() => {
                setEditingTask(task);
                setIsModalOpen(true);
              }}
            />

          ))

        ) : (

          <div className="bg-[#0E1422] border border-[#1F2937] rounded-3xl p-10 text-center">

            <h2 className="text-2xl font-bold mb-4 text-white">
              No Tasks Yet
            </h2>

            <p className="text-gray-400 max-w-md mx-auto">
              Start organizing your work by creating your first task.
            </p>

          </div>

        )}

      </div>

    </>

  )}



  

</div>

      <MobileNavbar
        openModal={() => {
          setEditingTask(null);
          setIsModalOpen(true);
        }}
      />

      {isModalOpen && (

        <TaskModal
          closeModal={() => setIsModalOpen(false)}
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
        />

      )}

    </div>
  );
}