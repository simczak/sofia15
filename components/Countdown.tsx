import React, { useState, useEffect } from 'react';

// Date: July 4, 2026 at 19:30
const PARTY_DATE = new Date('2026-07-04T19:30:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +PARTY_DATE - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, color }: { value: number; label: string, color: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className={`w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full border-4 ${color} bg-black shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
        <span className={`font-retro text-2xl md:text-4xl ${color.replace('border-', 'text-')}`}>
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="mt-2 font-retro text-xs md:text-sm text-disco-beige tracking-wider uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center flex-wrap mt-8 gap-4">
      <TimeUnit value={timeLeft.days} label="Dias" color="border-disco-red" />
      <TimeUnit value={timeLeft.hours} label="Horas" color="border-disco-orange" />
      <TimeUnit value={timeLeft.minutes} label="Min" color="border-disco-yellow" />
      <TimeUnit value={timeLeft.seconds} label="Seg" color="border-disco-teal" />
    </div>
  );
};

export default Countdown;