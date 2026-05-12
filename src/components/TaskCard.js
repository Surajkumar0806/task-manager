import { motion } from 'framer-motion';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa';
const today = new Date();

today.setHours(0, 0, 0, 0);

export default function TaskCard({
    task,
    toggleComplete,
    deleteTask,
    editTask,
}) {
    const taskDate = new Date(task.date);

    taskDate.setHours(0, 0, 0, 0);

    const isOverdue =
        taskDate < today && !task.completed;

    const isToday =
        taskDate.getTime() === today.getTime();

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className={`bg-[#111827] border rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition hover:border-purple-500 ${task.completed
                    ? 'opacity-60 border-[#1F2937]'
                    : isOverdue
                        ? 'border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                        : isToday
                            ? 'border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                            : 'border-[#1F2937]'
                }`}
        >

            {/* LEFT SIDE */}
            <div className="flex items-start gap-4">

                <button
                    onClick={() => toggleComplete(task.id)}
                    className={`w-6 h-6 rounded-full border-2 mt-1 transition ${task.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-500'
                        }`}
                ></button>



                <div>

                    <h3
                        className={`text-lg font-medium ${task.completed
                                ? 'line-through text-gray-500'
                                : ''
                            }`}
                    >
                        {task.title}
                    </h3>


                    <p className="text-gray-400 text-sm mt-1">
                        {task.category}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">

                        {task.reminder &&
                            task.reminder !== 'None' && (

                                <div className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">

                                    🔔 {task.reminder}

                                </div>

                            )}


                        {task.recurring &&
                            task.recurring !== 'None' && (

                                <div className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">

                                    🔄 {task.recurring}

                                </div>

                            )}

                    </div>
                </div>

            </div>



            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 flex-wrap">

                <p className="text-gray-400 text-sm">

                    {new Date(task.date).toLocaleDateString(
                        'en-US',
                        {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        }
                    )}

                </p>
                {isOverdue && (

                    <p className="text-red-400 text-xs font-medium">
                        Overdue
                    </p>

                )}

                {isToday && !task.completed && (

                    <p className="text-blue-400 text-xs font-medium">
                        Due Today
                    </p>

                )}


                <PriorityBadge
                    priority={task.priority}
                />



                <button
                    onClick={editTask}
                    className="text-blue-400 hover:text-blue-300 transition"
                >
                    <FaEdit />
                </button>



                <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-400 hover:text-red-300 transition"
                >
                    <FaTrash />
                </button>

            </div>

        </motion.div>
    );
}



function PriorityBadge({ priority }) {

    const colors = {
        High: 'bg-red-500/20 text-red-400',
        Medium: 'bg-yellow-500/20 text-yellow-400',
        Low: 'bg-green-500/20 text-green-400',
    };


    return (

        <div
            className={`px-4 py-1 rounded-full text-sm ${colors[priority]}`}
        >

            {priority}

        </div>
    );
}