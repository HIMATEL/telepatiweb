import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden max-w-6xl mx-auto min-h-[90vh] flex flex-col items-center justify-center">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#006b301a_1px,transparent_1px),linear-gradient(to_bottom,#006b301a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Logo */}
      <div className="mb-10 w-75 h-75 md:w-112.5d:h-[450px] flex items-center justify-center rounded-full overflow-hidden hero-logo-reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/telepati8.svg"
          alt="Telepati 8.0 Logo"
          width={450}
          height={450}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="text-center max-w-4xl mx-auto hero-text-reveal">
        <h1 className="font-(family-name:--font-jakarta) text-[40px] leading-[1.2] md:text-[64px] md:leading-[1.1] font-extrabold tracking-tight text-on-surface mb-6">
          Agritech: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-tr from-[#4caf13] to-[#fdc425]">
            Growing The Golden Future
          </span>
        </h1>

        <p className="font-(family-name:--font-inter) text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mb-10">
          "Menanam inovasi, memanen keunggulan menuju Indonesia Emas"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#cabang-lomba"
            className="neo-button-primary w-full sm:w-auto"
          >
            Lihat kategori lomba
          </Link>
          <Link
            href="https://dashboard.polbantelepati.tech"
            className="neo-button-secondary w-full sm:w-auto"
          >
            Registrasi Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
