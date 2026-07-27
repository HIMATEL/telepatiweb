import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

export default function Recap() {
  return (
    <section className="py-20 md:py-24 px-6 bg-[#006b30] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,221,136,0.2),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1152px] mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-(family-name:--font-jakarta) text-[32px] md:text-[48px] font-extrabold mb-4">
            Jejak Langkah Telepati
          </h2>
          <p className="font-(family-name:--font-inter) text-lg text-white/80 max-w-2xl mx-auto">
            Melihat kembali antusiasme dan inovasi luar biasa dari para finalis
            di tahun sebelumnya.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main big image */}
          <ScrollReveal className="md:col-span-2 bento-card rounded-2xl overflow-hidden border-2 border-[#082016] h-[300px] md:h-[400px] relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26Jp071Q51F14ZzP-u5j-B4F1y0a4rP-u3GkK3f_y2K7aX_4-y-r4Zz2G4F-F_a9t4Z2Y-c6G1k2N8y4A-m8B-k-P7h9K9K-A-R_x7R7x9P_F3N5y4A-m8B-k-P7h9K9K-A-R"
              alt="Telepati 8.0 Recap"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082016]/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-(family-name:--font-jakarta) text-2xl font-bold">
                Grand Final Exhibition
              </h3>
            </div>
          </ScrollReveal>

          {/* Side images */}
          <div className="grid grid-rows-2 gap-6 h-[300px] md:h-[400px]">
            <ScrollReveal className="bento-card rounded-2xl overflow-hidden border-2 border-[#082016] relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26Jp071Q51F14ZzP-u5j-B4F1y0a4rP-u3GkK3f_y2K7aX_4-y-r4Zz2G4F-F_a9t4Z2Y-c6G1k2N8y4A-m8B-k-P7h9K9K-A-R_x7R7x9P_F3N5y4A-m8B-k-P7h9K9K-A-R"
                alt="Telepati 8.0 Winners"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082016]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-(family-name:--font-jakarta) font-bold">
                  Awarding Night
                </h3>
              </div>
            </ScrollReveal>
            <ScrollReveal className="bento-card rounded-2xl overflow-hidden border-2 border-[#082016] relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26Jp071Q51F14ZzP-u5j-B4F1y0a4rP-u3GkK3f_y2K7aX_4-y-r4Zz2G4F-F_a9t4Z2Y-c6G1k2N8y4A-m8B-k-P7h9K9K-A-R_x7R7x9P_F3N5y4A-m8B-k-P7h9K9K-A-R"
                alt="Telepati 8.0 Pitching"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082016]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-(family-name:--font-jakarta) font-bold">
                  Live Pitching
                </h3>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
