import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function Sponsors() {
  const sponsors: any[] = [];

  return (
    <ScrollReveal id="sponsor" className="py-20 md:py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-on-surface mb-4">
        Didukung Oleh
      </h2>

      <img src="images/supporters.png" className="w-full justify-center scale-85 md:scale-65" alt="Pendukung Internal" />

      {sponsors.length !== 0 ? (
        <div className="md:mt-12 mt-10 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {sponsors.map((i) => (
            <div
              key={i}
              className="w-30 h-15 relative bg-surface-container-low rounded-lg border border-[#061E14]/10"
            >
              <div className="absolute inset-0 flex items-center justify-center font-(family-name:--font-jakarta) font-bold text-primary/50">
                LOGO
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="md:mt-12 mt-8 flex flex-col items-center gap-6 max-w-2xl mx-auto w-full px-4">
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant">
            Mari berkolaborasi membangun masa depan agrikultur Indonesia. Dukungan Anda adalah pendorong utama bagi lahirnya inovasi teknologi dari generasi muda, sementara kami memberikan wadah strategis bagi brand Anda untuk bertumbuh bersama para agen perubahan masa depan.
          </p>
          <Link href="https://canva.link/proposal-sponsor-telepati-8-0" className="neo-button-primary w-full sm:w-auto">
              Jadilah Sponsor kami!
          </Link>
        </div>
      )}
    </ScrollReveal>
  );
}
