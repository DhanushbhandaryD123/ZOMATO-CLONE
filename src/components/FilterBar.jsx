const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const cuisines = ["Pizza", "Burger", "Biryani"];

  return (
    <div className="flex gap-3 my-6 overflow-x-auto no-scrollbar pb-2">
      <button 
        onClick={() => setActiveFilter(activeFilter === "rating" ? null : "rating")}
        className={`px-4 py-1.5 border rounded-lg whitespace-nowrap transition
          ${activeFilter === "rating" ? 'bg-[#EF4F5F] text-white border-[#EF4F5F]' : 'bg-white text-gray-500 border-gray-300'}`}
      >
        Rating 4.0+
      </button>

      {cuisines.map(cuisine => (
        <button 
          key={cuisine}
          onClick={() => setActiveFilter(activeFilter === cuisine ? null : cuisine)}
          className={`px-4 py-1.5 border rounded-lg whitespace-nowrap transition
            ${activeFilter === cuisine ? 'bg-[#EF4F5F] text-white border-[#EF4F5F]' : 'bg-white text-gray-500 border-gray-300'}`}
        >
          {cuisine}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;