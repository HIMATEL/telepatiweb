import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <ScrollReveal id="tentang" className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-on-surface mb-4">
            Apa itu Telepati?
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant mb-6 text-justify">
            Telepati (Telekomunikasi Pamerin IoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi <span className="font-bold">Politeknik Negeri Bandung</span>.
          </p>
        </div>

        {/* Right column — bento cards */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bento-card rounded-2xl p-8 flex flex-col items-start shadow-sm hover:-translate-y-1 transition-transform border-2 border-on-surface/10">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              counter_7
            </span>
            <h3 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold text-on-surface mb-2">
              7 Tahun Berjalan
            </h3>
            <p className="text-sm text-on-surface-variant text-justify">
              Telepati telah diselenggarakan selama 7 tahun berturut-turut, menjadikannya salah satu kompetisi teknologi yang berpengalaman di Indonesia.
            </p>
          </div>

          <div className="bento-card rounded-2xl p-8 flex flex-col items-start shadow-sm hover:-translate-y-1 transition-transform border-2 border-on-surface/10">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">
              groups
            </span>
            <h3 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold text-on-surface mb-2">
              Ajang Talenta Nasional
            </h3>
            <p className="text-sm text-on-surface-variant">
              Mempertemukan talenta terbaik dari seluruh universitas dan
              politeknik di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
