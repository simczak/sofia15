import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Disc } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'A Festa', href: '#party' },
  { label: 'Década de 80', href: '#context' },
  { label: 'Fantasias', href: '#costumes' },
  { label: 'Música', href: '#playlist' },
  { label: 'Presentes', href: '#wishlist' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Pre-load the easter egg sound: Michael Jackson - Thriller snippet
    audioRef.current = new Audio('https://www.myinstants.com/media/sounds/michael-jackson-thriller-laugh.mp3');
    audioRef.current.volume = 0.6;

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        console.log("O áudio requer uma interação prévia do usuário em alguns navegadores.");
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-disco-beige/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Logo with Thriller Easter Egg */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <div className="relative">
               <Disc className="w-6 h-6 md:w-8 md:h-8 text-disco-yellow animate-spin-slow group-hover:text-disco-teal transition-colors" />
               <div className="absolute inset-0 bg-disco-yellow opacity-40 blur-lg rounded-full animate-pulse group-hover:bg-disco-teal"></div>
            </div>
            <span className="font-retro text-lg md:text-2xl tracking-widest whitespace-nowrap transition-colors">
              <span className="text-disco-yellow group-hover:text-white transition-colors">SOFIA</span>
              <span className="text-disco-teal group-hover:text-disco-yellow transition-colors">15</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="flex items-center gap-3 lg:gap-6 flex-nowrap">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-retro text-[10px] lg:text-sm text-disco-beige hover:text-disco-orange transition-colors duration-200 uppercase tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://wa.me/5541999756896"
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-3 lg:px-6 py-2 border-2 border-disco-teal text-disco-teal font-retro text-[10px] lg:text-xs rounded-full hover:bg-disco-teal hover:text-black transition-all font-bold whitespace-nowrap shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              >
                CONFIRMAR
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-disco-beige hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-disco-red/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-retro text-disco-beige hover:text-disco-red hover:bg-white/5 border-l-4 border-transparent hover:border-disco-red transition-all"
              >
                {item.label}
              </a>
            ))}
             <a
                href="https://wa.me/5541999756896"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-center mt-4 bg-disco-teal text-black font-bold border border-disco-teal rounded-full font-retro uppercase"
              >
                CONFIRMAR PRESENÇA
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;