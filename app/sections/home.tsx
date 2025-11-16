'use client';

import { Exo_2 } from "next/font/google";
import { LinkButton } from "../components/button";
import { sponsorLists } from "../util/sponsorextractor";
import { links } from "../util/links";

const exotwo = Exo_2({
   variable: "--font-exo2-sans",
   subsets: ["latin"],
});

export default function HomeSection() {
   return (
      <>
         <section className={`bg-[url('https://lh3.googleusercontent.com/d/1NZu2SJs69eYBh6ZVzJ8ZjMGbxqcQ46o6')] bg-cover bg-center bg-no-repeat flex relative justify-center flex-col items-center min-h-screen`}>
            {/* Main overlay - 70% darker */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Bottom overlay - additional 20% darker (90% total) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/20 z-20"></div>

            <div className="relative z-30 justify-center flex flex-col items-center p-2 sm:p-2 lg:p-2">
               <div className={exotwo.className}>
                  <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center">TELEPATI 7.0</h1>
               </div>
               <h1 className="text-md sm:text-base md:text-lg lg:text-2xl pt-3 sm:pt-4 lg:pt-5 flex justify-center items-center text-center px-2">
                  Lomba IoT se-SMK/SMA dan Mahasiswa Semester 1-5
               </h1>
               <h2 className="mt-3 text-xs md:text-sm sm:text-base lg:text-lg text-center px-4">Mengusung Tema: <span className="relative inline-block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-cyan-400 after:shadow-[0_0_8px_rgba(34,197,94,0.6),0_0_16px_rgba(6,182,212,0.4)] after:animate-pulse">"Connected Green Future with IoT"</span>: Inovasi IoT untuk Keberlanjutan Lingkungan</h2>

               <div className="flex mt-8 flex-col sm:flex-row sm:pt-6 space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto px-4 sm:px-0 justify-center items-center">
                  <LinkButton link={links.proposalKreatif} text={"Jadilah Sponsor kami!"} isInverted={false} />
                  <LinkButton internalUrl="/finalis" text={"Pengumuman Finalis"} isInverted={true} />
               </div>
            </div>
            <div className="absolute bottom-0 w-full h-1/6 z-30 justify-center flex flex-col items-center">
               {/* Make sponsor logo displayer */}
               <div className="w-11/12 h-5/6 flex flex-col justify-center items-center">
               {(sponsorLists.Gold.length == 0)? <></> : <h1 className="text-yellow-300 text-sm sm:text-base lg:text-xl">Our Gold Sponsors:</h1> }
                  <div className="w-full h-4/6 flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-10 pt-2">
                  {sponsorLists.Gold.map((sponsor) => (
                     <a href={sponsor.url} key={sponsor.name} target="_blank" rel="noopener noreferrer external">
                        <img
                           src={sponsor.logo}
                           alt={`${sponsor.name} Logo`}
                           className="h-8 sm:h-12 lg:h-16 object-contain"
                        />
                     </a>
                  ))}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
