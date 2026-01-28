import React, { useState, useRef, useEffect } from 'react';
import Section from './ui/Section';
import { Radio, Disc, Play, Pause, Rewind, FastForward, ChevronUp, Volume2, ListMusic } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
}

const MusicSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Playlist Completa baseada na curadoria dos Anos 80 (80+ músicas para garantir volume)
  const fullPlaylist: Track[] = [
    { id: 1, title: "TAKE ON ME", artist: "A-HA", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, title: "GIRLS JUST WANT TO HAVE FUN", artist: "CYNDI LAUPER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 3, title: "SWEET DREAMS", artist: "EURYTHMICS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, title: "BEAT IT", artist: "MICHAEL JACKSON", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 5, title: "EVERY BREATH YOU TAKE", artist: "THE POLICE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 6, title: "MANIAC", artist: "MICHAEL SEMBELLO", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { id: 7, title: "EYE OF THE TIGER", artist: "SURVIVOR", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 8, title: "WAKE ME UP BEFORE YOU GO-GO", artist: "WHAM!", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 9, title: "LIKE A VIRGIN", artist: "MADONNA", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 10, title: "MATERIAL GIRL", artist: "MADONNA", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 11, title: "FOOTLOOSE", artist: "KENNY LOGGINS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 12, title: "I WANNA DANCE WITH SOMEBODY", artist: "WHITNEY HOUSTON", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 13, title: "DON'T STOP BELIEVIN'", artist: "JOURNEY", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 14, title: "AFRICA", artist: "TOTO", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 15, title: "BETTE DAVIS EYES", artist: "KIM CARNES", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 16, title: "TOTAL ECLIPSE OF THE HEART", artist: "BONNIE TYLER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 17, title: "BILLIE JEAN", artist: "MICHAEL JACKSON", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 18, title: "LIVIN' ON A PRAYER", artist: "BON JOVI", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 19, title: "PURPLE RAIN", artist: "PRINCE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 20, title: "NEVER GONNA GIVE YOU UP", artist: "RICK ASTLEY", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 21, title: "EVERYBODY WANTS TO RULE THE WORLD", artist: "TEARS FOR FEARS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 22, title: "KIDS IN AMERICA", artist: "KIM WILDE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 23, title: "TAINTED LOVE", artist: "SOFT CELL", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 24, title: "FLASHDANCE... WHAT A FEELING", artist: "IRENE CARA", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 25, title: "JUMP", artist: "VAN HALEN", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 26, title: "RADIO GA GA", artist: "QUEEN", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 27, title: "LET'S DANCE", artist: "DAVID BOWIE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 28, title: "SUMMER OF '69", artist: "BRYAN ADAMS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 29, title: "DON'T YOU (FORGET ABOUT ME)", artist: "SIMPLE MINDS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 30, title: "YOUR LOVE", artist: "THE OUTFIELD", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 31, title: "WE BUILT THIS CITY", artist: "STARSHIP", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 32, title: "DANGER ZONE", artist: "KENNY LOGGINS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { id: 33, title: "SHOUT", artist: "TEARS FOR FEARS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 34, title: "BLUE MONDAY", artist: "NEW ORDER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 35, title: "WEST END GIRLS", artist: "PET SHOP BOYS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 36, title: "JUST CAN'T GET ENOUGH", artist: "DEPECHE MODE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 37, title: "TRUE", artist: "SPANDAU BALLET", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 38, title: "ALL NIGHT LONG", artist: "LIONEL RICHIE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 39, title: "WHAT'S LOVE GOT TO DO WITH IT", artist: "TINA TURNER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 40, title: "CELEBRATION", artist: "KOOL & THE GANG", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 41, title: "DON'T YOU WANT ME", artist: "THE HUMAN LEAGUE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 42, title: "THE LOOK OF LOVE", artist: "ABC", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 43, title: "GOLD", artist: "SPANDAU BALLET", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 44, title: "BOYS DON'T CRY", artist: "THE CURE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 45, title: "THIS CHARMING MAN", artist: "THE SMITHS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 46, title: "SWEET CHILD O' MINE", artist: "GUNS N' ROSES", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 47, title: "YOU SHOOK ME ALL NIGHT LONG", artist: "AC/DC", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 48, title: "REBEL YELL", artist: "BILLY IDOL", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { id: 49, title: "ALONE", artist: "HEART", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 50, title: "THE LOOK", artist: "ROXETTE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 51, title: "THE FINAL COUNTDOWN", artist: "EUROPE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 52, title: "STILL LOVING YOU", artist: "SCORPIONS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 53, title: "I WANT TO KNOW WHAT LOVE IS", artist: "FOREIGNER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 54, title: "BROKEN WINGS", artist: "MR. MISTER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 55, title: "FOREVER YOUNG", artist: "ALPHAVILLE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 56, title: "CARELESS WHISPER", artist: "GEORGE MICHAEL", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 57, title: "KARMA CHAMELEON", artist: "CULTURE CLUB", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 58, title: "MANEATER", artist: "HALL & OATES", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 59, title: "HUNGRY LIKE THE WOLF", artist: "DURAN DURAN", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 60, title: "DOWN UNDER", artist: "MEN AT WORK", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 61, title: "WALK LIKE AN EGYPTIAN", artist: "THE BANGLES", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 62, title: "HEAVEN IS A PLACE ON EARTH", artist: "BELINDA CARLISLE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 63, title: "HOLDING OUT FOR A HERO", artist: "BONNIE TYLER", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 64, title: "DIED IN YOUR ARMS", artist: "CUTTING CREW", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { id: 65, title: "THRILLER", artist: "MICHAEL JACKSON", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 66, title: "YOU GIVE LOVE A BAD NAME", artist: "BON JOVI", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 67, title: "SEPARATE WAYS", artist: "JOURNEY", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 68, title: "BURNING HEART", artist: "SURVIVOR", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 69, title: "HIT ME WITH YOUR BEST SHOT", artist: "PAT BENATAR", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 70, title: "WALK THIS WAY", artist: "AEROSMITH", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 71, title: "FIGHT FOR YOUR RIGHT", artist: "BEASTIE BOYS", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 72, title: "IT'S TRICKY", artist: "RUN-D.M.C.", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 73, title: "A LITTLE RESPECT", artist: "ERASURE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 74, title: "DON'T GO", artist: "YAZOO", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 75, title: "SMALLTOWN BOY", artist: "BRONSKI BEAT", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 76, title: "SAY SAY SAY", artist: "PAUL MCCARTNEY", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 77, title: "DANCING IN THE DARK", artist: "BRUCE SPRINGSTEEN", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 78, title: "OWNER OF A LONELY HEART", artist: "YES", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 79, title: "RELAX", artist: "FRANKIE GOES TO HOLLYWOOD", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 80, title: "YOU KEEP ME HANGIN' ON", artist: "KIM WILDE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" }
  ];

  useEffect(() => {
    // Simulando um fetch para garantir que todos os dados sejam carregados
    // Em um cenário real com Spotify API, aqui trataríamos a paginação (limit e offset)
    const loadPlaylist = async () => {
      setIsLoading(true);
      // Pequeno delay para simular rede e feedback visual do "Digital Loader"
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };
    loadPlaylist();
  }, []);

  useEffect(() => {
    if (audioRef.current && !isLoading) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("O áudio requer interação inicial"));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex, isLoading]);

  const togglePlay = () => setIsPlaying(true);
  const togglePause = () => setIsPlaying(false);
  
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % fullPlaylist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + fullPlaylist.length) % fullPlaylist.length);
    setIsPlaying(true);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const stopMusic = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const currentTrack = fullPlaylist[currentTrackIndex];

  return (
    <Section id="playlist" title="Sons da Festa" subtitle="Já entra no clima...">
      <div className="max-w-4xl mx-auto">
        <audio 
          ref={audioRef} 
          src={currentTrack.url} 
          onEnded={nextTrack}
        />

        <div className="text-center mb-10">
          <p className="font-sans text-disco-beige/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exploda os alto-falantes! Conectamos a playlist oficial com mais de 80 hits épicos da década de ouro.
          </p>
        </div>

        {/* Retro Stereo Deck Container */}
        <div className="relative group/stereo">
          <div className="absolute -inset-4 bg-disco-teal/5 blur-3xl rounded-[3rem] opacity-50"></div>

          <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-4 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t-2 border-l-2 border-white/10 border-b-8 border-r-8 border-black overflow-hidden">
            
            {/* Top Detail: Branding & Vents */}
            <div className="flex justify-between items-center mb-8 px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-800 shadow-inner border border-black/50"></div>
                <div className="w-3 h-3 rounded-full bg-gray-800 shadow-inner border border-black/50"></div>
              </div>
              <div className="flex gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-6 h-1 bg-black/60 rounded-full"></div>
                ))}
              </div>
              <div className="flex gap-2 font-retro text-[10px] text-gray-600 tracking-tighter uppercase">
                 <span>Component • HIFI • Sofia's Choice</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              
              {/* Left Side: Disc & VU */}
              <div className="hidden lg:flex lg:col-span-3 flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-900 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden">
                   <Disc className={`w-20 h-20 text-gray-800 ${isPlaying ? 'animate-spin-slow text-disco-teal' : ''} transition-colors duration-500`} />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                </div>
                <div className="flex gap-1.5 h-16 items-end bg-black/40 p-2 rounded-lg border border-white/5 shadow-inner">
                   {[...Array(10)].map((_, i) => (
                     <div 
                       key={i} 
                       className={`w-1.5 bg-gradient-to-t from-disco-teal via-disco-yellow to-disco-red rounded-t-sm transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                       style={{ 
                         height: isPlaying ? `${20 + Math.random() * 80}%` : '10%', 
                         animationDelay: `${i * 0.15}s`
                       }}
                     ></div>
                   ))}
                </div>
              </div>

              {/* Center: Main LCD Screen */}
              <div className="lg:col-span-6">
                <div className="bg-black rounded-2xl border-4 border-gray-800 p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center min-h-[280px]">
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_3px,3px_100%] opacity-40"></div>
                  
                  <div className="relative z-0 text-center space-y-4 w-full">
                    {isLoading ? (
                      <div className="flex flex-col items-center gap-4">
                         <div className="w-12 h-12 border-4 border-disco-teal border-t-transparent rounded-full animate-spin"></div>
                         <span className="font-retro text-disco-teal text-xs tracking-widest uppercase">Fetching Tracklist...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-center gap-2 mb-2">
                           <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-disco-teal animate-pulse' : 'text-gray-700'}`} />
                           <span className="font-retro text-[10px] text-gray-500 tracking-[0.3em] uppercase">Digital Audio Source • Track {(currentTrackIndex + 1).toString().padStart(2, '0')}</span>
                        </div>
                        
                        <div className="bg-[#0f120f] border-2 border-gray-900 p-6 rounded-lg shadow-inner min-h-[120px] flex flex-col justify-center">
                          <h4 className="font-retro text-2xl md:text-3xl text-disco-teal tracking-wider uppercase mb-1 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] truncate">
                            {currentTrack.title}
                          </h4>
                          <p className="font-retro text-sm text-disco-yellow/60 uppercase tracking-widest truncate">
                            {currentTrack.artist}
                          </p>
                        </div>

                        <div className="flex justify-center gap-4 pt-4 text-[9px] font-retro">
                           <div className={`px-3 py-1 border border-white/10 rounded ${isPlaying ? 'text-disco-red border-disco-red/50 shadow-[0_0_8px_rgba(255,42,42,0.3)]' : 'text-gray-700'}`}>PLAYING</div>
                           <div className={`px-3 py-1 border border-white/10 rounded ${!isPlaying && audioRef.current?.currentTime !== 0 ? 'text-disco-orange border-disco-orange/50' : 'text-gray-700'}`}>PAUSED</div>
                           <div className="px-3 py-1 border border-white/10 rounded text-disco-teal">STEREO</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side: Radio & Brand */}
              <div className="hidden lg:flex lg:col-span-3 flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-900 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden">
                   <Radio className={`w-16 h-16 text-gray-800 ${isPlaying ? 'text-disco-red' : ''} transition-colors duration-500`} />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                </div>
                <div className="text-center p-4 bg-black/20 rounded-xl border border-white/5 w-full">
                  <span className="font-retro text-disco-red text-[10px] tracking-[0.4em] uppercase opacity-70 block mb-1">SOFIA 15 SERIES</span>
                  <span className="font-retro text-white text-xl tracking-widest uppercase block border-t border-white/10 pt-1 mt-1">MASTER DECK</span>
                </div>
              </div>
            </div>

            {/* YELLOW CUSTOM CONTROLS */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 py-6 border-t border-white/5 bg-black/20 rounded-xl mb-8 shadow-inner">
               
               {/* 1. PAUSE */}
               <div className="flex flex-col items-center gap-3">
                  <button 
                    onClick={togglePause}
                    className={`w-14 h-12 md:w-20 md:h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-[0_4px_0_#000,0_8px_15px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer flex flex-col items-center justify-center border-t border-white/10 hover:shadow-[0_0_15px_#FF7F00] group`}
                  >
                     <div className={`w-1.5 h-1.5 rounded-full mb-1 ${!isPlaying && audioRef.current?.currentTime !== 0 ? 'bg-disco-orange shadow-[0_0_8px_#FF7F00]' : 'bg-gray-600'}`}></div>
                     <Pause className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-disco-orange transition-colors" />
                  </button>
                  <span className="font-retro text-[9px] md:text-[11px] text-gray-500 tracking-wider uppercase">PAUSE</span>
               </div>

               {/* 2. PLAY */}
               <div className="flex flex-col items-center gap-3">
                  <button 
                    onClick={togglePlay}
                    className={`w-14 h-12 md:w-20 md:h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-[0_4px_0_#000,0_8px_15px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer flex flex-col items-center justify-center border-t border-white/10 hover:shadow-[0_0_15px_#FF2A2A] group`}
                  >
                     <div className={`w-1.5 h-1.5 rounded-full mb-1 ${isPlaying ? 'bg-disco-red shadow-[0_0_8px_#FF2A2A] animate-pulse' : 'bg-gray-600'}`}></div>
                     <Play className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-disco-red transition-colors" />
                  </button>
                  <span className="font-retro text-[9px] md:text-[11px] text-gray-500 tracking-wider uppercase">PLAY</span>
               </div>

               {/* 3. PREV */}
               <div className="flex flex-col items-center gap-3">
                  <button 
                    onClick={prevTrack}
                    className={`w-14 h-12 md:w-20 md:h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-[0_4px_0_#000,0_8px_15px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer flex flex-col items-center justify-center border-t border-white/10 hover:shadow-[0_0_15px_#00F0FF] group`}
                  >
                     <div className="w-1.5 h-1.5 rounded-full mb-1 bg-gray-600 group-hover:bg-disco-teal"></div>
                     <Rewind className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-disco-teal transition-colors" />
                  </button>
                  <span className="font-retro text-[9px] md:text-[11px] text-gray-500 tracking-wider uppercase">PREV</span>
               </div>

               {/* 4. NEXT */}
               <div className="flex flex-col items-center gap-3">
                  <button 
                    onClick={nextTrack}
                    className={`w-14 h-12 md:w-20 md:h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-[0_4px_0_#000,0_8px_15px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer flex flex-col items-center justify-center border-t border-white/10 hover:shadow-[0_0_15px_#FFE500] group`}
                  >
                     <div className="w-1.5 h-1.5 rounded-full mb-1 bg-gray-600 group-hover:bg-disco-yellow"></div>
                     <FastForward className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-disco-yellow transition-colors" />
                  </button>
                  <span className="font-retro text-[9px] md:text-[11px] text-gray-500 tracking-wider uppercase">NEXT</span>
               </div>

               {/* 5. STOP */}
               <div className="flex flex-col items-center gap-3">
                  <button 
                    onClick={stopMusic}
                    className={`w-14 h-12 md:w-20 md:h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md shadow-[0_4px_0_#000,0_8px_15px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer flex flex-col items-center justify-center border-t border-white/10 hover:shadow-[0_0_15px_#FFFFFF] group`}
                  >
                     <div className="w-1.5 h-1.5 rounded-full mb-1 bg-gray-600 group-hover:bg-white"></div>
                     <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-white transition-colors" />
                  </button>
                  <span className="font-retro text-[9px] md:text-[11px] text-gray-500 tracking-wider uppercase">STOP</span>
               </div>
            </div>

            {/* INTERACTIVE TRACKLIST PANEL (FULL LIST 80+ SONGS) */}
            <div className="bg-[#0a0a0a] rounded-xl border-2 border-white/5 p-4 md:p-6 shadow-inner relative overflow-hidden">
               <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                  <div className="flex items-center gap-3">
                    <ListMusic className="w-5 h-5 text-disco-teal" />
                    <h5 className="font-retro text-xs md:text-sm text-disco-beige/60 uppercase tracking-[0.3em]">Sofia official Party Playlist</h5>
                  </div>
                  <span className="font-retro text-[9px] text-disco-teal/60 uppercase">{fullPlaylist.length} HITS LOADED</span>
               </div>
               
               {/* Container with fixed height and auto scroll for 100+ items */}
               <div className="max-h-[400px] overflow-y-auto pr-2 custom-playlist-scrollbar">
                  <ul className="space-y-1">
                    {fullPlaylist.map((track, index) => {
                      const isActive = currentTrackIndex === index;
                      return (
                        <li key={`${track.id}-${index}`}>
                          <button
                            onClick={() => selectTrack(index)}
                            className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group ${
                              isActive 
                                ? 'bg-disco-teal/15 border border-disco-teal/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                                : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex-shrink-0 w-8 font-retro text-xs text-gray-600 text-center">
                              {isActive && isPlaying ? (
                                <div className="flex justify-center items-end gap-0.5 h-4">
                                   <div className="w-1 bg-disco-teal animate-pulse h-full"></div>
                                   <div className="w-1 bg-disco-teal animate-pulse h-[60%]" style={{animationDelay: '0.2s'}}></div>
                                   <div className="w-1 bg-disco-teal animate-pulse h-[80%]" style={{animationDelay: '0.4s'}}></div>
                                </div>
                              ) : (
                                <span>{String(index + 1).padStart(2, '0')}</span>
                              )}
                            </div>

                            <div className="flex-1 text-left">
                               <h6 className={`font-retro text-xs md:text-sm uppercase tracking-widest transition-colors ${
                                 isActive ? 'text-disco-teal drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]' : 'text-disco-beige group-hover:text-disco-yellow'
                               }`}>
                                 {track.title}
                               </h6>
                               <p className="font-sans text-[10px] text-gray-500 uppercase tracking-tighter">
                                 {track.artist}
                               </p>
                            </div>

                            <div className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''}`}>
                               {isActive && isPlaying ? (
                                 <Pause className="w-4 h-4 text-disco-teal" />
                               ) : (
                                 <Play className={`w-4 h-4 ${isActive ? 'text-disco-teal' : 'text-disco-yellow'}`} />
                               )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
               </div>

               {/* Decorative Footer info */}
               <div className="mt-4 flex justify-between items-center px-2">
                  <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-disco-red opacity-40"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-disco-orange opacity-40"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-disco-yellow opacity-40"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-disco-teal opacity-40"></div>
                  </div>
                  <span className="font-retro text-[8px] text-gray-700 uppercase tracking-widest">Master Digital Recording • High Fidelity • Total Data Sync</span>
               </div>
            </div>

          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-cursive text-4xl text-disco-yellow drop-shadow-[0_0_8px_rgba(255,229,0,0.4)] animate-pulse">
            Ligue o som e prepare o passinho!
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-playlist-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-playlist-scrollbar::-webkit-scrollbar-track {
          background: #000;
          border-radius: 10px;
          margin: 4px;
        }
        .custom-playlist-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
          border: 2px solid #000;
        }
        .custom-playlist-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00F0FF;
          box-shadow: 0 0 15px #00F0FF;
        }
      `}} />
    </Section>
  );
};

export default MusicSection;