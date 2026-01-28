import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-disco-teal/20 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-retro text-disco-orange text-sm md:text-xl mb-6 tracking-[0.3em] uppercase animate-pulse">
          De volta aos
        </h2>
        
        {/* Layered "Anos 80" Effect using Monoton */}
        <div className="relative inline-block">
            <h1 className="font-disco text-5xl md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-b from-disco-red via-disco-orange to-disco-yellow drop-shadow-[0_0_25px_rgba(255,42,42,0.6)] leading-none uppercase">
            Anos 80
            </h1>
        </div>

        <h3 className="font-cursive text-5xl md:text-7xl text-disco-teal -mt-2 md:-mt-4 mb-8 transform -rotate-3 drop-shadow-[0_0_5px_#00F0FF]">
          Sofia 15 anos
        </h3>
        
        <p className="font-sans text-disco-beige text-lg md:text-xl max-w-lg mx-auto mb-8">
            Bem-vindo à melhor década de todas! Você é meu convidado especial para uma noite mágica de brilho, dança e nostalgia.
        </p>

        <Countdown />

        {/* Decreased Margin Bottom to bring button closer to the divider */}
        <div className="mt-12 mb-6 md:mb-10">
          <a 
            href="https://wa.me/5541999756896"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            {/* Pulsing neon background glow - Red */}
            <div className="absolute inset-0 bg-disco-red blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-full animate-pulse"></div>
            
            {/* Main Button styled in Disco Red Neon */}
            <div className="relative bg-black text-disco-red border-2 border-disco-red font-retro font-bold py-4 px-10 rounded-full 
              group-hover:bg-disco-red group-hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm md:text-base 
              shadow-[0_0_15px_rgba(255,42,42,0.4)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.8)] 
              transform group-hover:scale-105 active:scale-95 [text-shadow:0_0_8px_rgba(255,42,42,0.3)] group-hover:[text-shadow:none]">
               CONFIRMAR PRESENÇA
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;