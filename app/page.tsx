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
  title: "Home - Telepati 7.0 IoT Hackathon",
  description: "Welcome to Telepati 7.0 - Indonesia's premier IoT hackathon for environmental sustainability. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  openGraph: {
    title: "Telepati 7.0 - Connected Green Future with IoT",
    description: "Join the largest IoT hackathon in Indonesia focusing on environmental solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://telepati.polban.ac.id",
    type: "website",
  },
  alternates: {
    canonical: "https://telepati.polban.ac.id",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Telepati 7.0 - Connected Green Future with IoT",
    "description": "Indonesia's premier IoT hackathon focused on environmental sustainability and green technology solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
