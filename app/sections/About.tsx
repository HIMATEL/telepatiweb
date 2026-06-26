import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <ScrollReveal id="tentang" className="py-20 md:py-24 px-6 max-w-[1152px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-[#082016] mb-4">
            Membangun Ekosistem <br />
            Smart Agriculture
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] mb-6">
            Telepati (Technology and Electronic Competition) adalah ajang
            bergengsi yang mewadahi inovator muda Indonesia. Tahun ini, Telepati
            8.0 hadir dengan tema &quot;Smart Agriculture&quot;, mengintegrasikan IoT dan AI
            untuk menjawab tantangan ketahanan pangan nasional.
          </p>
        </div>

        {/* Right column — bento cards */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bento-card rounded-2xl p-8 flex flex-col items-start shadow-sm hover:-translate-y-1 transition-transform border-2 border-[#082016]/10">
            <span className="material-symbols-outlined text-4xl text-[#006b30] mb-4">
              network_node
            </span>
            <h3 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold text-[#082016] mb-2">
              Transformasi Digital
            </h3>
            <p className="text-sm text-[#3e4a3e]">
              Mendorong adopsi teknologi tepat guna di sektor agrikultur
              tradisional.
            </p>
          </div>

          <div className="bento-card rounded-2xl p-8 flex flex-col items-start shadow-sm hover:-translate-y-1 transition-transform border-2 border-[#082016]/10">
            <span className="material-symbols-outlined text-4xl text-[#785a00] mb-4">
              groups
            </span>
            <h3 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold text-[#082016] mb-2">
              Katalisator Nasional
            </h3>
            <p className="text-sm text-[#3e4a3e]">
              Mempertemukan talenta terbaik dari seluruh universitas dan
              politeknik di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
