import React from 'react';
import Section from './ui/Section';
import { MapPin, Calendar, Clock, Ticket, Star, Sparkles, Shirt } from 'lucide-react';

const LogisticsSection: React.FC = () => {
  return (
    <Section id="party">
      <div className="max-w-4xl mx-auto">
        {/* Custom Section Header with Neon Effects */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 blur-3xl w-64 h-64 bg-disco-teal rounded-full"></div>
          
          <h2 className="font-disco text-6xl md:text-8xl text-disco-yellow uppercase tracking-[0.15em] mb-4 drop-shadow-[0_0_15px_rgba(255,229,0,0.8)]">
            A Festa
          </h2>
          <p className="font-cursive text-4xl md:text-6xl text-disco-red animate-pulse transform -rotate-2">
            Não perca!
          </p>
        </div>

        {/* Premium VIP Ticket Container */}
        <div className="group relative">
          {/* External Glow Background - Multicolored */}
          <div className="absolute -inset-1 bg-gradient-to-r from-disco-red via-disco-orange via-disco-yellow to-disco-teal rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0a0a0a] border-2 border-disco-beige/30 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            {/* LEFT SIDE: Date & Time (The "Stub") */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:w-1/3 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-disco-beige/30 relative">
              {/* Notches for ticket look */}
              <div className="hidden md:block absolute -top-4 -right-4 w-8 h-8 bg-disco-bg rounded-full border-2 border-disco-beige/30"></div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-8 h-8 bg-disco-bg rounded-full border-2 border-disco-beige/30"></div>
              
              <div className="absolute top-4 left-4">
                <Sparkles className="text-disco-orange w-4 h-4 animate-pulse" />
              </div>

              <div className="text-center flex flex-col items-center gap-1">
                {/* Reordered Date: Day, Month, Year, Weekday */}
                <div className="font-retro text-7xl text-disco-red leading-none mb-1 drop-shadow-[0_0_10px_#FF2A2A]">04</div>
                <div className="font-disco text-3xl text-disco-orange mb-1 uppercase tracking-widest">JUL</div>
                <div className="font-retro text-2xl text-disco-yellow tracking-[0.2em] mb-1">2026</div>
                <div className="font-cursive text-3xl text-disco-teal mt-2">Sábado</div>
              </div>

              <div className="mt-8 flex items-center gap-2 bg-disco-beige/5 px-4 py-2 rounded-full border border-disco-beige/20 shadow-[0_0_10px_rgba(245,230,202,0.1)]">
                <Clock className="w-4 h-4 text-disco-beige" />
                <span className="font-retro text-lg text-disco-beige">19:30H</span>
              </div>
            </div>

            {/* RIGHT SIDE: Details (The Main Part) */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-disco-teal/5 via-transparent to-transparent">
              
              {/* Retro Memphis Pattern Background with more colors */}
              <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                 <svg width="150" height="150" viewBox="0 0 100 100">
                    <circle cx="20" cy="20" r="2" fill="#FF2A2A" />
                    <circle cx="40" cy="20" r="2" fill="#00F0FF" />
                    <circle cx="60" cy="20" r="2" fill="#FFE500" />
                    <rect x="75" y="10" width="10" height="10" fill="none" stroke="#FF7F00" strokeWidth="1" transform="rotate(15)" />
                    <circle cx="85" cy="85" r="3" fill="#00F0FF" opacity="0.5" />
                    <circle cx="10" cy="50" r="2" fill="#FF7F00" />
                    <path d="M10 80 L30 60 L50 80 L70 60" fill="none" stroke="#00F0FF" strokeWidth="1" />
                 </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="font-retro text-disco-orange text-sm tracking-[0.5em] uppercase mb-3 drop-shadow-[0_0_5px_rgba(255,127,0,0.5)]">Localização</h3>
                  <h4 className="font-retro text-4xl md:text-5xl text-white tracking-wide mb-2 group-hover:text-disco-teal transition-colors duration-500">
                    Edifício Rio Volga
                  </h4>
                  <div className="flex gap-1 mt-4">
                    <div className="h-1.5 w-16 bg-disco-red rounded-full"></div>
                    <div className="h-1.5 w-12 bg-disco-orange rounded-full"></div>
                    <div className="h-1.5 w-8 bg-disco-yellow rounded-full"></div>
                    <div className="h-1.5 w-4 bg-disco-teal rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-disco-teal/20 p-3 rounded-xl mt-1 border border-disco-teal/30">
                      <MapPin className="text-disco-teal w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-sans text-xl text-white font-bold tracking-wide">Salão de Festas</p>
                      <p className="font-sans text-disco-beige/90 text-lg leading-relaxed">Travessa Dr. Flávio Luz, 153</p>
                    </div>
                  </div>

                  {/* Dress Code Mandatory Phrase - Font Legibility Update */}
                  <div className="flex items-center gap-5 bg-disco-red/10 border border-disco-red/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(255,42,42,0.15)] group-hover:bg-disco-red/20 transition-all duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-disco-red blur-lg opacity-20 animate-pulse"></div>
                      <Shirt className="text-disco-red w-8 h-8 relative z-10" />
                      <Sparkles className="absolute -top-3 -right-3 text-disco-yellow w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <p className="font-retro text-disco-red text-[10px] md:text-xs uppercase tracking-[0.3em] leading-none mb-2">
                        Traje obrigatório
                      </p>
                      <p className="font-retro text-2xl md:text-3xl text-white leading-none uppercase tracking-[0.05em] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                        FANTASIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-6 items-center">
                  <a 
                    href="https://maps.app.goo.gl/BDFiYnb9H1MTdJAW9" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/btn overflow-hidden px-10 py-4 bg-transparent border-2 border-disco-teal text-disco-teal rounded-xl font-retro font-bold uppercase tracking-widest transition-all hover:text-black shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
                  >
                    <div className="absolute inset-0 bg-disco-teal translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                       VER MAPA
                    </span>
                  </a>
                  
                  <div className="flex items-center gap-2 text-disco-yellow font-retro text-xs tracking-widest animate-pulse border-b border-disco-yellow/30 pb-1">
                    <Ticket className="w-4 h-4" />
                    CONVITE INDIVIDUAL VIP
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom decorative hint */}
        <p className="text-center mt-12 font-cursive text-3xl text-disco-beige/60">
           Prepare seu melhor look e venha brilhar nas pistas!
        </p>
      </div>
    </Section>
  );
};

export default LogisticsSection;