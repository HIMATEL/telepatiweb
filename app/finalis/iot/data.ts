export type IotFinal = {
  rank: number;
  team: string;
  university: string;
  megi: number;
  gia: number;
  osa: number;
  average: number;
  total: number;
};

export type IotWinner = {
  rank: number;
  award: string;
  team: string;
  university: string;
  badgeBg: string;
  image: string;
  podiumOrder: number; // 1 for 1st (center/highest), 2 for 2nd (left), 3 for 3rd (right)
  podiumHeight: string;
};

export type IotSpecialAward = {
  award: string;
  team: string;
  university: string;
  image: string;
  badgeBg: string;
};

export const iotWinners: IotWinner[] = [
  {
    rank: 1,
    award: "Juara 1",
    team: "Para pemula",
    university: "Politeknik Astra",
    badgeBg: "bg-[#fef08a]",
    image: "/images/winners/juara-1-iot.jpg",
    podiumOrder: 1,
    podiumHeight: "md:h-[440px]",
  },
  {
    rank: 2,
    award: "Juara 2",
    team: "Kadang +1 Kadang -1",
    university: "Telkom University",
    badgeBg: "bg-[#e2e8f0]",
    image: "/images/winners/juara-2-iot.jpg",
    podiumOrder: 2,
    podiumHeight: "md:h-[390px]",
  },
  {
    rank: 3,
    award: "Juara 3",
    team: "berat bersih 500 ML",
    university: "Universitas Pendidikan Indonesia",
    badgeBg: "bg-[#fed7aa]",
    image: "/images/winners/juara-3-iot.jpg",
    podiumOrder: 3,
    podiumHeight: "md:h-[360px]",
  },
];

export const iotSpecialAwards: IotSpecialAward[] = [
  {
    award: "Favorite Poster",
    team: "Mejeuh Euy",
    university: "Universitas Siliwangi",
    image: "/images/winners/favorite-poster.jpg",
    badgeBg: "bg-[#bbf7d0]",
  },
  {
    award: "Best Presentation",
    team: "berat bersih 500 ML",
    university: "Universitas Pendidikan Indonesia",
    image: "/images/winners/best-presentation.jpg",
    badgeBg: "bg-[#fed7aa]",
  },
];

// ponytail: judge display names live here only — swap once a title is confirmed.
export const judges = {
  megi: "Griffani Megiyanto Rahmatullah, SST, M.T., Ph.D.",
  gia: "Gia Nuralamsyah",
  osa: "Sarosa Castrena Abadi, S.Pd., M.T.",
} as const;

export const iotFinals: IotFinal[] = [
  {
    rank: 1,
    team: "berat bersih 500 ML",
    university: "Universitas Pendidikan Indonesia",
    megi: 86, gia: 84.5, osa: 89.75, average: 86.75, total: 260.25,
  },
  {
    rank: 2,
    team: "Kadang +1 Kadang -1",
    university: "Telkom University",
    megi: 75.5, gia: 76.5, osa: 92.25, average: 81.42, total: 244.25,
  },
  {
    rank: 3,
    team: "Para pemula",
    university: "Politeknik Astra",
    megi: 67, gia: 81, osa: 87.25, average: 78.42, total: 235.25,
  },
  {
    rank: 4,
    team: "#FT-Juara.",
    university: "Universitas Sangga Buana",
    megi: 63.5, gia: 85.5, osa: 84.75, average: 77.92, total: 233.75,
  },
  {
    rank: 5,
    team: "kupas kulit bawang",
    university: "Politeknik Astra",
    megi: 67, gia: 76, osa: 84.5, average: 75.83, total: 227.5,
  },
  {
    rank: 6,
    team: "Sunib Bertani",
    university: "Universitas Bina Nusantara",
    megi: 67.5, gia: 76.5, osa: 81.25, average: 75.08, total: 225.25,
  },
  {
    rank: 7,
    team: "Asterion",
    university: "Universitas Negeri Malang",
    megi: 65.5, gia: 73, osa: 86.25, average: 74.92, total: 224.75,
  },
  {
    rank: 8,
    team: "Mejeuh Euy",
    university: "Universitas Siliwangi",
    megi: 65, gia: 74.5, osa: 84, average: 74.5, total: 223.5,
  },
  {
    rank: 9,
    team: "SmithMelon",
    university: "Universitas Negeri Malang",
    megi: 50.5, gia: 78.5, osa: 85.5, average: 71.5, total: 214.5,
  },
  {
    rank: 10,
    team: "NEXAGRO",
    university: "Politeknik Negeri Cilacap",
    megi: 60.5, gia: 70.5, osa: 80.25, average: 70.42, total: 211.25,
  },
  {
    rank: 11,
    team: "Menang Skuy",
    university: "Politeknik Astra",
    megi: 55.5, gia: 71.5, osa: 78.75, average: 68.58, total: 205.75,
  },
  {
    rank: 12,
    team: "tanaman listrik cerdas",
    university: "Universitas Negeri Malang",
    megi: 49.5, gia: 66, osa: 75.25, average: 63.58, total: 190.75,
  },
];
