export default function FilterButtons({
  filter,
  setFilter,
}) {

  const filters = ['All', 'To Do', 'Completed'];

  return (
    <div className="flex gap-3 flex-wrap">

      {filters.map((item) => (

        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-5 py-2 rounded-xl transition ${
            filter === item
              ? 'bg-gradient-to-r from-purple-600 to-blue-500'
              : 'bg-[#151C2C] hover:bg-[#1C2333]'
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}