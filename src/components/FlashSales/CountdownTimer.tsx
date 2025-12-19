"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  // Set target date to 3 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="flex items-end gap-1 sm:gap-4 ml-0 sm:ml-10 md:ml-20">
      {/* Days */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-[10px] sm:text-xs font-medium">Days</span>
        <span className="text-2xl sm:text-3xl font-bold leading-none">{formatTime(timeLeft.days)}</span>
      </div>
      <span className="text-red-500 text-2xl font-bold mb-1">:</span>
      
      {/* Hours */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-[10px] sm:text-xs font-medium">Hours</span>
        <span className="text-2xl sm:text-3xl font-bold leading-none">{formatTime(timeLeft.hours)}</span>
      </div>
      <span className="text-red-500 text-2xl font-bold mb-1">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-[10px] sm:text-xs font-medium">Minutes</span>
        <span className="text-2xl sm:text-3xl font-bold leading-none">{formatTime(timeLeft.minutes)}</span>
      </div>
      <span className="text-red-500 text-2xl font-bold mb-1">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-[10px] sm:text-xs font-medium">Seconds</span>
        <span className="text-2xl sm:text-3xl font-bold leading-none">{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;