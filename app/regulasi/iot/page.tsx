import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import StickyNav from "../../components/StickyNav";
import { agroIoT } from "@/app/utils/timelines";

export const metadata: Metadata = {
  title: "Regulasi IoT AgroBot Smart Farming",
  description:
    "Regulasi dan panduan lengkap lomba IoT AgroBot Smart Farming pada Telepati 8.0 — kompetisi perancangan dan pengembangan sistem IoT berbasis robotika untuk otomatisasi pertanian cerdas di Indonesia.",
  openGraph: {
    title: "Regulasi IoT AgroBot Smart Farming | Telepati IoT Competition POLBAN",
    description:
      "Panduan lengkap lomba IoT AgroBot Smart Farming pada Telepati 8.0 — kompetisi perancangan sistem IoT berbasis robotika untuk otomatisasi pertanian cerdas.",
    url: "https://polbantelepati.tech/regulasi/iot",
    type: "article",
  },
};


export default function RegulasiIoTPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="col-span-1 md:col-span-7 space-y-6">
            <div className="inline-block bg-secondary-container text-on-surface border-2 border-on-surface px-4 py-1 rounded-full text-[12px] leading-none tracking-wider font-bold uppercase shadow-[2px_2px_0px_#082016]">
              Kategori Lomba Inovasi Teknologi IoT Agriculture
            </div>
            <h1 className="font-(family-name:--font-jakarta) text-[40px] md:text-[64px] leading-[1.1] font-extrabold text-on-surface tracking-tight">
              Regulasi IoT AgroIoT
            </h1>
            <p className="text-justify font-(family-name:--font-inter) text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl">
              <strong>IoT AgriTech: Growing the Golden Future</strong> merupakan
              kompetisi Internet of Things (IoT) yang menantang inovator muda
              merancang dan memanifestasikan solusi teknologi fisik terintegrasi
              (hardware, sensor, dan otomatisasi cerdas) bagi sektor pertanian
              Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://canva.link/x93wn0v5uwp1qm0"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer neo-button-primary px-8 py-4 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Buka Guidebook Regulasi
              </Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5 h-100 rounded-xl border-2 border-on-surface overflow-hidden relative shadow-[4px_4px_0px_#082016]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/regulation/iotimage.jpeg"
              alt="Smart robotic farmer spraying fertilizer on vegetable green plants"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Sticky Nav */}
        <StickyNav />

        {/* Content Area */}
        <div className="col-span-1 md:col-span-9 space-y-12">
          {/* Ketentuan Pendaftaran & Peserta */}
          <ScrollReveal
            id="syarat"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Ketentuan Pendaftaran & Peserta
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">👥</span> Ketentuan Peserta &
                  Tim
                </h3>
                <ul className="space-y-3 font-(family-name:--font-inter) text-[15px] text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Setiap tim terdiri dari{" "}
                      <strong>3 - 5 mahasiswa aktif</strong> (1 Ketua & 2-4
                      Anggota) dari perguruan tinggi yang sama.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Setiap tim wajib memiliki{" "}
                      <strong>1 orang Dosen Pembimbing</strong> (Dosen
                      pembimbing tidak dihitung dalam jumlah anggota tim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Setiap tim hanya diperbolehkan mengajukan{" "}
                      <strong>1 proposal karya</strong>.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">📝</span> Ketentuan Pendaftaran
                  & Biaya
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <tbody>
                      <tr className="border-b border-on-surface/20">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 w-1/3 border-r border-on-surface/20">
                          Biaya Pendaftaran
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-semibold">
                            <span>
                              Batch 1 (Regular):{" "}
                              <span className="text-primary font-bold">
                                Rp 125.000,- / tim
                              </span>
                            </span>
                            <span>
                              Batch 2 (Extended):{" "}
                              <span className="text-primary font-bold">
                                Rp 175.000,- / tim
                              </span>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Jadwal Pendaftaran
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          <strong>Regular:</strong> 3 - 23 Agustus 2026 |{" "}
                          <strong>Extended:</strong> 24 - 30 Agustus 2026
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20 align-center">
                          Persyaratan Pendaftaran
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          <ol className="list-decimal pl-4 space-y-1.5">
                            <li>
                              Follow akun Instagram resmi TELEPATI{" "}
                              <strong>@telepatipolban</strong>.
                            </li>
                            <li>
                              Mengunggah Kartu Tanda Mahasiswa (KTM) yang masih
                              berlaku (JPG/PNG max 2 MB).
                            </li>
                            <li>
                              Mengunggah Twibbon resmi & membagikan di Instagram
                              pribadi (mention <strong>@telepatipolban</strong>{" "}
                              & tag minimal 3 teman).
                            </li>
                            <li>Mengunggah Bukti Pembayaran Registrasi.</li>
                            <li>
                              Bergabung dengan grup WhatsApp peserta via tautan
                              resmi setelah pembayaran dikonfirmasi oleh
                              panitia.
                            </li>
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tahapan Lomba */}
          <ScrollReveal
            id="tahapan"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary-container rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-on-surface"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Timeline Lomba
              </h2>
            </div>

            {/* Timeline Visual */}
            <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-6">
              Jadwal Pelaksanaan Lomba
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-on-surface/20 before:via-on-surface/20 before:to-transparent">
              {agroIoT.map((event, idx) => {
                const isActive = idx === 0;
                return (
                  <div
                    key={idx}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:flex-row group"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-on-surface shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${isActive ? "bg-primary text-white shadow-[3px_3px_0px_#082016]" : "bg-white text-on-surface"}`}
                    >
                      {idx + 1}
                    </div>
                    <div
                      className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg ${isActive ? "border-2 border-on-surface bg-white shadow-[3px_3px_0px_#082016]" : "border border-on-surface/20 bg-white/50 backdrop-blur-sm"}`}
                    >
                      <div
                        className={`font-(family-name:--font-inter) text-[12px] font-bold mb-1 ${isActive ? "text-primary" : "text-on-surface-variant"}`}
                      >
                        {event.date}
                      </div>
                      <h4 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-2">
                        {event.title}
                      </h4>
                      <p className="font-(family-name:--font-inter) text-[14px] text-on-surface-variant">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Ketentuan Karya & Proposal */}
          <ScrollReveal
            id="karya"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Ketentuan Karya & Proposal
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="text-primary">📄</span> Ketentuan Karya
                </h3>
                <ul className="space-y-3 font-(family-name:--font-inter) text-[15px] text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">A.</span>
                    <span>
                      Karya yang diajukan belum pernah diikutsertakan pada
                      perlombaan sejenis dan dibuktikan dengan surat pernyataan
                      yang ditandatangani oleh ketua tim dan dosen pembimbing
                      bermaterai Rp 10.000.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">B.</span>
                    <span>
                      Proposal disusun menggunakan Bahasa Indonesia yang baik
                      dan benar sesuai dengan <strong>EYD V</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">C.</span>
                    <span>
                      Tingkat plagiarisme proposal tidak melebihi{" "}
                      <strong>20%</strong>, dibuktikan dengan hasil pengecekan{" "}
                      <strong>Turnitin mandiri</strong> oleh peserta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">D.</span>
                    <span>
                      Proposal harus memuat: Deskripsi Karya, Tujuan & Manfaat
                      dalam Pertanian, Implementasi & Dampaknya, serta Rencana
                      Anggaran Biaya (RAB) Prototype.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">E.</span>
                    <span>
                      Proposal yang dikirimkan bersifat <strong>anonim</strong>,
                      tidak memasukkan identitas instansi, logo, atau nama
                      kampus peserta.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="text-primary">📑</span> Sistematika Proposal
                  (10 – 30 Halaman)
                </h3>
                <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant mb-4">
                  Proposal disusun secara terstruktur dengan susunan sebagai
                  berikut:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#e8fff0]/50 border border-on-surface/20 p-4 rounded-lg">
                    <ol className="list-decimal list-inside space-y-2 font-(family-name:--font-inter) text-[14px] text-on-surface-variant">
                      <li>Cover (menggunakan logo resmi panitia)</li>
                      <li>Halaman Pernyataan</li>
                      <li>Daftar Isi</li>
                      <li>BAB I Pendahuluan</li>
                      <li>BAB II Deskripsi Karya</li>
                    </ol>
                  </div>
                  <div className="bg-[#e8fff0]/50 border border-on-surface/20 p-4 rounded-lg">
                    <ol
                      start={6}
                      className="list-decimal list-inside space-y-2 font-(family-name:--font-inter) text-[14px] text-on-surface-variant"
                    >
                      <li>BAB III Perancangan Prototipe</li>
                      <li>BAB IV Rencana Anggaran Biaya (RAB)</li>
                      <li>BAB V Kesimpulan</li>
                      <li>Daftar Pustaka</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">📐</span> Format Penulisan
                  Proposal
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <thead>
                      <tr className="bg-on-surface text-white">
                        <th className="py-2.5 px-4 border border-on-surface w-1/3">
                          Komponen Format
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface">
                          Ketentuan Penulisan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Ukuran Kertas
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          A4
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Tipografi
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          Times New Roman, 12 pt (untuk isi teks)
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Margin
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          Kiri: 4 cm, Kanan: 3 cm, Atas: 3 cm, Bawah: 4 cm
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Spasi
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          1.5 Lines
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Cover & Template
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          Logo pada halaman cover wajib menggunakan logo resmi
                          panitia. Template dapat diunduh via website resmi.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Ketentuan Alat */}
          <ScrollReveal
            id="teknis"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-on-surface rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Ketentuan Alat & Prototipe (Hardware)
              </h2>
            </div>

            <ul className="space-y-4 font-(family-name:--font-inter) text-[16px] text-on-surface-variant">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_#082016]">
                <span className="text-primary mt-1 text-xl">🎯</span>
                <span>
                  Alat yang dibuat harus sesuai dengan yang dideskripsikan di
                  dalam proposal. Pengurangan poin akan berlaku jika terdapat
                  perbedaan pada komponen utama tanpa persetujuan panitia.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_#082016]">
                <span className="text-primary mt-1 text-xl">💰</span>
                <span>
                  Seluruh komponen harus dimasukkan ke RAB. Komponen milik
                  pribadi (tidak dibeli) tetap wajib mencantumkan harga pasaran
                  saat ini.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_#082016]">
                <span className="text-primary mt-1 text-xl">🔧</span>
                <span>
                  Perubahan komponen masih diperbolehkan apabila disebabkan oleh
                  kendala teknis (komponen rusak/terbakar saat merakit) asalkan
                  tidak mengubah fungsi maupun struktur utama alat.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#ffdf9a] p-4 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_#082016]">
                <span className="text-[#6d5200] mt-1 text-xl">⚠️</span>
                <span className="text-[#5a4300]">
                  <strong>Pelaporan Kendala Teknis:</strong> Setiap perubahan,
                  penambahan, atau penggantian komponen wajib disertai alasan
                  yang jelas dan dilaporkan kepada panitia maksimal H-3 Babak
                  Final untuk dievaluasi oleh juri.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_#082016]">
                <span className="text-primary mt-1 text-xl">🖼️</span>
                <span>
                  <strong>Publikasi Poster Alat:</strong> Tim yang lolos ke 10
                  besar finalis diwajibkan membuat poster mengenai alat yang
                  dikembangkan dan diunggah melalui tautan Google Form resmi
                  dari panitia.
                </span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Penalti, Diskualifikasi & Rubrik Penilaian */}
          <ScrollReveal
            id="kriteria"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary-container rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-on-surface"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Penilaian, Penalti & Diskualifikasi
              </h2>
            </div>

            <div className="space-y-8">
              {/* Rubrik Penilaian Proposal (Persentase Saja) */}
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">📑</span> Rubrik Penilaian
                  Proposal IoT (100%)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <thead>
                      <tr className="bg-on-surface text-white">
                        <th className="py-2.5 px-4 border border-on-surface w-1/3">
                          Kategori Penilaian
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface">
                          Indikator Utama
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface w-24 text-center">
                          Bobot
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={3}
                        >
                          Arsitektur Teknis (40%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Ketepatan Sensor & Aktuator
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          15%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Kelengkapan Skematik & Dataflow
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          15%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Efisiensi Daya & Kemudahan Alat
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>

                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={2}
                        >
                          Gagasan & Inovasi (25%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Urgensi Masalah Pertanian
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Orisinalitas & Kebaruan Ide
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          15%
                        </td>
                      </tr>

                      <tr className="border-b border-on-surface/20 bg-white">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={2}
                        >
                          Kelayakan & RAB (20%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Rasio Biaya (RAB) vs Inovasi
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Ketahanan Alat & Analisis SWOT
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>

                      <tr className="bg-[#e8fff0]/30">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={2}
                        >
                          Format & Legalitas (15%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Sistematika Penulisan Proposal
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>
                      <tr className="bg-[#e8fff0]/30">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Uji Bebas Plagiarisme (&le; 20%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          5%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rubrik Penilaian Final IoT (Persentase Saja) */}
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">🏆</span> Rubrik Penilaian
                  Babak Final IoT (100%)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <thead>
                      <tr className="bg-on-surface text-white">
                        <th className="py-2.5 px-4 border border-on-surface w-1/3">
                          Kategori Penilaian
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface">
                          Indikator Utama
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface w-24 text-center">
                          Bobot
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={3}
                        >
                          Kinerja Alat / Live Demo (45%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Fungsionalitas & Akurasi Live Demo
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          20%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Konektivitas & Dashboard IoT
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          15%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Kualitas Rangkaian & Packaging Outdoor
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>

                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={3}
                        >
                          Presentasi & Q&A (35%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Kejelasan Pitching & Alokasi Waktu
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Penguasaan Teknis saat Tanya Jawab
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          20%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Kejelasan & Keefektifan Power Point
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          5%
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td
                          className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface"
                          rowSpan={3}
                        >
                          Dampak & Kesiapan (20%)
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Manfaat Nyata untuk Sektor Pertanian
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          10%
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Potensi Pengembangan
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          5%
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2.5 px-4 border border-on-surface/20">
                          Skalabilitas Produksi & Harga Jual
                        </td>
                        <td className="py-2.5 px-4 border border-on-surface/20 font-bold text-primary text-center">
                          5%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tabel Pengurangan Poin */}
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  ‼️ Pelanggaran & Sanksi
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <thead>
                      <tr className="bg-on-surface text-white">
                        <th className="py-2.5 px-4 border border-on-surface w-12 text-center">
                          No
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface w-1/3">
                          Jenis Pelanggaran
                        </th>
                        <th className="py-2.5 px-4 border border-on-surface">
                          Pengurangan Poin / Sanksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                          1
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                          Keterlambatan Pengumpulan Proposal
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          1–15 menit (-3 poin)
                          <br />
                          16–60 menit (-5 poin)
                          <br />
                          &gt; 1 jam (
                          <span className="font-bold text-red-700">
                            Diskualifikasi
                          </span>
                          )
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                          2
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                          Ketidaksesuaian Alat dengan Proposal
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          -5 Poin per komponen (perbedaan komponen utama tanpa
                          persetujuan)
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-white">
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                          3
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                          Struktur Proposal Tidak Sesuai
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          -2 Poin per komponen proposal yang tidak sesuai
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                          4
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                          Keterlambatan Kehadiran Peserta pada Babak Final
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          5–15 menit (-3 poin)
                          <br />
                          16–30 menit (-7 poin)
                          <br />
                          &gt; 30 menit (-10 poin)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                          5
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                          Keterlambatan Pengumpulan File PPT
                        </td>
                        <td className="py-3 px-4 border border-on-surface/20">
                          1–15 menit (-3 poin)
                          <br />
                          16–60 menit (-5 poin)
                          <br />
                          &gt; 1 jam (-10 poin)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-error mb-3 flex items-center gap-2">
                  <span className="text-xl">⚠️</span> Ketentuan Diskualifikasi
                </h3>
                <ul className="space-y-3 font-(family-name:--font-inter) text-[16px] text-on-surface-variant bg-[#ffdad6] p-6 rounded-lg border-2 border-[#93000a] shadow-[3px_3px_0px_#93000a]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Tidak menyertakan surat pernyataan keaslian karya atau
                      tidak ditandatangani secara lengkap sesuai ketentuan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Mencantumkan identitas tim, logo, atau atribut lain yang
                      dapat mengungkap identitas peserta pada proposal/berkas
                      anonim.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Mencantumkan sumber fiktif, tidak relevan, atau hasil
                      halusinasi AI.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Melanggar peraturan perundang-undangan, mengandung unsur
                      SARA, ujaran kebencian, atau merendahkan peserta lain.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Terbukti melakukan pelanggaran berat seperti plagiarisme
                      (&gt;20%), pemalsuan data, merusak karya peserta lain.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Tidak hadir atau hadir lebih dari 30 menit pada Babak
                      Final tanpa konfirmasi resmi kepada panitia.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93000a] mt-1 font-bold">•</span>
                    <span className="text-[#93000a]">
                      Menunjukkan sikap/perilaku tidak sopan atau merendahkan
                      panitia TELEPATI maupun peserta lain.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Hadiah */}
          <ScrollReveal
            id="hadiah"
            className="bg-on-surface border-2 border-on-surface rounded-xl p-8 md:p-12 shadow-[4px_4px_0px_#006b30] relative overflow-hidden text-center"
          >
            <div className="relative z-10 text-center mb-10">
              <h2 className="font-(family-name:--font-jakarta) text-[40px] md:text-[56px] font-extrabold tracking-tight text-white mb-4">
                Penghargaan & Hadiah
              </h2>
              <p className="font-(family-name:--font-inter) text-[18px] text-white/80 max-w-xl mx-auto">
                Pemenang kompetisi IoT AgroIoT akan memperoleh penganugerahan
                sebagai berikut:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left font-(family-name:--font-inter)">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                <div className="text-secondary-container text-2xl font-black mb-2">
                  🥇 JUARA 1
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li className="flex items-center gap-2">🏆 Uang Tunai</li>
                  <li className="flex items-center gap-2">
                    📜 Sertifikat Penghargaan
                  </li>
                  <li className="flex items-center gap-2">
                    🥇 Plakat Kejuaraan
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                <div className="text-gray-300 text-2xl font-black mb-2">
                  🥈 JUARA 2
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li className="flex items-center gap-2">🏆 Uang Tunai</li>
                  <li className="flex items-center gap-2">
                    📜 Sertifikat Penghargaan
                  </li>
                  <li className="flex items-center gap-2">
                    🥈 Plakat Kejuaraan
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                <div className="text-amber-600 text-2xl font-black mb-2">
                  🥉 JUARA 3
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li className="flex items-center gap-2">🏆 Uang Tunai</li>
                  <li className="flex items-center gap-2">
                    📜 Sertifikat Penghargaan
                  </li>
                  <li className="flex items-center gap-2">
                    🥉 Plakat Kejuaraan
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center relative z-10">
              <Link
                href="/#pendaftaran"
                className="neo-button-primary px-10 py-4 w-full sm:w-auto inline-flex items-center justify-center"
              >
                Daftarkan Tim Anda Sekarang
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
