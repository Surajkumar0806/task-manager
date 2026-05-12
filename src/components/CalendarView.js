import { useState } from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import '../calendar.css';


export default function CalendarView({
  tasks,
  selectedDate,
  setSelectedDate,
}) {

//   const [selectedDate, setSelectedDate] =
//     useState(new Date());



  const selectedTasks = tasks.filter((task) => {

    const taskDate = new Date(task.date);

    return (
      taskDate.toDateString() ===
      selectedDate.toDateString()
    );
  });



  return (

    <div className="bg-[#0E1422] border border-[#1F2937] rounded-3xl p-4 ">

      <h2 className="text-2xl font-bold mb-6">
        Calendar
      </h2>



      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="w-full rounded-2xl overflow-hidden border-none"
        tileContent={({ date, view }) => {

          if (view !== 'month') return null;

          const hasTask = tasks.some((task) => {

            const taskDate = new Date(task.date);

            return (
              taskDate.toDateString() ===
              date.toDateString()
            );
          });


          return hasTask ? (

            <div className="flex justify-center mt-1">

              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>

            </div>

          ) : null;
        }}
      />



      {/* SELECTED DATE TASKS */}
      <div className="mt-8">

        <h3 className="text-xl font-semibold mb-4">

          {selectedDate.toLocaleDateString(
            'en-US',
            {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }
          )}

        </h3>



        {selectedTasks.length > 0 ? (

          <div className="space-y-3">

            {selectedTasks.map((task) => (

              <div
                key={task.id}
                className="bg-[#111827] border border-[#1F2937] rounded-2xl p-4"
              >

                <h4 className="font-medium">
                  {task.title}
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  {task.category}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 text-center text-gray-400">

            No tasks for this date

          </div>

        )}

      </div>

    </div>
  );
}