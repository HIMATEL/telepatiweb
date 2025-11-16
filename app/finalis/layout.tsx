import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finalis Telepati 7.0 - Kompetisi IoT Politeknik Negeri Bandung',
  description: 'Daftar finalis Telepati 7.0, kompetisi IoT (Internet of Things) Politeknik Negeri Bandung. Selamat kepada tim-tim yang berhasil lolos ke babak final dengan inovasi dan kreativitas luar biasa.',
  keywords: 'Telepati 7.0, finalis, IoT competition, Polban, Politeknik Negeri Bandung, Internet of Things, kompetisi IoT, hackathon',
  openGraph: {
    title: 'Finalis Telepati 7.0 - Kompetisi IoT Polban',
    description: 'Daftar tim finalis yang berhasil lolos ke babak final Telepati 7.0',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Telepati Polban',
  },
};

export default function FinalisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
