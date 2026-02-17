import React from 'react';

export const Hero = () => {
  const scrollToGrid = () => {
    // Scrolls to the red listing section (adjusted for professional height)
    window.scrollTo({
      top: 750, 
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[65vh] flex flex-col items-center justify-center bg-white text-center px-4 overflow-hidden border-b border-gray-100">
      
      {/* Decorative Floating Elements - Low opacity to keep text readable */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute left-[10%] top-[20%] text-6xl md:text-8xl animate-bounce opacity-20">🍔</span>
        <span className="absolute right-[15%] top-[15%] text-5xl md:text-7xl animate-pulse opacity-20 delay-700">🥟</span>
        <span className="absolute right-[10%] bottom-[20%] text-6xl md:text-8xl animate-bounce opacity-20 delay-300">🍕</span>
      </div>
      
      <div className="z-10 max-w-4xl mx-auto">
        {/* Headline: Solid Zomato Red (#EF4F5F) with 100% opacity */}
        <h1 className="text-5xl md:text-7xl font-black text-[#f9162c] mb-6 tracking-tighter leading-[1.1] opacity-100">
          Better food for <br className="hidden md:block" /> more people
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light px-4">
          For over a decade, we’ve enabled our customers to discover new tastes, 
          delivered right to their doorstep.
        </p>
        
        {/* Scroll Down Prompt - Interactive Group */}
        <div 
          className="mt-16 flex flex-col items-center text-gray-400 group cursor-pointer transition-all duration-300 transform hover:scale-110" 
          onClick={scrollToGrid}
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-3 group-hover:text-[#EF4F5F] transition-colors">
            Scroll down
          </span>
          <div className="p-2 rounded-full border border-gray-100 group-hover:border-[#EF4F5F] group-hover:bg-[#FFF5F6]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 animate-bounce text-gray-300 group-hover:text-[#EF4F5F]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};