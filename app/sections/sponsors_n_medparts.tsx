'use client';

import { useState, useRef, useEffect } from 'react';
import { GOOGLE_DRIVE_BASE_URL, links } from '../util/links';
import { LinkButton } from '../components/button';

export default function SponsorsNMedparts() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkIsMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };

      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);

      return () => window.removeEventListener('resize', checkIsMobile);
   }, []);
   const sponsors: any[] = [
   ];

   const mediaPartners = [
      { id: 1, name: "HME Polban", link: "https://instagram.com/hmepolban", src: `${GOOGLE_DRIVE_BASE_URL}1AA9t66DGTkuByXLvXw-7rDKfWlIHXtob` },
      { id: 2, name: "Himakom Polban", link: "https://instagram.com/himakompolban", src: `${GOOGLE_DRIVE_BASE_URL}12_0J_Xd8x26TiF3FnEXGmCbO5y0Euyf3` },
      { id: 3, name: "Eltras Radio Polban", link: "https://instagram.com/eltrasradio1079", src: `${GOOGLE_DRIVE_BASE_URL}1RoybpoHvq7AuFOxllOpb4fUVLVJjvnYb` },
      { id: 4, name: "Polban Electric Vehichle", link: "https://instagram.com/polban.ev", src: `${GOOGLE_DRIVE_BASE_URL}1t-x5N8Z4IQ63yjyDgAIgK9C6wT10-j4V` },
      { id: 5, name: "Polban News", link: "https://instagram.com/polban_news", src: `${GOOGLE_DRIVE_BASE_URL}19MqIGB_kdgehuuME2wFdKVlDQz_U1xc4` },
   ];

   const LogoPlaceholder = ({ name }: { name: string }) => (
      <div className="w-64 h-32 flex-shrink-0 bg-gray-300/20 backdrop-blur-sm border border-blue-700/30 rounded-xl flex items-center justify-center group transition-all duration-300 mx-3 select-none">
         <div className="text-center pointer-events-none">
            <svg
               className="w-12 h-12 text-blue-400/60 mx-auto mb-2 transition-colors duration-300"
               fill="currentColor"
               viewBox="0 0 20 20"
            >
               <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-blue-300/60 text-sm font-medium transition-colors duration-300">
               {name}
            </p>
         </div>
      </div>
   );

   const PersistentMarquee = ({ items, speed = 40, isMediaPartner = false }: { items: any[], speed?: number, isMediaPartner?: boolean }) => {
      const [isDragging, setIsDragging] = useState(false);
      const [currentPosition, setCurrentPosition] = useState(0);
      const [dragStartX, setDragStartX] = useState(0);
      const [dragStartPosition, setDragStartPosition] = useState(0);
      const containerRef = useRef<HTMLDivElement>(null);
      const animationRef = useRef<number | null>(null);
      const startTimeRef = useRef<number | null>(null);

      // Animation loop for continuous movement
      useEffect(() => {
         if (isDragging) return;

         const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
               startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const moveDistance = (elapsed / (speed * 1000)) * window.innerWidth;

            setCurrentPosition(prev => {
               const containerWidth = (items.length * 280); // 264px width + 16px margin
               return (prev - moveDistance) % -containerWidth;
            });

            startTimeRef.current = timestamp;
            animationRef.current = requestAnimationFrame(animate);
         };

         animationRef.current = requestAnimationFrame(animate);

         return () => {
            if (animationRef.current) {
               cancelAnimationFrame(animationRef.current);
            }
         };
      }, [isDragging, speed, items.length]);

      const handleMouseDown = (e: React.MouseEvent) => {
         e.preventDefault();
         setIsDragging(true);
         setDragStartX(e.clientX);
         setDragStartPosition(currentPosition);
         startTimeRef.current = null;
      };


      const handleMouseUp = () => {
         setIsDragging(false);
      };

      const handleMouseLeave = () => {
         setIsDragging(false);
      };

      useEffect(() => {
         const handleGlobalMouseUp = () => setIsDragging(false);
         const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const deltaX = e.clientX - dragStartX;
            const newPosition = dragStartPosition + deltaX;
            setCurrentPosition(newPosition);
         };

         if (isDragging) {
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('mousemove', handleGlobalMouseMove);
         }

         return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
         };
      }, [isDragging, dragStartX, dragStartPosition]);

      return (
         <div
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
         >
            <div
               className="flex transition-none"
               style={{
                  transform: `translateX(${currentPosition}px)`,
               }}
            >
               {/* Render multiple sets for seamless infinite scroll */}
               {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex">
                     {items.map((item) => (
                        <div key={`${setIndex}-${item.id}`} className="block">
                           {isMediaPartner && item.src ? (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                 <div className="w-64 h-32 flex-shrink-0 bg-gray-300/20 backdrop-blur-sm border border-blue-700/30 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 mx-3 overflow-hidden">
                                    <img
                                       src={item.src}
                                       alt={item.name}
                                       className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                    />
                                 </div>
                              </a>
                           ) : (
                              <LogoPlaceholder name={item.name} />
                           )}
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      );
   };

   const StaticGrid = ({ items, isMediaPartner = false }: { items: any[], isMediaPartner?: boolean }) => (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
         {items.map((item) => (
            <div key={item.id} className="block w-full max-w-xs">
               {isMediaPartner && item.src ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                     <div className="w-full h-32 bg-gray-300/20 backdrop-blur-sm border border-blue-700/30 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                        <img
                           src={item.src}
                           alt={item.name}
                           className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                     </div>
                  </a>
               ) : (
                  <div className="w-full h-32 bg-gray-300/20 backdrop-blur-sm border border-blue-700/30 rounded-xl flex items-center justify-center group transition-all duration-300 select-none">
                     <div className="text-center pointer-events-none">
                        <svg
                           className="w-12 h-12 text-blue-400/60 mx-auto mb-2 transition-colors duration-300"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                        >
                           <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-blue-300/60 text-sm font-medium transition-colors duration-300">
                           {item.name}
                        </p>
                     </div>
                  </div>
               )}
            </div>
         ))}
      </div>
   );

   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 py-20">
            {/* Sponsored By Section */}
            <div className="w-full max-w-6xl mb-20">
               <h2 className="font-bold text-4xl lg:text-5xl mb-8 text-white text-center">
                  Sponsored By:
               </h2>

               <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mb-12 rounded-full mx-auto"></div>

               <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700/40 rounded-2xl p-4 sm:p-8">
                  {sponsors.length <= 4 ? (
                     <>
                        {
                           sponsors.length == 0? (
                              <div className='flex justify-center'>
                                 <LinkButton link={links.proposalKreatif} text={"Jadilah Sponsor kami!"} isInverted={false} />
                              </div>
                           ): <StaticGrid items={sponsors} />
                        }
                     </>
                  ) : (
                     <PersistentMarquee items={sponsors} speed={90} />
                  )}
               </div>
            </div>

            {/* Media Partner Section */}
            <div className="w-full max-w-6xl">
               <h2 className="font-bold text-4xl lg:text-5xl mb-8 text-white text-center">
                  Media Partner:
               </h2>

               <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mb-12 rounded-full mx-auto"></div>

               <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700/40 rounded-2xl p-4 sm:p-8">
                  {isMobile || mediaPartners.length <= 4 ? (
                     <StaticGrid items={mediaPartners} isMediaPartner={true} />
                  ) : (
                     <PersistentMarquee items={mediaPartners} speed={90} isMediaPartner={true} />
                  )}
               </div>
            </div>
         </section>
      </>
   )
}