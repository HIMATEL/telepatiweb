export type IotFinal = {
  rank: number;
  team: string;
  work: string;
  university: string;
  megi: number;
  gia: number;
  osa: number;
  average: number;
  total: number;
};

// ponytail: judge display names live here only — swap once a title is confirmed.
export const judges = {
  megi: "Griffani Megiyanto, SST, M.T., Ph.D.",
  gia: "Gia Nuralamsyah",
  osa: "Sarosa Castrena Abadi, S.Pd., M.T.",
} as const;

export const iotFinals: IotFinal[] = [
  {
    rank: 1,
    team: "berat bersih 500 ML",
    work: "Sistem Penyimpanan Gabah Skala Besar Berbasis IoT dengan Monitoring Stok, Kadar Air, dan CO₂ serta Kendali Aerasi Adaptif",
    university: "Universitas Pendidikan Indonesia",
    megi: 86, gia: 84.5, osa: 89.75, average: 86.75, total: 260.25,
  },
  {
    rank: 2,
    team: "Kadang +1 Kadang -1",
    work: "Kadang +1 Kadang -1_Implementasi Edge-AI Berbasis Model Gated Recurrent Unit (GRU) untuk Kontrol Nutrisi Presisi Budidaya Tanaman Kale (Brassica oleracea) pada Sistem Hidroponik IoT_AgroIoT Innovation",
    university: "Telkom University",
    megi: 75.5, gia: 76.5, osa: 92.25, average: 81.42, total: 244.25,
  },
  {
    rank: 3,
    team: "Para pemula",
    work: "SoilGenius - Alat Portable Berbasis IoT dan Computer Vision untuk Monitoring Kualitas Tanah Berkala, Rekomendasi Tanam, dan Otomasi Aktuator Perawatan Berbasis Generative AI",
    university: "Politeknik Astra",
    megi: 67, gia: 81, osa: 87.25, average: 78.42, total: 235.25,
  },
  {
    rank: 4,
    team: "#FT-Juara.",
    work: "NEXT GEN AGRICULTURE: Integrasi Asisten AI dan Computer Vision pada Arsitektur IoT Otonom (FailSafe) untuk Pertanian Presisi",
    university: "Universitas Sangga Buana",
    megi: 63.5, gia: 85.5, osa: 84.75, average: 77.92, total: 233.75,
  },
  {
    rank: 5,
    team: "kupas kulit bawang",
    work: "SIAGA: Sistem Peringatan Dini Kekeringan dan Irigasi Presisi Berbasis Fusi Sensor IoT, Citra Satelit, dan Machine Learning untuk Mendukung Ketahanan Pangan di Lahan Pertanian Indonesia",
    university: "Politeknik Astra",
    megi: 67, gia: 76, osa: 84.5, average: 75.83, total: 227.5,
  },
  {
    rank: 6,
    team: "Sunib Bertani",
    work: "GARLIC-ADAPT AIoT Adaptive Microclimate System untuk Optimalisasi Budidaya Bawang Putih di Dataran Rendah",
    university: "Universitas Bina Nusantara",
    megi: 67.5, gia: 76.5, osa: 81.25, average: 75.08, total: 225.25,
  },
  {
    rank: 7,
    team: "Asterion",
    work: "ZETRA: Sistem Pengelolaan Pertanian Multi-Zona Adaptif Berbasis IoT untuk Otomatisasi Penyiraman dan Pemupukan Cair",
    university: "Universitas Negeri Malang",
    megi: 65.5, gia: 73, osa: 86.25, average: 74.92, total: 224.75,
  },
  {
    rank: 8,
    team: "Mejeuh Euy",
    work: "GALPADI: Sistem Budi Daya Padi Modular Berbasis IoT dengan Irigasi dan Fertigasi Adaptif untuk Mendukung Ketahanan Pangan",
    university: "Universitas Siliwangi",
    megi: 65, gia: 74.5, osa: 84, average: 74.5, total: 223.5,
  },
  {
    rank: 9,
    team: "SmithMelon",
    work: "SISTEM IRIGASI TETES DAN TANDON BERBASIS IOT DENGAN KENDALI LOKAL (EDGE CONTROL) UNTUK GREENHOUSE DATARAN TINGGI",
    university: "Universitas Negeri Malang",
    megi: 50.5, gia: 78.5, osa: 85.5, average: 71.5, total: 214.5,
  },
  {
    rank: 10,
    team: "NEXAGRO",
    work: "NEXUS DAM: NEXT-GENERATION ECO-INTEGRATED SMART DAM",
    university: "Politeknik Negeri Cilacap",
    megi: 60.5, gia: 70.5, osa: 80.25, average: 70.42, total: 211.25,
  },
  {
    rank: 11,
    team: "Menang Skuy",
    work: "SOILGUARD: SISTEM PERINGATAN DINI KONTAMINASI TANAH SECARA REAL-TIME MELALUI PENDEKATAN ALGORITMA RANDOM FOREST BERBASIS MIKROKONTROLER",
    university: "Politeknik Astra",
    megi: 55.5, gia: 71.5, osa: 78.75, average: 68.58, total: 205.75,
  },
  {
    rank: 12,
    team: "tanaman listrik cerdas",
    work: "Dari Hama Menjadi Hara: Sistem Perangkap Pengingat Cerdas Berbasis IoT dan Bioreaktor Konversi Pupuk kompos",
    university: "Universitas Negeri Malang",
    megi: 49.5, gia: 66, osa: 75.25, average: 63.58, total: 190.75,
  },
];
