import ScrollReveal from "../components/ScrollReveal";

export default function Timeline() {
  const events = [
    {
      date: "1 - 30 Sept 2024",
      title: "Pendaftaran",
      desc: "Early bird registration dibuka.",
    },
    {
      date: "5 Okt 2024",
      title: "Workshop IoT",
      desc: "Webinar tentang IoT di Agrikultur.",
    },
    {
      date: "15 Okt 2024",
      title: "Pengumpulan Proposal",
      desc: "Deadline submit proposal.",
    },
    {
      date: "20 Okt 2024",
      title: "Seleksi Tahap 1",
      desc: "Penyaringan dokumen.",
    },
    {
      date: "1 Nov 2024",
      title: "Penjurian",
      desc: "Presentasi online.",
    },
    {
      date: "15 Nov 2024",
      title: "Grand Final",
      desc: "Presentasi offline & Exhibition.",
    },
  ];

  return (
    <ScrollReveal id="timeline" className="py-20 md:py-24 px-6 max-w-[1152px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-[#082016] mb-4">
          Timeline Kegiatan
        </h2>
        <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] max-w-2xl mx-auto">
          Catat tanggal pentingnya dan pastikan tim kamu tidak tertinggal.
        </p>
      </div>

      {/* Horizontal Timeline Container (Desktop) */}
      <div className="relative w-full mx-auto py-20 hidden md:block overflow-x-auto scrollbar-hide">
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>
        <div className="relative min-w-[1600px] px-6">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#061E14]/20 -translate-y-1/2 rounded-full" />
          <div className="relative z-10 flex justify-between items-center w-full">
            {events.map((event, idx) => {
              const isTop = idx % 2 === 0;
              const isPrimary = idx % 2 === 0;
              const bgColor = isPrimary ? "bg-[#e8fff0]" : "bg-[#fefce8]";
              const borderColor = isPrimary ? "border-[#006b30]" : "border-[#fdc425]";
              const shadowClass = isPrimary 
                ? "shadow-[0_0_15px_rgba(0,107,48,0.6)]" 
                : "shadow-[0_0_15px_rgba(253,196,37,0.6)]";
              
              return (
                <div key={idx} className={`flex flex-col items-center group w-64 relative ${isTop ? "top-[-60px]" : "top-[60px]"}`}>
                  {isTop ? (
                    <>
                      <div className={`bento-card p-4 rounded-xl text-center w-full shadow-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_#061E14] transition-all border-2 border-[#061E14] ${bgColor} mb-4`}>
                        <h4 className="font-(family-name:--font-jakarta) font-bold text-[#082016] mb-1">{event.title}</h4>
                        <p className="font-(family-name:--font-inter) text-xs text-[#3e4a3e]">{event.date}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass} group-hover:scale-125 transition-transform`} />
                    </>
                  ) : (
                    <>
                      <div className={`w-6 h-6 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass} group-hover:scale-125 transition-transform mb-4`} />
                      <div className={`bento-card p-4 rounded-xl text-center w-full shadow-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_#061E14] transition-all border-2 border-[#061E14] ${bgColor}`}>
                        <h4 className="font-(family-name:--font-jakarta) font-bold text-[#082016] mb-1">{event.title}</h4>
                        <p className="font-(family-name:--font-inter) text-xs text-[#3e4a3e]">{event.date}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (Vertical fallback) */}
      <div className="md:hidden flex flex-col gap-8 relative border-l-2 border-[#061E14]/20 ml-4 pl-8">
        {events.map((event, idx) => {
          const isPrimary = idx % 2 === 0;
          const bgColor = isPrimary ? "bg-[#e8fff0]" : "bg-[#fefce8]";
          const borderColor = isPrimary ? "border-[#006b30]" : "border-[#fdc425]";
          const shadowClass = isPrimary 
                ? "shadow-[0_0_10px_rgba(0,107,48,0.6)]" 
                : "shadow-[0_0_10px_rgba(253,196,37,0.6)]";

          return (
            <div key={idx} className="relative">
              <div className={`absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass}`} />
              <div className={`bento-card p-4 rounded-xl shadow-sm border-2 border-[#061E14] ${bgColor}`}>
                <span className="inline-block px-3 py-1 bg-white border border-[#061E14] rounded-full text-[10px] font-bold mb-2">
                  {event.date}
                </span>
                <h4 className="font-(family-name:--font-jakarta) font-bold text-[#082016] mb-1">{event.title}</h4>
                <p className="font-(family-name:--font-inter) text-sm text-[#3e4a3e]">{event.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
