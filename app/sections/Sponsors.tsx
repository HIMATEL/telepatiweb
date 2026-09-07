"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

interface GDriveFile {
  id: string;
  name: string;
}

export default function Sponsors() {
  const [medpart, setMedpart] = useState<GDriveFile[]>([]);

  useEffect(() => {
    async function fetchMedpart() {
      try {
        const res = await fetch("/api/gdrive-grabber?type=medpart");
        if (!res.ok) return;
        const files: GDriveFile[] = await res.json();
        if (files && files.length > 0) {
          setMedpart(files);
        }
      } catch (e) {
        console.error("Failed to load medpart logos:", e);
      }
    }
    fetchMedpart();
  }, []);

  return (
    <ScrollReveal id="sponsor" className="py-20 md:py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-on-surface mb-4">
        Didukung Oleh
      </h2>

      <img src="images/supporters.png" className="w-full justify-center scale-85 md:scale-65" alt="Pendukung Internal" />

      {/* Media Partner Section */}
      {medpart.length > 0 && (
        <div className="mt-12">
          <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface-variant mb-6">
            Media Partner
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-all duration-300">
            {medpart.map((item) => (
              <div
                key={item.id}
                className="w-28 h-28 md:w-32 md:h-32 relative bg-surface-container-low rounded-xl border border-[#061E14]/10 p-2 flex items-center justify-center overflow-hidden shadow-xs hover:scale-105 transition-transform"
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${item.id}`}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="md:mt-12 mt-8 flex flex-col items-center gap-6 max-w-2xl mx-auto w-full px-4">
        <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant">
          Mari berkolaborasi membangun masa depan agrikultur Indonesia. Dukungan Anda adalah pendorong utama bagi lahirnya inovasi teknologi dari generasi muda, sementara kami memberikan wadah strategis bagi brand Anda untuk bertumbuh bersama para agen perubahan masa depan.
        </p>
        <Link href="https://canva.link/proposal-sponsor-telepati-8-0" className="neo-button-primary w-full sm:w-auto">
            Jadilah Sponsor kami!
        </Link>
      </div>
    </ScrollReveal>
  );
}
