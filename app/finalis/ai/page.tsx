import Link from "next/link";
import { aiWinners, aiAuditNotes, aiJudges } from "./data";

const cell = "py-2.5 px-4 border border-on-surface text-center tabular-nums";

export default function FinalisAiPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <p className="font-(family-name:--font-inter) text-primary text-sm font-semibold tracking-widest uppercase">
        TELEPATI 8.0 · AgriData Intelligence Race
      </p>
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface mt-2">
        Pengumuman Pemenang Cabang AI
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4 max-w-3xl">
        Berdasarkan Berita Acara Penetapan Pemenang resmi dewan juri, hanya tim dengan model yang lolos audit verifikasi metrik (selisih skor juri terhadap klaim mandiri &le; 2%) yang berhak ditetapkan sebagai pemenang.
      </p>

      {/* Podium Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl">
        {aiWinners.map((winner) => (
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
              <span className="text-on-surface-variant">Skor Total Juri:</span>
              <span className="font-bold text-primary text-sm tabular-nums">
                {winner.total.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Winners Table */}
      <div className="mt-12 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-1">
              Hasil Verifikasi &amp; Skor Akhir Dewan Juri
            </h2>
            <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
              Evaluasi resmi model deteksi objek pada data uji (test split) dengan 11 kelas canonical.
            </p>
          </div>
          <a
            href="/documents/berita-acara-agridata.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-on-surface bg-[#ffdf9a] text-on-surface text-sm font-bold shadow-[2px_2px_0px_#082016] hover:shadow-[4px_4px_0px_#082016] transition-all w-fit"
          >
            <span>📄</span>
            <span>Lihat Berita Acara (PDF)</span>
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface min-w-[820px]">
            <thead>
              <tr className="bg-on-surface text-white">
                <th className="py-2.5 px-4 border border-on-surface w-14 text-center">Rank</th>
                <th className="py-2.5 px-4 border border-on-surface">Nama Tim</th>
                <th className="py-2.5 px-4 border border-on-surface">Perguruan Tinggi</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">mAP@50 (Juri)</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">F1-Score (Juri)</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Rata-rata</th>
                <th className="py-2.5 px-4 border border-on-surface text-center">Total Skor</th>
              </tr>
            </thead>
            <tbody>
              {aiWinners.map((row) => (
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
                  <td className={cell}>{row.map50Juri.toFixed(2)}%</td>
                  <td className={cell}>{row.f1Juri.toFixed(2)}%</td>
                  <td className={cell}>{row.average.toFixed(2)}%</td>
                  <td className={`${cell} font-bold text-primary`}>{row.total.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Notes Table for Disqualified Submissions */}
      <div className="mt-10 bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
        <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface mb-2">
          Catatan Hasil Audit Verifikasi Dewan Juri
        </h2>
        <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant mb-6">
          Sesuai ketentuan regulasi resmi kompetisi, toleransi perbedaan metrik klaim mandiri terhadap hasil uji juri adalah maksimal &plusmn;0,02 (&le; 2%).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface min-w-[720px]">
            <thead>
              <tr className="bg-on-surface text-white">
                <th className="py-2.5 px-4 border border-on-surface w-14 text-center">No</th>
                <th className="py-2.5 px-4 border border-on-surface w-48">Nama Tim</th>
                <th className="py-2.5 px-4 border border-on-surface w-60">Perguruan Tinggi</th>
                <th className="py-2.5 px-4 border border-on-surface">Keterangan Audit</th>
              </tr>
            </thead>
            <tbody>
              {aiAuditNotes.map((note, idx) => (
                <tr key={note.team} className="border-b border-on-surface/20 odd:bg-primary/5">
                  <td className={`${cell} font-medium text-on-surface-variant`}>{idx + 1}</td>
                  <td className="py-2.5 px-4 border border-on-surface font-semibold text-on-surface">
                    {note.team}
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface text-on-surface-variant">
                    {note.university}
                  </td>
                  <td className="py-2.5 px-4 border border-on-surface text-xs text-on-surface-variant leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-300 font-bold mr-1.5">
                      Gugur
                    </span>
                    {note.reason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="font-(family-name:--font-inter) text-on-surface-variant mt-8 max-w-4xl leading-relaxed">
        <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-on-surface">
          Dewan Juri AgriData Intelligence Race:
        </h2>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>{aiJudges.martin}</li>
          <li>{aiJudges.megi}</li>
          <li>{aiJudges.teguh}</li>
        </ul>
        <p className="mt-4">
          Keputusan Dewan Juri bersifat mutlak, final, dan tidak dapat diganggu gugat. Terima kasih kepada seluruh peserta atas dedikasi dan partisipasinya dalam memajukan inovasi kecerdasan buatan untuk agrikultur Indonesia.
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
