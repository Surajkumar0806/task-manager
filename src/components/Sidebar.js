import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaUser,
} from 'react-icons/fa';

export default function Sidebar({
  activePage,
  setActivePage,
}) {

  return (

    <div className="hidden md:flex flex-col justify-between w-64 bg-[#0E1422] border-r border-[#1C2333] p-6">

      {/* TOP SECTION */}
      <div>

        {/* LOGO */}
        <h1 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          TaskFlow
        </h1>



        {/* NAVIGATION */}
        <nav className="space-y-4">

          <SidebarItem
  icon={<FaHome />}
  text="Home"
  active={activePage === 'Home'}
  onClick={() => setActivePage('Home')}
/>

          <SidebarItem
  icon={<FaTasks />}
  text="My Tasks"
  active={activePage === 'My Tasks'}
  onClick={() => setActivePage('My Tasks')}
/>

          <SidebarItem
  icon={<FaCalendarAlt />}
  text="Calendar"
  active={activePage === 'Calendar'}
  onClick={() => setActivePage('Calendar')}
/>

          

        </nav>

      </div>



      {/* BOTTOM CARD */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl p-5">

        <h2 className="font-bold text-xl mb-3">
          Stay Productive
        </h2>

        <p className="text-sm text-gray-100 leading-relaxed">
          Organize your tasks efficiently and stay focused every day.
        </p>

      </div>

    </div>
  );
}



function SidebarItem({
  icon,
  text,
  active,
  onClick,
}) {

  return (

    <button
        onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition ${
        active
          ? 'bg-gradient-to-r from-purple-600 to-blue-500'
          : 'hover:bg-[#161E2E]'
      }`}
    >

      <span className="text-lg">
        {icon}
      </span>

      <span className="font-medium">
        {text}
      </span>

    </button>
  );
}