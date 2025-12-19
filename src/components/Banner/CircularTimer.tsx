"use client";

import { useEffect, useState } from "react";


const TimerCircle = ({ value, label }: { value: number; label: string }) => {
  // Helper to format numbers (e.g., 5 -> "05")
  const formatTime = (val: number) => val.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[62px] h-[62px] bg-white rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-base sm:text-xl leading-none">
            {formatTime(value)}
        </span>
      </div>
      <span className="text-white text-[11px] font-medium">{label}</span>
    </div>
  );
};

const CircularTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return { days: 5, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <TimerCircle value={timeLeft.hours} label="Hours" />
      <TimerCircle value={timeLeft.days} label="Days" />
      <TimerCircle value={timeLeft.minutes} label="Minutes" />
      <TimerCircle value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CircularTimer;