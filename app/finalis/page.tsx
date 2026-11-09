import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pengumuman Pemenang — TELEPATI 8.0 POLBAN",
  description:
    "Daftar pemenang resmi kompetisi nasional TELEPATI 8.0 Politeknik Negeri Bandung (POLBAN) untuk cabang AgroIoT Innovation Challenge dan AgriData Intelligence Race.",
  keywords: [
    "pemenang telepati 8.0",
    "juara telepati 8.0 polban",
    "telepati 8.0 polban",
    "himatel polban",
    "agroit innovation challenge",
    "agridata intelligence race",
    "politeknik negeri bandung",
  ],
  openGraph: {
    title: "Pengumuman Pemenang — TELEPATI 8.0 POLBAN",
    description:
      "Daftar pemenang resmi kompetisi nasional TELEPATI 8.0 POLBAN cabang AgroIoT dan AgriData.",
    images: [
      {
        url: "https://polbantelepati.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TELEPATI 8.0 - Growing The Golden Future",
      },
    ],
  },
};

export default function FinalisPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface">
        Pengumuman Pemenang
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4 max-w-2xl">
        Selamat kepada seluruh pemenang dan finalis TELEPATI 8.0! Pilih cabang lomba untuk melihat daftar pemenang serta hasil akhir penilaian resmi dewan juri.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <article className="bento-card flex flex-col h-full rounded-4xl p-8 md:p-12 relative overflow-hidden group border-2 border-on-surface hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
          <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-on-surface bg-[#ffdf9a] text-on-surface text-[12px] leading-none tracking-wider font-medium mb-6 shadow-[2px_2px_0px_#082016]">
            Internet of Things (IoT) Agriculture Track
          </div>
          <h2 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-on-surface mb-4">
            AgroIoT Innovation Challenge
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant mb-8">
            Lihat daftar pemenang dan rekap perolehan nilai akhir peserta cabang IoT.
          </p>
          <div className="mt-auto">
            <Image
              src="/images/regulation/iotimage.jpeg"
              alt="Teknologi pertanian cerdas untuk cabang IoT"
              width={800}
              height={300}
              className="w-full h-48 object-cover rounded-xl border-2 border-on-surface mb-6"
              unoptimized
            />
            <Link
              href="/finalis/iot"
              className="neo-button-primary px-6 py-3 w-full sm:w-auto text-center"
            >
              Lihat pemenang IoT
            </Link>
          </div>
        </article>

        <article className="bento-card flex flex-col h-full rounded-4xl p-8 md:p-12 relative overflow-hidden group border-2 border-on-surface hover:shadow-[5px_5px_0px_#082016] transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
          <div className="inline-flex self-start items-center px-3 py-1 rounded-full border border-on-surface bg-[#ffdf9a] text-on-surface text-[12px] leading-none tracking-wider font-medium mb-6 shadow-[2px_2px_0px_#082016]">
            AI Model Training &amp; Case Study Track
          </div>
          <h2 className="font-(family-name:--font-jakarta) text-[32px] leading-[1.2] font-bold text-on-surface mb-4">
            AgriData Intelligence Race
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant mb-8">
            Lihat daftar pemenang dan audit metrik evaluasi resmi dewan juri cabang AI.
          </p>
          <div className="mt-auto">
            <Image
              src="/images/regulation/ai_image.jpg"
              alt="Visualisasi data pertanian untuk cabang AI"
              width={800}
              height={300}
              className="w-full h-48 object-cover rounded-xl border-2 border-on-surface mb-6"
              unoptimized
            />
            <Link
              href="/finalis/ai"
              className="neo-button-primary px-6 py-3 w-full sm:w-auto text-center"
            >
              Lihat pemenang AI
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
