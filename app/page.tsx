import type { Metadata } from "next";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Competitions from "./sections/Competitions";
import Timeline from "./sections/Timeline";
import Recap from "./sections/Recap";
import Sponsors from "./sections/Sponsors";
import HeroComingSoon from "./sections/HeroComingSoon";
import Faq from "./sections/Faq";

export const metadata: Metadata = {
  title: "Telepati IoT Competition POLBAN",
  description:
    "Telepati (Telekomunikasi Pamerin AIoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Tahun ini, Telepati 8.0 hadir dengan tema Growing The Golden Future yang berfokus pada agriteknologi guna mendukung industri agrikultur di Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Telepati IoT Competition POLBAN",
    description:
      "Telepati (Telekomunikasi Paerin AIoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Tahun ini, Telepati 8.0 hadir dengan tema Growing The Golden Future yang berfokus pada agriteknologi guna mendukung industri agrikultur di Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
    startDate: "2026-08-01",
    endDate: "2026-10-24",
    location: {
      "@type": "Place",
      name: "Politeknik Negeri Bandung",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Gegerkalong Hilir",
        addressLocality: "Bandung",
        addressRegion: "West Java",
        postalCode: "40559",
        addressCountry: "Indonesia",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung",
      url: "https://instagram.com/himatelpolban",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="font-(family-name:--font-jakarta)">
        <section id="home">
          {/* <Hero /> */}
          <Hero />
        </section>
        <section id="tentang-wrapper">
          <About />
        </section>
        <section id="cabang-lomba-wrapper">
          <Competitions />
        </section>
        <section id="timeline-wrapper">
          <Timeline />
        </section>
        <Recap />
        <section id="sponsor-wrapper">
          <Sponsors />
        </section>
        <section id="faqs">
          <Faq />
        </section>
      </main>
    </>
  );
}
