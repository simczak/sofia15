import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ContextSection from './components/ContextSection';
import GuideSection from './components/GuideSection';
import LogisticsSection from './components/LogisticsSection';
import MusicSection from './components/MusicSection';
import WishlistSection from './components/WishlistSection';
import Footer from './components/Footer';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playRsvpSound = () => {
    if (!audioRef.current) {
      // Som de telefone retrô / disco discando
      audioRef.current = new Audio('https://www.soundjay.com/communication/retro-telephone-dialing-1.mp3');
      audioRef.current.volume = 0.5;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(error => {
      console.log("O áudio não pôde ser reproduzido: ", error);
    });
  };

  return (
    <div className="min-h-screen bg-disco-bg text-disco-beige selection:bg-disco-red selection:text-white font-sans">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Divider: Colored Lines - Decreased Margin Top to bring closer to Hero button */}
        <div className="flex w-full h-2 mt-4 md:mt-6">
           <div className="flex-1 bg-disco-red"></div>
           <div className="flex-1 bg-disco-orange"></div>
           <div className="flex-1 bg-disco-yellow"></div>
           <div className="flex-1 bg-disco-teal"></div>
        </div>
        
        <LogisticsSection />

        <ContextSection />
        
        <GuideSection />

        <MusicSection />

        <WishlistSection />
        
        {/* RSVP Section - Enhanced Button */}
        <section id="rsvp" className="py-24 text-center px-4 relative overflow-hidden bg-black">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-disco-teal/20 via-transparent to-transparent opacity-40"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjQwLCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-disco text-4xl md:text-6xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
               VAI FICAR DE FORA?
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10">
              Confirme sua presença e prepare-se para voltar no tempo!
            </p>
            
            <a 
              href="https://wa.me/5541999756896" 
              target="_blank" 
              rel="noreferrer"
              onClick={playRsvpSound}
              className="group relative inline-flex items-center justify-center"
            >
              {/* Pulsing neon background glow */}
              <div className="absolute inset-0 bg-disco-teal blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full animate-pulse"></div>
              
              {/* Main Button with enhanced neon styling and scale animation */}
              <div className="relative bg-black text-disco-teal border-2 border-disco-teal font-retro font-bold py-5 px-16 rounded-full 
                group-hover:bg-disco-teal group-hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-lg md:text-2xl 
                shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.9)] 
                transform group-hover:scale-110 active:scale-95 [text-shadow:0_0_8px_rgba(0,240,255,0.3)] group-hover:[text-shadow:none]">
                 CONFIRMAR PRESENÇA
              </div>
            </a>
            
            <p className="mt-12 text-sm text-gray-500 font-sans tracking-widest uppercase opacity-60">
               Ao clicar, você será redirecionado para o WhatsApp.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;