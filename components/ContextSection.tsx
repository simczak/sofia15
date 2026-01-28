import React, { useState } from 'react';
import Section from './ui/Section';
import { Sparkles, Zap, Tv, Headphones, Info, Joystick, Disc } from 'lucide-react';

interface SlangBadgeProps {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
  glowColor: string;
}

const SlangBadge: React.FC<SlangBadgeProps> = ({ icon: Icon, label, description, color, glowColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center gap-2 cursor-help group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${color} flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110`}>
        <Icon className={`w-6 h-6 ${isHovered ? 'animate-bounce' : 'animate-pulse'}`} />
        <span className="font-retro uppercase tracking-widest text-sm md:text-base">
          {label}
        </span>
      </div>

      {/* Tooltip Overlay */}
      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 md:w-56 p-3 bg-black/95 border-2 ${glowColor} rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 transition-all duration-300 pointer-events-none ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <p className="font-retro text-[10px] text-white/50 uppercase tracking-tighter mb-1">Dicionário 80's</p>
        <p className="font-sans text-xs text-disco-beige leading-snug">
          {description}
        </p>
        {/* Tooltip Arrow */}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 ${glowColor} rotate-45 -mt-[7px]`}></div>
      </div>
    </div>
  );
};

const ContextSection: React.FC = () => {
  return (
    <Section id="context" title="A Década de Ouro" subtitle="Era Disco">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <p className="font-sans text-lg md:text-xl text-disco-beige leading-relaxed">
            Estamos voltando para um tempo onde a música era feita com <span className="text-disco-teal border-b border-disco-teal/30 cursor-help hover:text-white transition-colors" title="Sintetizadores: Teclados eletrônicos que definiram o som da época.">sintetizadores</span>, as cores eram neon e "menos é mais" não existia. Os anos 80 foram a era de ouro do Pop, do Rock Nacional, do <span className="text-disco-yellow border-b border-disco-yellow/30 cursor-help hover:text-white transition-colors" title="Pac-Man: O 'Come-Come', fenômeno absoluto dos fliperamas.">Pac-Man</span> e dos filmes que a gente ama até hoje.
          </p>
          <p className="font-sans text-lg md:text-xl text-disco-beige leading-relaxed">
            Então, preparem-se para viajar no tempo, aumentar o volume e curtir uma noite totalmente analógica e inesquecível.
          </p>
          
          <div className="flex gap-x-8 gap-y-6 pt-6 flex-wrap">
            <SlangBadge 
              icon={Tv} 
              label="MTV" 
              color="text-disco-red" 
              glowColor="border-disco-red"
              description="O canal que revolucionou a música ao lançar os videoclipes 24h por dia."
            />
            <SlangBadge 
              icon={Headphones} 
              label="Walkman" 
              color="text-disco-teal" 
              glowColor="border-disco-teal"
              description="A liberdade de ouvir suas fitas K7 em qualquer lugar com o player portátil da Sony."
            />
            <SlangBadge 
              icon={Zap} 
              label="Neon" 
              color="text-disco-yellow" 
              glowColor="border-disco-yellow"
              description="Cores vibrantes e fluorescentes que dominavam a moda e as fachadas das cidades."
            />
             <SlangBadge 
              icon={Joystick} 
              label="Arcade" 
              color="text-disco-orange" 
              glowColor="border-disco-orange"
              description="As famosas casas de fliperama onde o 'Game Over' custava apenas uma ficha."
            />
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
           {/* Disco Ball Container */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Decorative Pulsing Rings */}
              <div className="absolute inset-0 border-4 border-disco-teal rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-8 border-4 border-disco-red rounded-full animate-ping opacity-10 animation-delay-500"></div>
              
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)]">
                 <img 
                   src="https://tse1.mm.bing.net/th/id/OIP.IEU_swi1FSg0au_92RjGlgHaHW?rs=1&pid=ImgDetMain&o=7&rm=3" 
                   alt="Globo Disco" 
                   className="w-full h-full object-cover animate-spin-slow"
                 />
                 
                 {/* Subtle Light Reflection Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>

              {/* Sparkle effects around the ball */}
              <Sparkles className="absolute top-0 right-0 text-white animate-pulse w-8 h-8" />
              <Sparkles className="absolute bottom-10 left-0 text-disco-yellow animate-pulse w-6 h-6 animation-delay-700" />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default ContextSection;