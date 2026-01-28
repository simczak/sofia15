import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-12 text-center relative z-10 overflow-hidden border-t border-white/5">
      
      {/* 80s Style Rainbow Stripes Grid - Full Width */}
      <div className="absolute top-0 left-0 w-full flex flex-col">
         <div className="h-2 w-full bg-disco-red shadow-[0_0_15px_rgba(255,42,42,0.5)]"></div>
         <div className="h-2 w-full bg-disco-orange shadow-[0_0_15px_rgba(255,127,0,0.5)]"></div>
         <div className="h-2 w-full bg-disco-yellow shadow-[0_0_15px_rgba(255,229,0,0.5)]"></div>
         <div className="h-2 w-full bg-disco-teal shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
      </div>

      {/* Subtle Grid Pattern Overlay (Synthwave Style) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          
          {/* Stylized Name & Year Group */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-8">
            <h2 className="font-disco text-6xl md:text-8xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] tracking-tighter">
              SOFIA
            </h2>
            
            <div className="hidden md:block h-20 w-1 bg-gradient-to-b from-disco-red via-disco-yellow to-disco-teal rounded-full opacity-50"></div>
            
            <div className="flex flex-col items-center md:items-start">
               <span className="font-retro text-4xl md:text-5xl text-disco-yellow tracking-[0.2em] drop-shadow-[0_0_10px_#FFE500]">
                 2026
               </span>
               <span className="font-retro text-[10px] text-disco-teal uppercase tracking-[0.5em] mt-1">
                 The Golden Era
               </span>
            </div>
          </div>

          {/* Decorative Divider Line */}
          <div className="flex justify-center gap-8 mb-10 w-full max-w-xs">
             <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-disco-red to-transparent"></div>
             <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-disco-teal to-transparent"></div>
          </div>

          <h3 className="font-disco text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-disco-red via-disco-orange to-disco-yellow opacity-60 mb-8 uppercase tracking-widest">
             80's Disco Party
          </h3>
          
          {/* Copyright & Credits */}
          <div className="space-y-3">
            <p className="font-sans text-xs text-disco-beige/40 uppercase tracking-[0.3em] font-bold">
              © 2026 Sofia Wille • 15 Anos
            </p>
            <div className="flex items-center justify-center gap-2 opacity-20">
               <div className="w-1.5 h-1.5 rounded-full bg-disco-red"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-disco-orange"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-disco-yellow"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-disco-teal"></div>
            </div>
            <p className="font-sans text-[10px] text-disco-beige/20 uppercase tracking-widest">
              Design Retrô • Curitiba - PR
            </p>
          </div>
        </div>
      </div>
      
      {/* Abstract geometric accents for depth */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-disco-red/10 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 border-4 border-disco-teal/5 rounded-full animate-spin-slow"></div>
      
    </footer>
  );
};

export default Footer;