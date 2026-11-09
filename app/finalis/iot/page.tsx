import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { iotFinals, iotWinners, iotSpecialAwards, judges } from "./data";

export const metadata: Metadata = {
  title: "Pengumuman Pemenang AgroIoT Innovation Challenge — TELEPATI 8.0",
  description:
    "Hasil akhir dan penetapan pemenang resmi dewan juri cabang AgroIoT Innovation Challenge TELEPATI 8.0 POLBAN. Juara 1 diraih oleh Para pemula (Politeknik Astra), Juara 2 Kadang +1 Kadang -1 (Telkom University), dan Juara 3 berat bersih 500 ML (UPI).",
  keywords: [
    "pemenang telepati 8.0",
    "pemenang agroit telepati 8.0",
    "agroit innovation challenge",
    "juara telepati 8.0 polban",
    "para pemula politeknik astra",
    "kadang +1 kadang -1 telkom university",
    "berat bersih 500 ml upi",
    "himatel polban",
    "politeknik negeri bandung",
  ],
  openGraph: {
    title: "Pengumuman Pemenang AgroIoT Innovation Challenge — TELEPATI 8.0",
    description:
      "Penetapan pemenang resmi dewan juri cabang IoT TELEPATI 8.0 POLBAN beserta rekap nilai lengkap Top 10 babak final.",
    images: [
      {
        url: "https://polbantelepati.tech/images/winners/juara-1-iot.jpg",
        width: 1200,
        height: 900,
        alt: "Penyerahan Penghargaan Juara 1 AgroIoT Telepati 8.0 - Para pemula Politeknik Astra",
      },
    ],
  },
};

const cell = "py-2.5 px-4 border border-on-surface text-center tabular-nums";

export default function FinalisIotPage() {
  // Sort podium for Olympic-style display: Rank 2 (Left), Rank 1 (Center/Highest), Rank 3 (Right)
  const podiumWinners = [
    iotWinners.find((w) => w.rank === 2)!,
    iotWinners.find((w) => w.rank === 1)!,
    iotWinners.find((w) => w.rank === 3)!,
  ];

  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <p className="font-(family-name:--font-inter) text-primary text-sm font-semibold tracking-widest uppercase">
        TELEPATI 8.0 · AgroIoT Innovation Challenge
      </p>
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface mt-2">
        Pengumuman Pemenang Cabang IoT
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4 max-w-3xl">
        Selamat kepada para pemenang dan seluruh tim finalis AgroIoT Innovation Challenge TELEPATI 8.0 Politeknik Negeri Bandung.
      </p>

      {/* Podium Stage Display (Bertingkat ala Panggung Juara) */}
      <section className="mt-12">
        <div className="text-center mb-8">
          <h2 className="font-(family-name:--font-jakarta) text-2xl font-extrabold text-on-surface">
            Panggung Kejuaraan TELEPATI 8.0
          </h2>
          <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant mt-1">
            Penetapan resmi Juara 1, Juara 2, dan Juara 3 AgroIoT Innovation Challenge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-5xl mx-auto">
          {podiumWinners.map((winner) => {
            const isFirst = winner.rank === 1;
            const isSecond = winner.rank === 2;

            return (
              <div
                key={winner.award}
                className={`bg-white border-2 border-on-surface rounded-2xl overflow-hidden shadow-[4px_4px_0px_#082016] flex flex-col transition-transform hover:-translate-y-1 ${
                  isFirst
                    ? "order-1 md:order-2 border-primary/80 ring-2 ring-primary/20 shadow-[6px_6px_0px_#006b30]"
                    : isSecond
                    ? "order-2 md:order-1"
                    : "order-3 md:order-3"
                }`}
              >
                {/* Photo Header */}
                <div className="relative w-full aspect-4/3 bg-surface-container-low border-b-2 border-on-surface overflow-hidden">
                  <Image
                    src={winner.image}
                    alt={`Penyerahan penghargaan ${winner.award} - ${winner.team}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full border border-on-surface ${winner.badgeBg} text-on-surface font-(family-name:--font-jakarta) font-extrabold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#082016]`}
                    >
                      {winner.award}
                    </span>
                  </div>
                </div>

                {/* Podium Pedestal / Content */}
                <div
                  className={`p-6 flex flex-col justify-between ${
                    isFirst
                      ? "bg-linear-to-b from-primary/5 to-primary/15 md:min-h-[170px]"
                      : isSecond
                      ? "bg-slate-50 md:min-h-[150px]"
                      : "bg-orange-50/50 md:min-h-[135px]"
                  }`}
                >
                  <div>
                    <h3 className="font-(family-name:--font-jakarta) text-xl font-extrabold text-on-surface leading-snug">
                      {winner.team}
                    </h3>
                    <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant font-medium mt-1">
                      {winner.university}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-on-surface/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-on-surface-variant">
                      Peringkat:
                    </span>
                    <span className="font-extrabold text-primary text-sm tabular-nums">
                      Rank #{winner.rank}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Special Category Awards (Favorite Poster & Best Presentation) */}
      <section className="mt-14">
        <div className="mb-6">
          <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface">
            Penghargaan Kategori Khusus
          </h2>
          <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
            Apresiasi dewan juri untuk presentasi terbaik dan poster terfavorit peserta final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {iotSpecialAwards.map((item) => (
            <div
              key={item.award}
              className="bg-white border-2 border-on-surface rounded-2xl overflow-hidden shadow-[3px_3px_0px_#082016] flex flex-col sm:flex-row group"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto sm:min-h-[180px] border-b-2 sm:border-b-0 sm:border-r-2 border-on-surface bg-surface-container-low overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Penghargaan ${item.award} - ${item.team}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col justify-center sm:w-3/5">
                <span
                  className={`inline-block px-3 py-1 rounded-full border border-on-surface ${item.badgeBg} text-on-surface font-(family-name:--font-jakarta) font-extrabold text-xs uppercase tracking-wider shadow-[1.5px_1.5px_0px_#082016] w-fit mb-3`}
                >
                  {item.award}
                </span>
                <h3 className="font-(family-name:--font-jakarta) text-xl font-extrabold text-on-surface">
                  {item.team}
                </h3>
                <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant font-medium mt-1">
                  {item.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabel 1: Penetapan Pemenang Resmi Dewan Juri */}
      <div className="mt-14 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-1">
              Penetapan Pemenang Resmi Dewan Juri
            </h2>
            <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
              Daftar peraih gelar Juara 1, Juara 2, dan Juara 3 AgroIoT Innovation Challenge TELEPATI 8.0.
            </p>
          </div>
          <a
            href="/documents/berita-acara-agroit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-on-surface bg-[#ffdf9a] text-on-surface text-sm font-bold shadow-[2px_2px_0px_#082016] hover:shadow-[4px_4px_0px_#082016] transition-all w-fit"
          >
            <span>📄</span>
            <span>Lihat Berita Acara (PDF)</span>
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface min-w-[720px]">
            <thead>
              <tr className="bg-on-surface text-white">
                <th className="py-2.5 px-4 border border-on-surface w-14 text-center">Rank</th>
                <th className="py-2.5 px-4 border border-on-surface">Nama Tim</th>
                <th className="py-2.5 px-4 border border-on-surface">Perguruan Tinggi</th>
              </tr>
            </thead>
            <tbody>
              {iotWinners.map((row) => (
                <tr key={row.rank} className="border-b border-on-surface/20 odd:bg-primary/5">
                  <td className={`${cell} font-bold text-primary`}>
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-xs">
                      {row.rank}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface font-semibold text-on-surface">
                    {row.team}
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface text-on-surface-variant">
                    {row.university}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel 2: Rekap Nilai Babak Final */}
      <div className="mt-10 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <div className="mb-4">
          <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-1">
            Rekap Nilai Babak Final
          </h2>
          <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
            Rekapitulasi perolehan nilai seluruh tim peserta babak final dari dewan juri di Politeknik Negeri Bandung.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface min-w-[820px]">
            <thead>
              <tr className="bg-on-surface text-white">
                <th className="py-2.5 px-4 border border-on-surface w-14 text-center">Rank</th>
                <th className="py-2.5 px-4 border border-on-surface">Nama Tim</th>
                <th className="py-2.5 px-4 border border-on-surface">Perguruan Tinggi</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Kak Megi</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Kak Gia</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Kak Osa</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Rata-rata</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {iotFinals.map((row) => (
                <tr key={row.rank} className="border-b border-on-surface/20 odd:bg-primary/5">
                  <td className={`${cell} font-bold text-primary`}>
                    {row.rank}
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface font-semibold text-on-surface">
                    {row.team}
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface text-on-surface-variant">
                    {row.university}
                  </td>
                  <td className={cell}>{row.megi}</td>
                  <td className={cell}>{row.gia}</td>
                  <td className={cell}>{row.osa}</td>
                  <td className={cell}>{row.average.toFixed(2)}</td>
                  <td className={`${cell} font-bold`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="font-(family-name:--font-inter) text-on-surface-variant mt-8 max-w-4xl leading-relaxed">
        <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface">
          Dewan Juri AgroIoT Innovation Challenge:
        </h2>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>{judges.megi}</li>
          <li>{judges.gia}</li>
          <li>{judges.osa}</li>
        </ul>
        <p className="mt-4">
          Terima kasih atas waktu, ketelitian, serta dedikasi dalam memberikan penilaian dan masukan berharga bagi seluruh peserta TELEPATI 8.0.
        </p>
      </section>

      <Link
        href="/finalis"
        className="inline-block mt-8 font-(family-name:--font-inter) text-primary hover:underline font-semibold"
      >
        ← Kembali ke Daftar Pemenang
      </Link>
    </main>
  );
}
