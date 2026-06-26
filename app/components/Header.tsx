"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Tentang", "Cabang Lomba", "Timeline", "Sponsor"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 px-4 sm:px-6 py-4 header-anim ${
          scrolled ? "translate-y-0" : "translate-y-2"
        }`}
      >
        <div
          className={`max-w-[1152px] mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm border border-[#061E14]/10"
              : "bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-(family-name:--font-exo2) text-[20px] md:text-[24px] leading-[1.3] font-bold tracking-tight text-[#082016] relative z-[60]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/telepati8.svg"
              alt="Telepati 8.0 Logo"
              width={64}
              height={64}
              className="h-10 md:h-14 w-auto object-contain "
            />
            TELEPATI 8.0
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <Link
                  key={item}
                  href={`/#${id}`}
                  className="px-4 py-2 rounded-full font-(family-name:--font-inter) text-[16px] font-medium text-[#3e4a3e] transition-all hover:text-[#082016] border-2 border-transparent hover:border-[#006b30]"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#cabang-lomba"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#082016] bg-[#006b30] px-6 py-2.5 font-(family-name:--font-jakarta) text-[14px] font-bold text-white shadow-[2px_2px_0px_#082016] transition-all duration-300 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_#082016] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Daftar Sekarang
            </Link>
          </div>

          <button
            className="lg:hidden relative p-2 text-[#082016]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-[#082016]/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 lg:hidden flex flex-col pt-28 px-6 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            return (
              <Link
                key={item}
                href={`/#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-(family-name:--font-jakarta) text-[20px] font-bold text-[#082016] py-3 border-b border-[#061E14]/10"
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8">
          <Link
            href="/#cabang-lomba"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#082016] bg-[#006b30] px-6 py-4 font-(family-name:--font-jakarta) text-[16px] font-bold text-white shadow-[3px_3px_0px_#082016] transition-all hover:shadow-[5px_5px_0px_#082016]"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </>
  );
}
