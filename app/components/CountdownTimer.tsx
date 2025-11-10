'use client';

import { useState, useEffect } from "react";

export const CountdownTimer = () => {
   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

   useEffect(() => {
      const calculateTimeLeft = () => {
         const now = new Date();
         const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

         const difference = today.getTime() - now.getTime();

         if (difference > 0) {
            return {
               days: Math.floor(difference / (1000 * 60 * 60 * 24)),
               hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
               minutes: Math.floor((difference / 1000 / 60) % 60),
               seconds: Math.floor((difference / 1000) % 60)
            };
         }

         return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      };

      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   return (
      <div className="flex flex-col items-center justify-center">
         <h3 className="text-sm sm:text-base text-blue-300 mb-3 font-semibold">Pendaftaran Ditutup Dalam:</h3>
         <div className="flex space-x-2 sm:space-x-4">
            <div className="flex flex-col items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</span>
               <span className="text-xs sm:text-sm text-blue-300">Hari</span>
            </div>
            <div className="flex flex-col items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</span>
               <span className="text-xs sm:text-sm text-blue-300">Jam</span>
            </div>
            <div className="flex flex-col items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</span>
               <span className="text-xs sm:text-sm text-blue-300">Menit</span>
            </div>
            <div className="flex flex-col items-center bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</span>
               <span className="text-xs sm:text-sm text-blue-300">Detik</span>
            </div>
         </div>
      </div>
   );
};

export const useRegistrationStatus = () => {
   const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);

   useEffect(() => {
      const checkRegistrationStatus = () => {
         const now = new Date();
         const november11 = new Date(now.getFullYear(), 10, 11, 0, 0, 0); // Month is 0-indexed (10 = November)

         if (now >= november11) {
            setIsRegistrationClosed(true);
         }
      };

      checkRegistrationStatus();
   }, []);

   return isRegistrationClosed;
};
