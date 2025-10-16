'use client';

import { useState } from 'react';
import Image from "next/image";

import { Exo_2 } from "next/font/google";

const exotwo = Exo_2({
   variable: "--font-exo2-sans",
   subsets: ["latin"],
});

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const navigationItems = [
      { label: "Home", target: "home" },
      { label: "About", target: "explanation" },
      { label: "Timeline", target: "timeline" },
      { label: "Info", target: "terms" },
      { label: "FAQ", target: "faq" },
   ];

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
   };

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-700/30">
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Left side - Logo with Telepati logo */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollToSection('home')}>
               {/* Telepati Logo */}
               <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                     src="/logo_telepati.png"
                     alt="Telepati 7.0 Logo"
                     width={50}
                     height={50}
                     className="w-full h-full object-contain"
                  />
               </div>

               <div className={exotwo.className}>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">TELEPATI 7.0</h1>
               </div>
            </div>

            {/* Right side - Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
               {navigationItems.map((item, index) => (
                  <button
                     key={index}
                     onClick={() => scrollToSection(item.target)}
                     className="cursor-pointer text-white/80 hover:py-2 hover:px-3 hover:bg-[#091d2d] hover:border-2 hover:border-cyan-400 hover:rounded-xl hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform relative"
                  >
                     {item.label}
                  </button>
               ))}
            </nav>

            {/* Mobile menu button */}
            <button
               className="cursor-pointer md:hidden text-white/80 hover:text-blue-400 transition-colors duration-200"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
               <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  {isMobileMenuOpen ? (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                     />
                  ) : (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  )}
               </svg>
            </button>
         </div>

         {/* Mobile Navigation Menu */}
         <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-blue-700/30 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
         }`}>
            <nav className="flex flex-col py-4">
               {navigationItems.map((item, index) => (
                  <button
                     key={index}
                     onClick={() => scrollToSection(item.target)}
                     className="text-white/80 hover:text-white py-3 px-6 text-left transition-all duration-200 border-b hover:font-bold border-blue-800/20 last:border-b-0 hover:bg-[#091d2d] hover:border-2 hover:border-cyan-400 cursor-pointer"
                  >
                     {item.label}
                  </button>
               ))}
            </nav>
         </div>
      </header>
   )
}

export default Header;