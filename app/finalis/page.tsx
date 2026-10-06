import Link from "next/link";

export default function FinalisPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface">
        Daftar Finalis
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4">
        Hasil akhir penilaian dewan juri TELEPATI 8.0 per cabang lomba.
      </p>

      <Link
        href="/finalis/iot"
        className="mt-8 inline-block bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016] hover:-translate-y-0.5 transition-transform"
      >
        <span className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface block">
          AgroIoT Innovation Challenge
        </span>
        <span className="font-(family-name:--font-inter) text-on-surface-variant text-sm">
          Lihat skor final 12 karya cabang IoT →
        </span>
      </Link>
    </main>
  );
}
