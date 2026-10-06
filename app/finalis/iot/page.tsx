import Link from "next/link";
import { iotFinals, judges } from "./data";

const cell = "py-2.5 px-4 border border-on-surface text-center tabular-nums";

export default function FinalisIotPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <p className="font-(family-name:--font-inter) text-primary text-sm font-semibold tracking-widest uppercase">
        TELEPATI 8.0 · AgroIoT Innovation Challenge
      </p>
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface mt-2">
        Skor Final Cabang IoT
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4 max-w-3xl">
        Hasil akhir penilaian cabang IoT, diurutkan berdasarkan total nilai juri.
      </p>

      <div className="mt-8 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
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
                  <td className={`${cell} font-bold text-primary`}>{row.rank}</td>
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
          Terima kasih kepada para juri:
        </h2>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>{judges.megi}</li>
          <li>{judges.gia}</li>
          <li>{judges.osa}</li>
        </ul>
        <p className="mt-4">
          Terima kasih atas waktu, ketelitian, serta dedikasi dalam memberikan
          penilaian dan masukan berharga bagi seluruh peserta TELEPATI 8.0.
        </p>
      </section>

      <Link
        href="/finalis"
        className="inline-block mt-8 font-(family-name:--font-inter) text-primary hover:underline"
      >
        ← Kembali ke Daftar Finalis
      </Link>
    </main>
  );
}
