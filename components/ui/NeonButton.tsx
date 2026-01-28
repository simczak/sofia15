import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  href
}) => {
  const styles = "relative inline-flex items-center justify-center px-10 py-4 font-retro font-bold uppercase tracking-widest text-disco-bg bg-disco-beige rounded-full shadow-neon-beige hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_rgba(245,230,202,0.8)] transition-all duration-300 focus:outline-none";

  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`}>
         {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles} ${className}`}>
      {children}
    </button>
  );
};

export default NeonButton;