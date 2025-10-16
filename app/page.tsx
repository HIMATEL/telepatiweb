import type { Metadata } from "next";
import Header from "./sections/header";
import Explanation from "./sections/explanation";
import HomeSection from "./sections/home";
import Recap from "./sections/recap";
import TermsAndConditions from "./sections/terms_n_condition";
import Timeline from "./sections/timeline";
import GetReady from "./sections/get_ready";
import FaqSection from "./sections/faq";
import SponsorsNMedparts from "./sections/sponsors_n_medparts";

// Page-specific SEO metadata
export const metadata: Metadata = {
  title: "Telepati 7.0 - Connected Green Future with IoT",
  description: "Telepati merupakan program kerja tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Dalam 6 tahun terakhir, kami telah membangun reputasi sebagai penyelenggara program-program yang berkontribusi dalam pengembangan dan pemahaman teknologi di kalangan siswa SMA/SMK dan mahasiswa, khususnya di bidang Telekomunikasi.",
  openGraph: {
    title: "Telepati 7.0 - Connected Green Future with IoT",
    description: "Telepati merupakan program kerja tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Dalam 6 tahun terakhir, kami telah membangun reputasi sebagai penyelenggara program-program yang berkontribusi dalam pengembangan dan pemahaman teknologi di kalangan siswa SMA/SMK dan mahasiswa, khususnya di bidang Telekomunikasi.",
    url: "https://polbantelepati.tech",
    type: "website",
  },
  alternates: {
    canonical: "https://polbantelepati.tech",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Telepati 7.0 - Connected Green Future with IoT",
    "description": "Telepati merupakan program kerja tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Dalam 6 tahun terakhir, kami telah membangun reputasi sebagai penyelenggara program-program yang berkontribusi dalam pengembangan dan pemahaman teknologi di kalangan siswa SMA/SMK dan mahasiswa, khususnya di bidang Telekomunikasi.",
    "startDate": "2024-07-01",
    "endDate": "2024-07-06",
    "location": {
      "@type": "Place",
      "name": "Politeknik Negeri Bandung",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Gegerkalong Hilir",
        "addressLocality": "Bandung",
        "addressRegion": "West Java",
        "postalCode": "40559",
        "addressCountry": "Indonesia"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung",
      "url": "https://instagram.com/himatelpolban"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Header */}
      <Header />

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="border-2 font-sans pt-20">
        <section id="home">
          <HomeSection/>
        </section>
        <section id="explanation">
          <Explanation/>
        </section>
        <Recap/>
        <section id="timeline">
          <Timeline/>
        </section>
        <section id="terms">
          <TermsAndConditions/>
        </section>
        <section id="faq">
          <FaqSection/>
        </section>
        <section id="get-ready">
          <GetReady/>
        </section>
        <SponsorsNMedparts/>
      </main>
    </>
  );
}
