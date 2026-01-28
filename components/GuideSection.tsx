import React from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { Camera, Sparkles } from 'lucide-react';

interface CostumeProps {
  image: string;
  label: string;
  tag: string;
  color: string;
}

const CostumeCard: React.FC<CostumeProps> = ({ image, label, tag, color }) => (
  <div className={`group relative rounded-xl overflow-hidden border-2 ${color} bg-black transition-all duration-500 hover:scale-105 hover:z-10 shadow-lg`}>
    {/* Image Container */}
    <div className="aspect-[3/4] relative overflow-hidden">
      <img 
        src={image} 
        alt={`${label} - ${tag}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
      />
      
      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${color.replace('border-', 'bg-')} mix-blend-overlay`}></div>
      
      {/* Subtle Gradient to make the card feel deep */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
    </div>

    {/* Decorative Corner Icon remains for interaction hint */}
    <div className={`absolute top-2 right-2 p-1 rounded-full bg-black/50 backdrop-blur-sm border ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
      <Camera className={`w-4 h-4 ${color.replace('border-', 'text-')}`} />
    </div>
  </div>
);

const GuideSection: React.FC = () => {
  const girlsCostumes: CostumeProps[] = [
    { 
      label: "Pop Rebelde", 
      tag: "Meia Arrastão & Neon", 
      color: "border-disco-red",
      image: "https://www.stylevore.com/hub/images/fe9cf0204ace75163b84e1ea4eb77c0e_1669191836.jpg"
    },
    { 
      label: "Musa Fitness", 
      tag: "Polainas & Aeróbica", 
      color: "border-disco-teal",
      image: "https://i.pinimg.com/originals/32/ee/f7/32eef7765bd4676b7aa4b1144d752905.webp"
    },
    { 
      label: "Madonna Style", 
      tag: "Rendas & Laços", 
      color: "border-disco-yellow",
      image: "https://i.pinimg.com/474x/54/7a/97/547a979176418dababc3e8a00139978a.jpg"
    },
    { 
      label: "Mix Colors", 
      tag: "Animal Print & Cores", 
      color: "border-disco-orange",
      image: "https://i.pinimg.com/736x/23/62/52/236252e07ec571c09373575ae0a61b59.jpg"
    },
  ];

  const boysCostumes: CostumeProps[] = [
    { 
      label: "Retro Sport", 
      tag: "Agasalho de Nylon", 
      color: "border-disco-teal",
      image: "https://i.pinimg.com/originals/2e/0e/5d/2e0e5d611cf5aceec2f568418f532a05.png"
    },
    { 
      label: "Denim King", 
      tag: "Jeans sobre Jeans", 
      color: "border-disco-teal",
      image: "https://i.pinimg.com/474x/40/b0/2d/40b02d8c0ca32dc863084e4eb18b4b57.jpg"
    },
    { 
      label: "Workout Hero", 
      tag: "Neon & Fitness", 
      color: "border-disco-teal",
      image: "https://m.media-amazon.com/images/S/aplus-media/sc/bc5d787b-8294-4e75-a7da-c636b6577785.__CR0,0,1772,1772_PT0_SX300_V1___.jpg"
    },
    { 
      label: "Miami Vice", 
      tag: "Estilo & Atitude", 
      color: "border-disco-teal",
      image: "https://i.pinimg.com/originals/7b/79/90/7b7990bb94cb940b3976dd4f256e0f42.jpg"
    },
  ];

  return (
    <Section id="costumes" title="Sugestões de Fantasia" subtitle="Inspire-se">
      
      {/* Girls Grid */}
      <div className="mb-20">
        <h3 className="font-retro text-2xl md:text-3xl text-disco-red mb-8 flex items-center gap-4">
          <Sparkles className="w-6 h-6 animate-pulse" /> 
          <span className="tracking-widest">GIRLS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-disco-red to-transparent"></div>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {girlsCostumes.map((costume, idx) => (
            <CostumeCard key={idx} {...costume} />
          ))}
        </div>
      </div>

      {/* Boys Grid */}
      <div className="mb-12">
        <h3 className="font-retro text-2xl md:text-3xl text-disco-teal mb-8 flex items-center gap-4 justify-end">
          <div className="h-px flex-1 bg-gradient-to-l from-disco-teal to-transparent"></div>
          <span className="tracking-widest">BOYS</span>
          <Sparkles className="w-6 h-6 animate-pulse" />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {boysCostumes.map((costume, idx) => (
            <CostumeCard key={idx} {...costume} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
         <NeonButton href="https://pin.it/3PhsbEKm4" className="text-sm px-8 py-4">
           Referências no Pinterest
         </NeonButton>
      </div>

    </Section>
  );
};

export default GuideSection;