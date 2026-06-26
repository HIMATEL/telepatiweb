import ScrollReveal from "../components/ScrollReveal";

export default function Sponsors() {
  const sponsors = [1, 2, 3, 4, 5, 6];

  return (
    <ScrollReveal id="sponsor" className="py-20 md:py-24 px-6 max-w-[1152px] mx-auto text-center">
      <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-[#082016] mb-4">
        Didukung Oleh
      </h2>
      <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] max-w-2xl mx-auto mb-12">
        Mitra strategis yang percaya pada potensi generasi muda untuk memajukan
        agrikultur Indonesia.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {sponsors.map((i) => (
          <div
            key={i}
            className="w-[120px] h-[60px] relative bg-[#defae9] rounded-lg border border-[#061E14]/10"
          >
            <div className="absolute inset-0 flex items-center justify-center font-(family-name:--font-jakarta) font-bold text-[#006b30]/50">
              LOGO
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
