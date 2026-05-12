import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaUser,
  FaPlus,
} from 'react-icons/fa';


export default function MobileNavbar({
  openModal,
}) {

  return (

    <div className="fixed bottom-0 left-0 right-0 bg-[#0E1422] border-t border-[#1C2333] px-6 py-4 flex justify-between items-center md:hidden z-40">

      <MobileIcon icon={<FaHome />} />

      <MobileIcon icon={<FaTasks />} />


      {/* FLOATING BUTTON */}
      <button
        onClick={openModal}
        className="bg-gradient-to-r from-purple-600 to-blue-500 p-5 rounded-full -mt-12 shadow-2xl hover:scale-110 transition"
      >

        <FaPlus className="text-white text-lg" />

      </button>


      <MobileIcon icon={<FaCalendarAlt />} />

      <MobileIcon icon={<FaUser />} />

    </div>
  );
}



function MobileIcon({
  icon,
}) {

  return (

    <button className="text-gray-400 hover:text-white transition text-xl">

      {icon}

    </button>
  );
}