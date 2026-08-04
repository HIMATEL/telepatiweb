"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apakah kompetisi ini berbayar?",
    answer:
      "Ya, kompetisi ini berbayar, detail pembayaran dan nomor rekening bisa dilihat pada Dashboard Peserta",
  },
  {
    question: "Adakah makan siang gratis selama acara?",
    answer:
      "Tentu saja! kami menyediakan makan siang gratis bagi semua peserta selama acara berlangsung. Kami ingin memastikan bahwa peserta tetap berenergi dan fokus selama acara.",
  },
  {
    question: "Siapa saja yang menilai proposal dan karya kami?",
    answer:
      "Proposal dan karya yang diajukan oleh peserta akan dinilai oleh Dosen POLBAN dan para praktisi Industri yang berkompeten di bidang IoT dan teknologi, serta memiliki pengalaman dalam industri terkait yang memiliki pengetahuan mendalam tentang inovasi teknologi dan penerapannya.",
  },
  {
    question: "Saya berada di luar Jawa Barat, apakah saya juga bisa ikut?",
    answer:
      "Tentu saja! Kompetisi ini terbuka untuk seluruh Mahasiswa/i perguruan tinggi di seluruh Indonesia. Peserta dari luar Jawa Barat dipersilahkan untuk berpartisipasi.",
  },
  {
    question: "Saya bukan Mahasiswa, apakah saya bisa ikut?",
    answer:
      "Tidak, partisipan lomba hanyalah dari kalangan mahasiswa saja, jika anda tertarik, anda bisa menjadi audiens dari Telepati 8.0",
  },
  {
    question: "Bagaimana cara bergabung dengan grup WhatsApp?",
    answer:
      "Silakan bergabung dengan grup WhatsApp melalui link yang tersedia pada Dashboard Peserta setelah melakukan pembayaran",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div
      id="faqs"
      className="bg-surface-container-low py-20 md:py-24 px-6 text-gray-900 relative"
    >
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-200 mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Cari jawaban yang sering ditanyakan pada event Telepati
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <ScrollReveal key={index}>
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  className={`cursor-pointer ${openIndex === index ? "bg-primary-container" : "bg-surface-container-high"} w-full px-6  py-5 text-left flex justify-between items-center focus:outline-none focus-visible:bg-gray-50`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`font-semibold text-lg pr-8 transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      openIndex === index
                        ? "bg-primary text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-5 px-6 pb-5 pt-0 text-gray-600 font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
