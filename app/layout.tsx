import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import IntroManager from "./components/IntroManager";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://polbantelepati.tech"),
  title: {
    default: "Telepati IoT Competition POLBAN",
    template: "%s | Telepati IoT Competition POLBAN",
  },
  description:
    "Telepati (Telekomunikasi Pamerin AIoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Tahun ini, Telepati 8.0 hadir dengan tema Growing The Golden Future yang berfokus pada agriteknologi guna mendukung industri agrikultur di Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
  openGraph: {
    title: "Telepati IoT Competition POLBAN",
    description:
      "Telepati (Telekomunikasi Pamerin AIoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Tahun ini, Telepati 8.0 hadir dengan tema Growing The Golden Future yang berfokus pada agriteknologi guna mendukung industri agrikultur di Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
    url: "https://polbantelepati.tech",
    siteName: "Telepati IoT Competition POLBAN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Telepati 8.0 - Agritech: Growing The Golden Future",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Telepati IoT Competition POLBAN — Telepati 8.0 | Agritech: Growing The Golden Future",
    description:
      "Telepati (Telekomunikasi Pamerin AIoT) merupakan kompetisi tahunan tingkat nasional yang diadakan oleh Himpunan Mahasiswa Teknik Telekomunikasi Politeknik Negeri Bandung. Tahun ini, Telepati 8.0 hadir dengan tema Growing The Golden Future yang berfokus pada agriteknologi guna mendukung industri agrikultur di Indonesia. Bergabunglah dalam pergerakan nyata untuk menciptakan solusi cerdas, efisien, dan berkelanjutan melalui kompetisi teknologi berskala nasional.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hash) {
                document.documentElement.classList.add('skip-animation');
              }
            `,
          }}
        />
        <meta name="theme-color" content="#F0FDF4"></meta>
      </head>
      <body
        className={`${jakarta.variable} ${exo2.variable} ${inter.variable} antialiased bg-surface-variant`}
      >
        <IntroManager />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
