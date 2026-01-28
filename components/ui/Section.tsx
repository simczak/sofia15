import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="font-disco text-4xl md:text-6xl text-disco-red drop-shadow-[0_0_10px_rgba(255,42,42,0.8)] uppercase tracking-wider mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-cursive text-3xl md:text-5xl text-disco-teal transform -rotate-2">
                {subtitle}
              </p>
            )}
            <div className="flex justify-center gap-2 mt-6">
               <div className="h-2 w-20 bg-disco-red rounded-full"></div>
               <div className="h-2 w-20 bg-disco-orange rounded-full"></div>
               <div className="h-2 w-20 bg-disco-yellow rounded-full"></div>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;