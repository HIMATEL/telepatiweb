import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

export default function Competitions() {
  return (
    <ScrollReveal
      id="cabang-lomba"
      className="py-20 md:py-24 px-6 bg-[#defae9] border-y-2 border-[#061E14]/5"
    >
      <div className="max-w-[1152px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-[#082016] mb-4">
            Cabang Lomba
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] max-w-2xl mx-auto">
            Pilih medan juangmu. Hadirkan inovasi nyata yang dapat
            diimplementasikan untuk kemajuan agrikultur Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: IoT */}
          <div className="bento-card flex flex-col h-full rounded-[2rem] p-8 md:p-12 relative overflow-hidden group border-2 border-[#082016] hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#006b30]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
            <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[#082016] bg-[#ffdf9a] text-[#082016] text-[12px] leading-[1] tracking-[0.05em] font-medium uppercase mb-6 shadow-[2px_2px_0px_#082016]">
              Hardware & Sensors
            </div>
            <h3 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-[#082016] mb-4">
              Internet of Things (IoT) Agriculture
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] mb-8">
              Rancang sistem cerdas berbasis mikrokontroler dan sensor untuk
              memonitoring dan mengotomatisasi proses agrikultur. Fokus pada
              efisiensi air, deteksi kualitas tanah, dan smart greenhouse.
            </p>
            <div className="mt-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBGH5hJHBCF5PjrRA9FN-OaWHKEcfuwzBAX_TDDRoFl9luUMn6XtxmLCdVQRcW6d5AhPL3YVJrGb1okaeYDKoZuqeNJAGLFrxvP_GuYsobXIgOJ-F8QAOHly7fc5mxMz1MYZkuKzFbHJwcdGe6sycYmwTP2A4Qsm-D9Y38YK4T27UORmaV3fEYbjhn-O1BpZVxIF4uOtq745DP5xMul6EiXVV8y0M_JKA7fkyGENcN31wL_p3z1-e2qFhBQl3g62q0ZCRtyhxRJ-V"
                alt="IoT sensor node in a high-tech greenhouse"
                width={800}
                height={300}
                className="w-full h-48 object-cover rounded-xl border-2 border-[#082016] mb-6"
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
          <div className="bento-card flex flex-col h-full rounded-[2rem] p-8 md:p-12 relative overflow-hidden group border-2 border-[#082016] hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#785a00]/10 rounded-br-full -z-10 group-hover:scale-110 transition-transform" />
            <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-[#082016] bg-[#ffdf9a] text-[#082016] text-[12px] leading-[1] tracking-[0.05em] font-medium uppercase mb-6 shadow-[2px_2px_0px_#082016]">
              Machine Learning & Data
            </div>
            <h3 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-[#082016] mb-4">
              AI Training & Case Study
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#3e4a3e] mb-8">
              Kembangkan model machine learning untuk memecahkan studi kasus
              nyata di sektor pertanian. Fokus pada prediksi panen, deteksi
              penyakit tanaman melalui citra, dan optimasi rantai pasok.
            </p>
            <div className="mt-auto">
              <div
                className="w-full h-48 rounded-xl border-2 border-[#082016] mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA8krW3f0s6G6ACFMYDsr73vJN8kxZ6dIEXC_lT2HBsSPjxmwvBmGcQ9_wpipznVnBnZ8vGxuHgW7EhVKndRPJbJD5GlZf_O1T1bygsE3jyXWUU-1pzxKjfZzlj_wX0eNipV1igjsK-ubBhBE3vj7KkERDwU7SGlZMXQDK1Gu7jyE2f5Rv3m-FAcF04d7btyB-kcbOao1YMuFsHK-U9_g1s7w1DY_ft7fmmQAIt8nLRB93b3y9meWSuCGvZJNjBmtti_iQ5dZUx3au")'
                }}
                role="img"
                aria-label="Agricultural data visualization over crop field"
              />
              <Link
                href="/regulasi/ai"
                className="neo-button-secondary px-6 py-3 w-full sm:w-auto text-center"
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
