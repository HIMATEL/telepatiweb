// Sumber data: "Timeline Kegiatan Lomba AI dan IoT.docx"
// (Drive id 1LpY9zzCAJHmXRmf6QJkWfeZ8EZxNANe8, tabel "Timeline Kegiatan AI"
//  dan "Timeline Acara AgroIoT"). Tabel ketiga di dokumen yang sama masih
//  memakai tanggal lama (presentasi 24 Oktober) sehingga tidak dipakai.
const agroIoT = [
  {
    date: "3 Agustus – 13 September 2026",
    title: "Pendaftaran Regular",
    desc: "Registrasi akun/tim gelombang pertama. Tutup pukul 23:59 WIB.",
  },
  {
    date: "13 September – 20 September 2026",
    title: "Pendaftaran Extended Registration",
    desc: "Pendaftaran tahap lanjutan bagi peserta yang belum registrasi awal. Tutup pukul 23:59 WIB.",
  },
  {
    date: "13 Agustus – 20 September 2026",
    title: "Pengumpulan Proposal",
    desc: "Batas pengunggahan berkas proposal karya inovasi IoT via website resmi TELEPATI. Tutup pukul 23:59 WIB.",
  },
  {
    date: "20 September – 04 Oktober 2026",
    title: "Penilaian & Penyaringan 10 Besar Finalis",
    desc: "Seleksi dan kurasi proposal oleh dewan juri untuk menentukan 10 finalis terbaik.",
  },
  {
    date: "05 Oktober 2026",
    title: "Pengumuman 10 Besar Finalis",
    desc: "Publikasi daftar 10 tim finalis yang melaju ke Babak Final, via Website & Instagram.",
  },
  {
    date: "07 Oktober 2026",
    title: "Technical Meeting Finalis",
    desc: "Pengarahan teknis pembuatan prototipe dan mekanisme Babak Final, pelaksanaan daring (online).",
  },
  {
    date: "07 November 2026",
    title: "Presentasi dan Demonstrasi Karya",
    desc: "Unjuk kerja alat (live demo) dan presentasi akhir di POLBAN (luring), dilanjutkan Awarding.",
  },
];

const agriDataEvents = [
  {
    date: "1 Agustus – 25 Oktober 2026",
    title: "Pendaftaran & Submission Karya",
    desc: "Registrasi tim, pembayaran, dan pengunggahan artefak ke repositori GitHub. Tutup pukul 23:59 WIB.",
  },
  {
    date: "26 Oktober – 01 November 2026",
    title: "Audit Run & Penilaian Juri",
    desc: "Dewan juri mengeksekusi ulang notebook pada environment resmi untuk menguji reproduksibilitas.",
  },
  {
    date: "2 November 2026",
    title: "Pengumuman Top 3 Finalis",
    desc: "Publikasi resmi 3 tim teratas terverifikasi melalui Website dan Instagram TELEPATI.",
  },
  {
    date: "05 November 2026",
    title: "Technical Meeting Finalis",
    desc: "Sesi pengarahan teknis pelaksanaan Babak Final secara daring (online).",
  },
  {
    date: "07 November 2026",
    title: "Presentasi Final & Awarding",
    desc: "Presentasi akhir dan demonstrasi model AI di POLBAN (luring), dilanjutkan Awarding Ceremony.",
  },
];

export { agroIoT, agriDataEvents };
