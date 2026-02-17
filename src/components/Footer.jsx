import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white pt-16 pb-10 border-t border-gray-800 mt-auto">
    <div className="max-w-[1100px] mx-auto px-4 md:px-0">
      {/* HEADER SECTION: Brand Identity */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="text-[32px] font-black italic tracking-tighter">zomato</div>
        <div className="flex gap-4">
          <button className="border border-gray-700 px-4 py-1.5 rounded text-sm flex items-center gap-2 hover:bg-white/5 transition">
            <span className="grayscale">🇮🇳</span> India
          </button>
          <button className="border border-gray-700 px-4 py-1.5 rounded text-sm flex items-center gap-2 hover:bg-white/5 transition">
            🌐 English
          </button>
        </div>
      </div>

      {/* LINKS SECTION: 5-Column Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-[14px] text-gray-400">
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-3 uppercase tracking-[2px] text-[12px]">Eternal</h4>
          <span className="hover:text-white cursor-pointer transition">Zomato</span>
          <span className="hover:text-white cursor-pointer transition">Blinkit</span>
          <span className="hover:text-white cursor-pointer transition">District</span>
          <span className="hover:text-white cursor-pointer transition">Hyperpure</span>
          <span className="hover:text-white cursor-pointer transition">Investor Relations</span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-3 uppercase tracking-[2px] text-[12px]">For Restaurants</h4>
          <span className="hover:text-white cursor-pointer transition">Partner With Us</span>
          <span className="hover:text-white cursor-pointer transition">Apps For You</span>
          
          <h4 className="text-white font-bold mt-6 mb-3 uppercase tracking-[2px] text-[12px]">For Delivery Partners</h4>
          <span className="hover:text-white cursor-pointer transition">Partner With Us</span>
          <span className="hover:text-white cursor-pointer transition">Apps For You</span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-3 uppercase tracking-[2px] text-[12px]">Learn More</h4>
          <span className="hover:text-white cursor-pointer transition">Privacy</span>
          <span className="hover:text-white cursor-pointer transition">Security</span>
          <span className="hover:text-white cursor-pointer transition">Terms</span>
          <span className="hover:text-white cursor-pointer transition">Sitemap</span>
        </div>

        <div className="col-span-2 md:col-span-2 flex flex-col items-start md:items-end">
          <h4 className="text-white font-bold mb-4 uppercase tracking-[2px] text-[12px] w-full md:text-left">Social Links</h4>
          
          {/* Circular Social Icons Matching Your Reference */}
          <div className="flex gap-2 mb-6 w-full md:text-left">
            {['in', 'ig', 'yt', 'fb', 'x'].map((icon) => (
              <div 
                key={icon} 
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <span className="text-black text-[10px] font-black uppercase">{icon}</span>
              </div>
            ))}
          </div>
          
          {/* Official App Store Badges */}
          <div className="flex flex-col gap-3 w-full max-w-[160px]">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
               alt="App store" 
               className="w-full cursor-pointer hover:opacity-80 transition" 
             />
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
               alt="Play store" 
               className="w-full cursor-pointer hover:opacity-80 transition" 
             />
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION: Legal & Disclaimers */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-[12px] text-gray-500 leading-relaxed text-center md:text-left">
        <p className="mb-4">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
        </p>
        <p>2008-2026 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;