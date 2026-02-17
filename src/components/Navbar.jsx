import React from 'react';

export const Navbar = ({ setSearchQuery, user, setUser, setView }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 shadow-sm transition-all duration-300">
    <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
      {/* Brand Logo */}
      <h1 
        onClick={() => setView('home')} 
        className="text-3xl font-black italic text-[#EF4F5F] cursor-pointer tracking-tighter hover:scale-105 transition-transform"
      >
        zomato
      </h1>
      
      {/* Dynamic Search Bar */}
      {user.isLoggedIn && (
        <div className="hidden md:flex flex-1 items-center border border-gray-200 rounded-lg px-4 py-2.5 bg-white shadow-inner max-w-xl group focus-within:border-[#EF4F5F] focus-within:ring-1 focus-within:ring-[#EF4F5F]/20 transition-all">
          {/* Professional SVG Search Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400 mr-3 group-focus-within:text-[#EF4F5F] transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          <input 
            type="text" 
            placeholder="Search for restaurant, cuisine or a dish" 
            className="w-full outline-none text-sm text-gray-700 bg-transparent placeholder-gray-400" 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      )}

      {/* User Actions & Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        {user.isLoggedIn ? (
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-xs text-gray-400 uppercase font-bold tracking-widest"></span>
              <span className="text-sm font-semibold text-gray-700">{user.name}</span>
            </div>
            
            {/* Animated Profile Circle */}
            <div className="w-10 h-10 rounded-full bg-[#d00d21] text-white flex items-center justify-center font-bold shadow-lg ring-2 ring-white hover:rotate-12 transition-transform cursor-pointer">
              {user.name ? user.name[0].toUpperCase() : 'U'}
            </div>
            
            <button 
              onClick={() => {setUser({name: "", isLoggedIn: false}); setView('login');}} 
              className="text-gray-500 hover:text-[#EF4F5F] font-bold text-sm transition-colors uppercase tracking-tight"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView('login')} 
              className="text-gray-600 font-bold hover:text-[#EF4F5F] transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={() => setView('register')} 
              className="bg-[#EF4F5F] text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-red-600 transition-all active:scale-95"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  </nav>
);