import Link from "next/link";
import { iotFinals, iotWinners, judges } from "./data";

const cell = "py-2.5 px-4 border border-on-surface text-center tabular-nums";

export default function FinalisIotPage() {
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

      {/* Podium Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {iotWinners.map((winner) => (
          <div
            key={winner.award}
            className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016] flex flex-col justify-between"
          >
            <div>
              <div
                className={`inline-block px-3 py-1 rounded-full border border-on-surface ${winner.badgeBg} text-on-surface font-(family-name:--font-jakarta) font-bold text-xs uppercase tracking-wider mb-4 shadow-[1.5px_1.5px_0px_#082016]`}
              >
                {winner.award}
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-extrabold text-on-surface">
                {winner.team}
              </h2>
              <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant mt-1">
                {winner.university}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-on-surface/10 flex items-center justify-between text-xs font-(family-name:--font-inter)">
              <span className="text-on-surface-variant">Total Nilai Juri:</span>
              <span className="font-bold text-primary text-sm tabular-nums">
                {winner.total}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabel Penetapan Pemenang Resmi (seperti di page AI) */}
      <div className="mt-12 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <div className="mb-4">
          <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-1">
            Penetapan Pemenang Resmi Dewan Juri
          </h2>
          <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
            Daftar peraih gelar Juara 1, Juara 2, dan Juara 3 AgroIoT Innovation Challenge TELEPATI 8.0.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface min-w-[720px]">
            <thead>
              <tr className="bg-on-surface text-white">
                <th className="py-2.5 px-4 border border-on-surface w-14 text-center">Rank</th>
                <th className="py-2.5 px-4 border border-on-surface">Nama Tim</th>
                <th className="py-2.5 px-4 border border-on-surface">Perguruan Tinggi</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Rata-rata</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Total Nilai</th>
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
                  <td className={cell}>{row.average.toFixed(2)}</td>
                  <td className={`${cell} font-bold text-primary`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Rekap Skor Top 10 / Seluruh Finalis Presentasi */}
      <div className="mt-10 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <div className="mb-4">
          <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-1">
            Rekap Nilai Babak Final (Top 10 Besar)
          </h2>
          <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
            Peringkat 1 sampai 10 adalah finalis resmi yang hadir mendemonstrasikan karyanya secara langsung di hadapan dewan juri di Politeknik Negeri Bandung.
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
