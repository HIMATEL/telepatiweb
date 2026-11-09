export type AiWinner = {
  rank: number;
  award: string;
  team: string;
  university: string;
  map50Juri: number;
  f1Juri: number;
  map50Klaim: number;
  f1Klaim: number;
  diffMap: number;
  diffF1: number;
  average: number;
  total: number;
  badgeBg: string;
};

export type AiAuditNote = {
  team: string;
  university: string;
  reason: string;
};

export const aiJudges = {
  martin: "Martin Clinton Tosima Manullang, S.T., M.T., Ph.D.",
  megi: "Griffani Megiyanto Rahmatullah, SST., M.T., Ph.D.",
  teguh: "Teguh Ginanjar, S.T., M.T.",
} as const;

export const aiWinners: AiWinner[] = [
  {
    rank: 1,
    award: "Juara 1",
    team: "Teknik Pertanian Unpad",
    university: "Universitas Padjadjaran",
    map50Juri: 69.95,
    f1Juri: 71.36,
    map50Klaim: 71.66,
    f1Klaim: 72.50,
    diffMap: 1.71,
    diffF1: 1.14,
    average: 70.66,
    total: 141.31,
    badgeBg: "bg-[#fef08a]",
  },
  {
    rank: 2,
    award: "Juara 2",
    team: "The Power Of Kepepet",
    university: "Universitas Sultan Ageng Tirtayasa",
    map50Juri: 68.60,
    f1Juri: 70.53,
    map50Klaim: 70.38,
    f1Klaim: 71.23,
    diffMap: 1.78,
    diffF1: 0.70,
    average: 69.57,
    total: 139.13,
    badgeBg: "bg-[#e2e8f0]",
  },
];

export const aiAuditNotes: AiAuditNote[] = [
  {
    team: "lupanamatimnya",
    university: "Institut Teknologi Sepuluh Nopember",
    reason: "Kesalahan pengisian data klaim mandiri pada sistem/form (peserta menginput nilai F1 Score sebesar 0,694).",
  },
  {
    team: "di bandung di ganesha",
    university: "UPN Veteran Jawa Timur",
    reason: "Selisih skor hasil audit verifikasi juri terhadap klaim mandiri peserta melebihi batas toleransi ±2% (Selisih mAP: 3,58% | Selisih F1: 3,17%), dan klaim peserta bersumber dari split validasi bukan split test.",
  },
  {
    team: "Dank je Wel",
    university: "Telkom University",
    reason: "Selisih skor hasil audit verifikasi juri terhadap klaim mandiri peserta melebihi batas toleransi ±2% (Selisih mAP: 8,79% | Selisih F1: 8,52%).",
  },
  {
    team: "Konsultan Pertanian",
    university: "Universitas Gadjah Mada",
    reason: "Model dilatih menggunakan 18 kelas mentah (tidak menerapkan pemetaan wajib ke 11 kelas canonical), sehingga tidak kompatibel dengan protokol evaluasi resmi kompetisi.",
  },
];
