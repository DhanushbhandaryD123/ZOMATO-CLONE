import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RestaurantCard } from './components/RestaurantCard';
import FilterBar from './components/FilterBar'; 
import Footer from './components/Footer'; 
import Login from './components/Login';
import Register from './components/Register';
import staticData from './data.json';

function App() {
  const [view, setView] = useState('register'); 
  const [user, setUser] = useState({ name: "", isLoggedIn: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredRestaurants = staticData.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'rating') return matchesSearch && res.rating >= 4.0;
    if (["Pizza", "Burger", "Biryani"].includes(activeFilter)) {
      return matchesSearch && res.cuisine.includes(activeFilter);
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans transition-all duration-500">
      <Navbar setSearchQuery={setSearchQuery} user={user} setUser={setUser} setView={setView} />
      
      <main className="flex-grow w-full">
        <div className="animate-fade-in">
          {view === 'register' && <Register setView={setView} />}
          {view === 'login' && <Login setView={setView} setUser={setUser} />}

          {view === 'home' && (
            <>
              {/* SECTION 1: PROFESSIONAL HERO - Corrected Red Heading */}
              <section className="bg-white py-24 border-b border-gray-100 flex flex-col items-center justify-center min-h-[65vh] text-center">
                <div className="max-w-7xl mx-auto px-4">
                  <h1 className="text-5xl md:text-7xl font-black text-[#EF4F5F] mb-6 tracking-tighter leading-[1.1] opacity-100">
                    Better food for <br className="hidden md:block" /> more people
                  </h1>
                  <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    For over a decade, we’ve enabled our customers to discover new tastes, 
                    delivered right to their doorstep.
                  </p>
                  
                  {/* Decorative Floating Icons */}
                  <div className="flex gap-12 mt-14 justify-center text-6xl opacity-90 select-none">
                     <span className="animate-bounce">🍔</span>
                     <span className="animate-pulse">🥟</span>
                     <span className="animate-bounce delay-150">🍕</span>
                  </div>

                  {/* Scroll Down Prompt */}
                  <div 
                    onClick={() => window.scrollTo({top: 750, behavior: 'smooth'})}
                    className="mt-20 flex flex-col items-center text-gray-400 cursor-pointer hover:text-[#EF4F5F] transition-all group"
                  >
                    <span className="text-[10px] uppercase font-bold tracking-[4px] mb-3 group-hover:translate-y-1 transition-transform">Scroll down</span>
                    <div className="p-2 rounded-full border border-gray-100 group-hover:border-[#EF4F5F]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: PRODUCT GRID - Professional Red Listing Background */}
              <div className="bg-[#ec2727] py-16 min-h-screen transition-colors duration-500">
                <div className="max-w-[1100px] mx-auto px-4">
                  
                  {/* Sticky Filter Bar */}
                  <div className="sticky top-20 z-40 mb-10 py-2">
                    <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">
                    Best Food in Your Area
                  </h2>

                  {filteredRestaurants.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                      {filteredRestaurants.map(res => (
                        <RestaurantCard key={res.id} res={res} />
                      ))}
                    </div>
                  ) : (
                    /* Empty State UI */
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                      <img 
                        src="https://b.zmtcdn.com/webFrontend/61d10667e376037a5078519fc77c07801584428782.png" 
                        alt="No results" 
                        className="w-64 opacity-80 mb-8 brightness-0 invert"
                      />
                      <p className="text-2xl text-white font-medium">No results match your search.</p>
                      <button 
                        onClick={() => {setSearchQuery(""); setActiveFilter(null);}} 
                        className="bg-white text-[#ec2727] px-8 py-3 rounded-xl mt-8 font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;