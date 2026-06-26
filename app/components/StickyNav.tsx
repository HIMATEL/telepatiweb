"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [activeId, setActiveId] = useState("syarat");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", 
      }
    );

    const sections = ["syarat", "tahapan", "teknis", "kriteria", "hadiah"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "syarat", label: "Syarat Umum" },
    { id: "tahapan", label: "Tahapan Lomba" },
    { id: "teknis", label: "Ketentuan Teknis" },
    { id: "kriteria", label: "Kriteria Penilaian" },
    { id: "hadiah", label: "Hadiah" },
  ];

  return (
    <div className="sticky top-36 col-span-1 md:col-span-3 hidden md:block">
      <div className="space-y-4 h-auto">
        <h3 className="font-(family-name:--font-inter) text-[12px] font-bold text-[#3e4a3e] uppercase tracking-wider border-b-2 border-[#082016]/10 pb-2">
          Navigasi Regulasi
        </h3>
        <ul className="space-y-3">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`font-(family-name:--font-inter) text-[16px] transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-[#006b30] font-bold"
                      : "text-[#3e4a3e] hover:text-[#006b30]"
                  }`}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
