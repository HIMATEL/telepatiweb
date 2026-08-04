import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../../app/components/ScrollReveal";
import StickyNav from "../../../app/components/StickyNav";
import { agriDataEvents } from "@/app/utils/timelines";

export const metadata: Metadata = {
  title: "Regulasi AI AgriData Intelligence Race",
  description:
    "Regulasi dan panduan lengkap lomba AI AgriData Intelligence Race pada Telepati 8.0 — kompetisi berbasis kecerdasan buatan (Computer Vision & Object Detection) yang menguji analisis ilmiah dan problem-solving peserta terhadap studi kasus nyata di industri agrikultur.",
  openGraph: {
    title: "Regulasi AI AgriData Intelligence Race | Telepati IoT Competition POLBAN",
    description:
      "Panduan lengkap lomba AI AgriData Intelligence Race pada Telepati 8.0 — kompetisi berbasis kecerdasan buatan yang menguji analisis ilmiah dan problem-solving di industri agrikultur.",
    url: "https://polbantelepati.tech/regulasi/ai",
    type: "article",
  },
};

export default function RegulasiAIPage() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="col-span-1 md:col-span-7 space-y-6">
            <div className="inline-block bg-secondary-container text-on-surface border-2 border-on-surface px-4 py-1 rounded-full text-[12px] leading-none tracking-wider font-bold uppercase shadow-[2px_2px_0px_#082016]">
              Kategori Lomba AI AgriData Intelligence Race
            </div>
            <h1 className="font-(family-name:--font-jakarta) text-[40px] md:text-[64px] leading-[1.1] font-extrabold text-on-surface tracking-tight">
              Regulasi AI AgriData Intelligence Race
            </h1>
            <p className="text-justify font-(family-name:--font-inter) text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl">
              <strong>AI AgriData Intelligence Race</strong> merupakan kompetisi
              berbasis kecerdasan buatan (Computer Vision & Object Detection)
              yang menguji analisis ilmiah dan problem-solving peserta terhadap
              studi kasus nyata di industri agrikultur.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://canva.link/guidebook-telepati-8-agridata"
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
              src="/images/regulation/ai_image.jpg"
              alt="AI Data Analysis"
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
          {/* Studi Kasus (Story) */}
          <ScrollReveal
            id="story"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <span className="text-2xl">📖</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-primary">
                  Studi Kasus
                </span>
                <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                  Smart Agriculture via Computer Vision
                </h2>
              </div>
            </div>

            <div className="bg-white border-2 border-on-surface rounded-lg p-6 md:p-8 shadow-[3px_3px_0px_#082016] space-y-4 font-(family-name:--font-inter) text-[15px] text-on-surface-variant leading-relaxed text-justify">
              <p>
                <strong>Arif</strong> merupakan seorang petani muda yang
                mengelola lahan pertanian milik keluarganya. Setiap musim tanam,
                ia harus memantau ribuan tanaman yang tersebar di berbagai petak
                sawah untuk memastikan pertumbuhannya tetap optimal. Aktivitas
                tersebut masih dilakukan secara manual dengan mengamati kondisi
                tanaman satu per satu. Selain membutuhkan waktu dan tenaga yang
                tidak sedikit, proses ini juga sangat bergantung pada pengalaman
                sehingga potensi kesalahan dalam pengamatan maupun keterlambatan
                penanganan masih sering terjadi.
              </p>
              <p>
                Menyadari tantangan tersebut, Arif ingin menerapkan konsep{" "}
                <strong>Smart Agriculture</strong> dengan memanfaatkan teknologi{" "}
                <strong>Computer Vision</strong>. Ia membayangkan sebuah sistem
                yang mampu mengamati lahan pertanian melalui kamera yang
                dipasang pada drone atau perangkat pemantau lainnya. Sistem
                tersebut diharapkan dapat mengenali berbagai objek yang terdapat
                pada area pertanian secara otomatis, sehingga proses pemantauan
                tidak lagi bergantung sepenuhnya pada pengamatan manusia.
              </p>
              <p>
                Namun, sistem tersebut belum dapat berfungsi sebagaimana
                mestinya. Meskipun kamera mampu menangkap ribuan citra dari
                lahan pertanian, seluruh data tersebut tidak memiliki arti tanpa
                adanya sebuah model{" "}
                <strong>Artificial Intelligence (AI)</strong> yang mampu
                memahami apa yang dilihatnya. Agar sistem dapat memberikan
                informasi yang akurat dan bermanfaat, diperlukan model AI
                berbasis <strong>Computer Vision</strong> yang memiliki
                kemampuan <strong>Object Detection</strong> dengan tingkat
                akurasi, presisi, dan keandalan yang tinggi.
              </p>
              <div className="bg-[#e8fff0] border border-on-surface/20 p-4 rounded-md text-sm font-semibold text-primary">
                💡 <strong>Tantangan Peserta:</strong> Peserta ditantang untuk
                mengembangkan model AI berbasis{" "}
                <strong>Object Detection</strong> menggunakan dataset resmi
                panitia. Model yang dihasilkan diharapkan memiliki performa
                terbaik dan siap diimplementasikan sebagai komponen utama sistem
                Smart Agriculture yang cerdas, efisien, dan berkelanjutan.
              </div>
            </div>
          </ScrollReveal>

          {/* Syarat & Ketentuan Umum */}
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
                Syarat & Ketentuan Umum
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
                      Setiap tim terdiri atas{" "}
                      <strong>2 - 3 orang mahasiswa aktif</strong> (D3/D4/S1)
                      yang berasal dari{" "}
                      <strong>perguruan tinggi yang sama</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Setiap tim wajib memiliki{" "}
                      <strong>1 (satu) orang Ketua Tim</strong> dan{" "}
                      <strong>1 (satu) orang Dosen Pembimbing</strong> (Dosen
                      pembimbing tidak dihitung sebagai anggota tim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Setiap tim hanya diperbolehkan mengirim{" "}
                      <strong>1 model AI</strong> sebagai karya yang dilombakan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      Seluruh anggota tim wajib mencantumkan username atau
                      tautan akun <strong>GitHub</strong> yang akan digunakan
                      selama proses pengembangan dan pengumpulan karya.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="text-primary">📝</span> Ketentuan Pendaftaran
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                    <tbody>
                      <tr className="border-b border-on-surface/20">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 w-1/3 border-r border-on-surface/20">
                          Biaya Pendaftaran
                        </td>
                        <td className="py-3 px-4 font-bold text-primary text-base">
                          Rp 135.000,- / tim
                        </td>
                      </tr>
                      <tr className="border-b border-on-surface/20">
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 border-r border-on-surface/20">
                          Periode Pendaftaran
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          1 Agustus – 26 September 2026 (Tutup pukul 23:59 WIB
                          via Website Resmi TELEPATI)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-on-surface bg-primary/10 align-center border-r border-on-surface/20">
                          Persyaratan Pendaftaran
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          <ol className="list-decimal pl-4 space-y-1.5">
                            <li>
                              Follow akun Instagram resmi TELEPATI{" "}
                              <span className="font-semibold text-on-surface">
                                @telepatipolban
                              </span>
                              .
                            </li>
                            <li>
                              Mengunggah Kartu Tanda Mahasiswa (KTM) yang masih
                              berlaku dengan format PDF/JPG/PNG (maksimal 2 MB).
                            </li>
                            <li>
                              Mengunggah & membagikan Twibbon resmi TELEPATI di
                              Instagram pribadi (mention{" "}
                              <span className="font-semibold text-on-surface">
                                @telepatipolban
                              </span>{" "}
                              & tag minimal 3 teman).
                            </li>
                            <li>
                              Tautan grup WhatsApp peserta dapat diakses via
                              website pendaftaran setelah registrasi selesai.
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

          {/* Tahapan & Timeline Lomba */}
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
              {agriDataEvents.map((event, idx) => {
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

          {/* Ketentuan Teknis & Submission */}
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
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Ketentuan Teknis & Repositori
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-3 flex items-center gap-2 text-on-surface">
                  <span className="text-primary">📊</span> Dataset & Pipeline
                  (Anti-Manipulasi)
                </h3>
                <ul className="list-disc pl-5 font-(family-name:--font-inter) text-sm text-on-surface-variant space-y-2">
                  <li>
                    <strong>Dataset Resmi:</strong> Peserta wajib menggunakan{" "}
                    <strong>Dataset Resmi (Agritech Data)</strong> dari panitia.
                  </li>
                  <li>
                    <strong>End-to-End Pipeline:</strong> Seluruh alur
                    pengolahan data (cleaning, preprocessing, augmentation)
                    wajib ditulis dalam bentuk kode Python di Jupyter Notebook
                    (.ipynb) mulai dari raw dataset asli. Dilarang mengunggah
                    file data bersih tanpa jejak kode pemrosesan.
                  </li>
                  <li>
                    <strong>Reproduksibilitas:</strong> Wajib menyertakan random
                    seed (<code>random_state</code>) pada setiap kode pemrosesan
                    dan pelatihan agar hasil juri 100% konsisten.
                  </li>
                  <li className="text-red-700 font-semibold bg-red-50 p-2.5 rounded border border-red-200">
                    🚫 Dilarang menggunakan pretrained model eksternal di luar
                    dataset resmi. LLM/Assistant (ChatGPT, Claude, Copilot)
                    hanya untuk debugging sintaksis & dokumentasi. Pengolahan
                    dataset via API LLM dilarang keras.
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-3 flex items-center gap-2 text-on-surface">
                  <span className="text-primary">🐙</span> Dokumen & Model
                  Weights GitHub
                </h3>
                <ul className="list-disc pl-5 font-(family-name:--font-inter) text-sm text-on-surface-variant space-y-2">
                  <li>
                    Seluruh pengumpulan terpusat pada{" "}
                    <strong>1 Repositori GitHub Publik</strong> tim.
                  </li>
                  <li>
                    <strong>Model Weights (.pt, .onnx, .h5):</strong> Wajib
                    diunggah melalui <strong>GitHub Releases</strong> atau{" "}
                    <strong>Git LFS</strong> pada repositori tim. Direct link
                    file rilisan wajib disertakan.{" "}
                    <u>Dilarang via Google Drive pribadi</u> guna mencegah
                    manipulasi timestamp.
                  </li>
                  <li>
                    <strong>Commit History:</strong> Menunjukkan riwayat commit
                    berkala secara bertahap oleh akun GitHub anggota terdaftar.{" "}
                    <em>Single commit</em> berisiko REJECTED / diskualifikasi.
                  </li>
                  <li>
                    <strong>README.md wajib memuat:</strong> How to Run, daftar
                    dependencies, arsitektur model, hyperparameter, dan tautan
                    model weights.
                  </li>
                </ul>
              </div>
            </div>

            {/* Table Berkas Pengumpulan */}
            <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
              <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-4 flex items-center gap-2 text-on-surface">
                <span className="text-primary">📁</span> Berkas Pengumpulan
                (Babak Penyisihan)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                  <thead>
                    <tr className="bg-on-surface text-white">
                      <th className="py-2.5 px-4 border border-on-surface w-12 text-center">
                        No
                      </th>
                      <th className="py-2.5 px-4 border border-on-surface w-1/4">
                        Komponen Berkas
                      </th>
                      <th className="py-2.5 px-4 border border-on-surface">
                        Ketentuan & Media Pengumpulan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface-variant">
                    <tr className="border-b border-on-surface/20 bg-white">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                        1
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                        Trained Model Weights
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        Format .pt, .onnx, .pkl, .h5 via{" "}
                        <strong>GitHub Releases / Git LFS</strong> (bukan Google
                        Drive).
                      </td>
                    </tr>
                    <tr className="border-b border-on-surface/20 bg-[#e8fff0]/30">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                        2
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                        Jupyter Notebook (.ipynb)
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        Kode end-to-end reproducible (preprocessing, training,
                        inference) + dokumentasi Markdown.
                      </td>
                    </tr>
                    <tr className="border-b border-on-surface/20 bg-white">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                        3
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                        Repositori GitHub Publik
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        Memuat riwayat commit bertahap & file{" "}
                        <code>README.md</code> petunjuk jalankan program.
                      </td>
                    </tr>
                    <tr className="bg-[#e8fff0]/30">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-center">
                        4
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-on-surface">
                        Surat Pernyataan Orisinalitas
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        File scan PDF bermeterai Rp10.000 yang ditandatangani
                        Ketua Tim dan Dosen Pembimbing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Kriteria Penilaian & Mechanism */}
          <ScrollReveal
            id="kriteria"
            className="bento-card rounded-xl p-8 md:p-12 border-2 border-on-surface bg-[#e8fff0]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg border-2 border-on-surface flex items-center justify-center shadow-[3px_3px_0px_#082016]">
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-on-surface">
                Penilaian & Leaderboard (Grand Challenge)
              </h2>
            </div>

            {/* Audit Run & Leaderboard Mechanism */}
            <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016] mb-8 space-y-4">
              <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface flex items-center gap-2">
                <span className="text-primary">⚡</span> Mekanisme Audit Run &
                Status Penilaian
              </h3>
              <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
                Proses penilaian dilakukan secara transparan, objektif, dan
                reproducible. Dewan juri akan menjalankan ulang (Audit Run)
                model AI dan kode program peserta pada environment resmi panitia
                untuk memverifikasi Skor Mandiri (Self-Reported Score).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-(family-name:--font-inter) text-sm text-left border border-on-surface">
                  <thead>
                    <tr className="bg-on-surface text-white">
                      <th className="py-2.5 px-4 border border-on-surface w-1/4">
                        Status Penilaian
                      </th>
                      <th className="py-2.5 px-4 border border-on-surface">
                        Kriteria & Ketentuan
                      </th>
                      <th className="py-2.5 px-4 border border-on-surface w-1/4">
                        Tindak Lanjut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface-variant">
                    <tr className="border-b border-on-surface/20 bg-[#e8fff0]/50">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-primary">
                        <span className="inline-block bg-primary text-white px-2.5 py-1 rounded text-xs font-bold shadow-[1px_1px_0px_#082016]">
                          VERIFIED
                        </span>
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        Hasil eksekusi ulang juri konsisten dengan Skor Mandiri
                        (selisih relatif &le; 2%).
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 text-xs">
                        Skor terverifikasi masuk ke{" "}
                        <strong>Official Leaderboard</strong>. Re-submission
                        diperbolehkan hingga batas akhir.
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-4 border border-on-surface/20 font-bold text-red-700">
                        <span className="inline-block bg-red-700 text-white px-2.5 py-1 rounded text-xs font-bold shadow-[1px_1px_0px_#082016]">
                          REJECTED
                        </span>
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20">
                        Kode error, terjadi data leakage, file rusak,
                        unreproducible, atau selisih skor &gt; 2%.
                      </td>
                      <td className="py-3 px-4 border border-on-surface/20 text-xs">
                        Disertai alasan penolakan. Tim dapat perbaiki &{" "}
                        <strong>Re-submit</strong> selama periode pendaftaran
                        dibuka.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Metrik Evaluasi Utama (Persentase Saja) */}
            <div className="bg-white border-2 border-on-surface rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
              <h3 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="text-primary">🎯</span> Metrik Penilaian Model
                AI
              </h3>
              <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant mb-6">
                Model AI peserta akan dievaluasi secara objektif berdasarkan
                metrik utama berikut:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-(family-name:--font-inter)">
                <div className="border-2 border-on-surface bg-[#e8fff0] p-4 rounded-lg shadow-[2px_2px_0px_#082016]">
                  <div className="text-primary font-extrabold text-lg mb-1">
                    mAP@50 (Mean Average Precision)
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Mengukur ketepatan dan akurasi deteksi lokasi objek pada
                    Intersection over Union (IoU) Threshold 0,5.
                  </div>
                </div>
                <div className="border-2 border-on-surface bg-[#e8fff0] p-4 rounded-lg shadow-[2px_2px_0px_#082016]">
                  <div className="text-primary font-extrabold text-lg mb-1">
                    F1-Score
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Keseimbangan harmonis antara Precision dan Recall dalam
                    mengklasifikasikan objek pertanian.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hadiah */}
          <ScrollReveal
            id="hadiah"
            className="bg-on-surface border-2 border-on-surface rounded-xl p-8 md:p-12 text-center shadow-[4px_4px_0px_#006b30] relative overflow-hidden"
          >
            <h2 className="font-(family-name:--font-jakarta) text-[36px] md:text-[56px] font-extrabold tracking-tight text-white mb-4 relative z-10">
              Hadiah & Penghargaan
            </h2>
            <p className="font-(family-name:--font-inter) text-[16px] md:text-[18px] text-white/80 max-w-2xl mx-auto mb-8 relative z-10">
              Pemenang lomba AgriData Intelligence Race akan memperoleh
              penghargaan sebagai berikut:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8 relative z-10 font-(family-name:--font-inter)">
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
                  <li className="flex items-start gap-2 font-bold text-secondary-container pt-1 border-t border-white/10">
                    <span>🎓</span>
                    <span>
                      Fasilitas Publikasi Jurnal & Presentasi Final POLBAN
                    </span>
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

            <Link
              href="/#pendaftaran"
              className="neo-button-primary px-10 py-4 w-full sm:w-auto inline-flex items-center justify-center relative z-10"
            >
              Daftarkan Tim Anda Sekarang
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
