import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telepati 7.0 - Connected Green Future with IoT",
  description: "Telepati merupakan program kerja tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Dalam 6 tahun terakhir, kami telah membangun reputasi sebagai penyelenggara program-program yang berkontribusi dalam pengembangan dan pemahaman teknologi di kalangan siswa SMA/SMK dan mahasiswa, khususnya di bidang Telekomunikasi.",
  keywords: ["Telepati 7.0", "Politeknik Negeri Bandung", "Polban", "Himatel", "Himpunan Mahasiswa Teknik Telekomunikasi", "HMJE", "Himpunan Mahasiswa Jurusan Elektro", "IoT", "hackathon", "sustainability", "green technology", "environmental innovation", "Indonesia", "competition", "smart city", "internet of things"],
  authors: [{ name: "Himatel Polban" }],
  creator: "Politeknik Negeri Bandung",
  publisher: "Politeknik Negeri Bandung",
  category: "Technology",
  classification: "Educational Event",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://polbantelepati.tech",
    title: "Telepati 7.0 - Connected Green Future with IoT",
    description: "Telepati merupakan program kerja tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Dalam 6 tahun terakhir, kami telah membangun reputasi sebagai penyelenggara program-program yang berkontribusi dalam pengembangan dan pemahaman teknologi di kalangan siswa SMA/SMK dan mahasiswa, khususnya di bidang Telekomunikasi.",
    siteName: "Telepati 7.0",
  },
  alternates: {
    canonical: "https://polbantelepati.tech",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:mx-auto sm:mx-auto lg:mx-auto bg-[#010406]`}
      >
        {children}
        <footer className="h-30 md:h-20 lg:h-20 md:flex block items-center px-5 py-4">
        <Image
          src={"/himatel_element.png"}
          alt="Himatel Polban Logo"
          width={200}
          height={80}
        />
        <p className="ml-4 mt-4 md:mt-0 text-sm md:text-md lg:text-lg opacity-45 font-semibold">© Departemen IPTEK Himpunan Mahasiswa Teknik Telekomunikasi Kabinet Arunika Cipta</p>
      </footer>
      </body>
    </html>
  );
}
