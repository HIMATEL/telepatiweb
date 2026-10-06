import Link from "next/link";

export default function FinalisAiPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center">
      <h1 className="font-(family-name:--font-jakarta) text-[40px] font-extrabold text-on-surface">
        Yahh masih kosong nih, coba lagi nanti ya
      </h1>
      <p className="font-(family-name:--font-inter) text-on-surface-variant mt-4">
        Hasil akhir cabang AI belum tersedia.
      </p>
      <Link
        href="/finalis"
        className="neo-button-primary px-6 py-3 w-full sm:w-auto text-center self-start mt-8"
      >
        Kembali ke finalis
      </Link>
    </main>
  );
}
