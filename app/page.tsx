import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Competitions from "./sections/Competitions";
import Timeline from "./sections/Timeline";
import Recap from "./sections/Recap";
import Sponsors from "./sections/Sponsors";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Telepati 8.0 — Inovasi Teknologi untuk Masa Depan Agrikultur",
  description:
    "Katalisator transformasi digital agrikultur Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Telepati 8.0 — Inovasi Teknologi untuk Masa Depan Agrikultur",
    description:
      "Telepati (Technology and Electronic Competition) adalah ajang bergengsi yang mewadahi inovator muda Indonesia. Tahun ini, Telepati 8.0 hadir dengan tema Smart Agriculture.",
    startDate: "2024-09-01",
    endDate: "2024-11-15",
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
      </main>
    </>
  );
}
