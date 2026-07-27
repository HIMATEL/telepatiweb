import Link from "next/link";

export default function HeroComingSoon() {
return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden max-w-[1152px] mx-auto min-h-[90vh] flex flex-col items-center justify-center">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#006b301a_1px,transparent_1px),linear-gradient(to_bottom,#006b301a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Logo */}
      <div className="hero-logo-reveal mb-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center rounded-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          fetchPriority="high"
          src="/telepati8.svg"
          alt="Telepati 8.0 Logo"
          width={450}
          height={450}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="text-center max-w-4xl mx-auto hero-text-reveal">

        <h1 className="font-(family-name:--font-jakarta) text-[40px] leading-[1.2] md:text-[64px] md:leading-[1.1] font-extrabold tracking-tight text-[#082016] mb-6">
          <span className="text-3xl md:text-5xl">Coming soon!</span>
        </h1>

        <p className="font-(family-name:--font-inter) text-base md:text-[18px] leading-[1.6] text-[#3e4a3e] max-w-2xl mx-auto mb-10">
          "Menanam inovasi, memanen keunggulan menuju Indonesia Emas 2045"
        </p>

        <Link href="https://canva.link/proposal-sponsor-telepati-8-0" className="neo-button-primary w-full sm:w-auto">
            Jadilah Sponsor kami!
        </Link>
      </div>
    </div>
  );
}