import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

export default function Competitions() {
  return (
    <ScrollReveal
      id="cabang-lomba"
      className="py-20 md:py-24 px-6 bg-surface-container-low border-y-2 border-[#061E14]/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-on-surface mb-4">
            Cabang Lomba
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
            Pilih medan juangmu. Hadirkan inovasi nyata yang dapat
            diimplementasikan untuk kemajuan agrikultur Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: IoT */}
          <div className="bento-card flex flex-col h-full rounded-4xl p-8 md:p-12 relative overflow-hidden group border-2 border-on-surface hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
            <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-on-surface bg-[#ffdf9a] text-on-surface text-[12px] leading-none tracking-wider font-medium mb-6 shadow-[2px_2px_0px_#082016]">
              Internet of Things (IoT) Agriculture Track
            </div>
            <h3 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-on-surface mb-4">
              AgroIoT Innovation Challenge
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant mb-8">
              Rancang sistem cerdas berbasis mikrokontroler dan sensor untuk
              memonitoring dan mengotomatisasi proses agrikultur. Fokus pada
              efisiensi air, deteksi kualitas tanah, dan smart greenhouse.
            </p>
            <div className="mt-auto">
              <Image
                src="/images/regulation/iotimage.jpeg"
                alt="Smart robotic farmer spraying fertilizer on vegetable green plants by user6702303 https://www.magnific.com"
                width={800}
                height={300}
                className="w-full h-48 object-cover rounded-xl border-2 border-on-surface mb-6"
                unoptimized
              />
              <Link
                href="/regulasi/iot"
                className="neo-button-primary px-6 py-3 w-full sm:w-auto text-center"
              >
                Detail Regulasi
              </Link>
            </div>
          </div>

          {/* Card 2: AI */}
          <div className="bento-card flex flex-col h-full rounded-4xl p-8 md:p-12 relative overflow-hidden group border-2 border-on-surface hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
            <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-on-surface bg-[#ffdf9a] text-on-surface text-[12px] leading-none tracking-wider font-medium mb-6 shadow-[2px_2px_0px_#082016]">
              AI Model Training & Case Study Track
            </div>
            <h3 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-on-surface mb-4">
              AgriData Intelligence Race
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant mb-8">
              Kembangkan model kecerdasan buatan berbasis Computer Vision &
              Object Detection untuk memecahkan studi kasus nyata pertanian.
            </p>
            <div className="mt-auto">
              <Image
                src="/images/regulation/ai_image.jpg"
                alt="Agricultural data visualization over crop field"
                width={800}
                height={300}
                className="w-full h-48 object-cover rounded-xl border-2 border-on-surface mb-6"
                unoptimized
              />
              <Link
                href="/regulasi/ai"
                className="neo-button-primary px-6 py-3 w-full sm:w-auto text-center"
              >
                Detail Regulasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
