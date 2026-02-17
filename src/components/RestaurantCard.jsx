import React from 'react';

export const RestaurantCard = ({ res }) => {
  // Destructuring with defaults to prevent crashes if data is missing
  const { 
    name = "Restaurant Name", 
    image = "https://via.placeholder.com/400x300", 
    rating = "0.0", 
    cuisine = "Cuisine not specified", 
    price = "0", 
    distance = "0 km",
    isPromoted = false,
    offer = "" 
  } = res || {};

  return (
    <div className="bg-white group cursor-pointer p-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-gray-100">
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* Promoted Tag */}
        {isPromoted && (
          <div className="absolute top-3 left-3 z-10 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
            PROMOTED
          </div>
        )}
        
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        />
        
        {/* Offer Overlay */}
        {offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <p className="text-white font-bold text-sm">{offer}</p>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-800 truncate pr-2 w-3/4">
            {name}
          </h3>
          <div className="bg-[#24963f] text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shrink-0">
            {rating} <span className="text-[10px]">★</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-gray-500 mb-4">
          <p className="text-sm truncate w-1/2">{cuisine}</p>
          <p className="text-sm text-gray-700 font-medium">₹{price} for two</p>
        </div>
        
        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-1">
             <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
             </span>
             <span className="text-[12px] text-gray-400 font-bold uppercase tracking-tight">Safe Delivery</span>
          </div>
          <span className="text-[12px] font-bold text-gray-500 tracking-wider uppercase">
            {distance}
          </span>
        </div>
      </div>
    </div>
  );
};