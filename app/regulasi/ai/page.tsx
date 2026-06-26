import Link from "next/link";
import ScrollReveal from "../../../app/components/ScrollReveal";
import StickyNav from "../../../app/components/StickyNav";

export default function RegulasiAIPage() {
  const timelineEvents = [
    {
      date: "Gelombang 1 & 2",
      title: "Pendaftaran & Administrasi",
      desc: "Pendaftaran online dan verifikasi berkas tim peserta melalui platform resmi."
    },
    {
      date: "Tahap Eliminasi",
      title: "Model Submission",
      desc: "Pengumpulan notebook Jupyter, arsitektur model, dan laporan analisis case study awal."
    },
    {
      date: "Grand Final",
      title: "Live Presentation",
      desc: "Presentasi final di hadapan dewan juri, demo model secara langsung, dan sesi tanya jawab."
    }
  ];

  return (
    <main className="pt-32 pb-24 max-w-[1152px] mx-auto px-6">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="col-span-1 md:col-span-7 space-y-6">
            <div className="inline-block bg-[#fdc425] text-[#082016] border-2 border-[#082016] px-4 py-1 rounded-full text-[12px] leading-[1] tracking-[0.05em] font-bold uppercase shadow-[2px_2px_0px_#082016]">
              Kategori Lomba Inovasi Teknologi
            </div>
            <h1 className="font-(family-name:--font-jakarta) text-[40px] md:text-[64px] leading-[1.1] font-extrabold text-[#082016] tracking-tight">
              Regulasi AI Training & Case Study
            </h1>
            <p className="font-(family-name:--font-inter) text-[18px] leading-[1.6] text-[#3e4a3e] max-w-2xl">
              Panduan lengkap, syarat teknis, dan kriteria penilaian untuk kompetisi Artificial Intelligence (AI) di Telepati 8.0. Kembangkan model machine learning terbaik untuk memecahkan masalah agrikultur nyata.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="neo-button-primary px-8 py-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                UNDUH PDF REGULASI
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5 h-[400px] rounded-xl border-2 border-[#082016] overflow-hidden relative shadow-[4px_4px_0px_#082016]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1632&auto=format&fit=crop" 
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
          {/* Syarat & Ketentuan Umum */}
          <ScrollReveal id="syarat" className="bento-card rounded-xl p-8 md:p-12 border-2 border-[#082016] bg-[#e8fff0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#006b30] rounded-lg border-2 border-[#082016] flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-[#082016]">
                Syarat & Ketentuan Umum
              </h2>
            </div>
            <ul className="space-y-4 font-(family-name:--font-inter) text-[16px] text-[#3e4a3e]">
              <li className="flex items-start gap-3">
                <span className="text-[#006b30] mt-1">✓</span>
                <span>Peserta merupakan mahasiswa aktif (D3/D4/S1) dari perguruan tinggi di seluruh Indonesia, dibuktikan dengan Kartu Tanda Mahasiswa (KTM) yang masih berlaku.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006b30] mt-1">✓</span>
                <span>Satu tim terdiri dari maksimal 3 (tiga) orang anggota dari perguruan tinggi yang sama.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006b30] mt-1">✓</span>
                <span>Setiap institusi diperbolehkan mengirimkan lebih dari satu tim perwakilan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006b30] mt-1">✓</span>
                <span>Karya yang disubmit harus merupakan karya orisinal tim, belum pernah dipublikasikan, dan tidak sedang diikutsertakan dalam kompetisi lain.</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Tahapan Lomba */}
          <ScrollReveal id="tahapan" className="bento-card rounded-xl p-8 md:p-12 border-2 border-[#082016] bg-[#e8fff0]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#fdc425] rounded-lg border-2 border-[#082016] flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#082016]">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-[#082016]">
                Tahapan Lomba
              </h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[#082016]/20 before:via-[#082016]/20 before:to-transparent">
              {timelineEvents.map((event, idx) => {
                const isActive = idx === 0;
                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:flex-row group">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#082016] shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${isActive ? "bg-[#006b30] text-white shadow-[3px_3px_0px_#082016]" : "bg-white text-[#082016]"}`}>
                      {idx + 1}
                    </div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg ${isActive ? "border-2 border-[#082016] bg-white shadow-[3px_3px_0px_#082016]" : "border border-[#082016]/20 bg-white/50 backdrop-blur-sm"}`}>
                      <div className={`font-(family-name:--font-inter) text-[12px] font-bold mb-1 ${isActive ? "text-[#006b30]" : "text-[#3e4a3e]"}`}>{event.date}</div>
                      <h4 className="font-(family-name:--font-jakarta) text-[20px] font-bold text-[#082016] mb-2">{event.title}</h4>
                      <p className="font-(family-name:--font-inter) text-[14px] text-[#3e4a3e]">{event.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Spesifikasi Teknis */}
          <ScrollReveal id="teknis" className="bento-card rounded-xl p-8 md:p-12 border-2 border-[#082016] bg-[#e8fff0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#082016] rounded-lg border-2 border-[#082016] flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-[#082016]">
                Technical Conditions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#082016] rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h4 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-3 flex items-center gap-2">
                  <span className="text-[#006b30]">📊</span> Dataset Usage
                </h4>
                <p className="font-(family-name:--font-inter) text-[14px] text-[#3e4a3e] mb-4">
                  Peserta wajib menggunakan dataset primer yang disediakan oleh panitia. Penggunaan dataset eksternal (sekunder) diperbolehkan dengan syarat:
                </p>
                <ul className="list-disc pl-5 font-(family-name:--font-inter) text-sm text-[#3e4a3e] space-y-1">
                  <li>Bersifat open-source dan legal.</li>
                  <li>Mendukung, bukan menggantikan dataset utama.</li>
                  <li>Didokumentasikan sumbernya dengan jelas.</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-[#082016] rounded-lg p-6 shadow-[3px_3px_0px_#082016]">
                <h4 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-3 flex items-center gap-2">
                  <span className="text-[#006b30]">🧠</span> Model Architectures
                </h4>
                <p className="font-(family-name:--font-inter) text-[14px] text-[#3e4a3e] mb-4">
                  Tidak ada batasan ketat pada arsitektur (CNN, RNN, Transformers, dll). Namun, model harus:
                </p>
                <ul className="list-disc pl-5 font-(family-name:--font-inter) text-sm text-[#3e4a3e] space-y-1">
                  <li>Dapat direproduksi (reproducible) dengan seed yang ditetapkan.</li>
                  <li>Inference time masuk akal (akan diuji pada environment panitia).</li>
                  <li>Tidak murni API call ke layanan berbayar pihak ketiga (seperti GPT-4 API).</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-[#082016] rounded-lg p-6 md:col-span-2 shadow-[3px_3px_0px_#082016] flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h4 className="font-(family-name:--font-jakarta) text-[20px] font-bold mb-3 flex items-center gap-2">
                    <span className="text-[#006b30]">🖥️</span> Presentation Formats
                  </h4>
                  <p className="font-(family-name:--font-inter) text-[14px] text-[#3e4a3e]">
                    Dek presentasi maksimal 15 slide dalam format PDF. Kode harus disertakan dalam repositori GitHub private yang di-share ke panitia, memuat `requirements.txt` dan script training/inference yang bersih.
                  </p>
                </div>
                <button className="bg-[#fdc425] text-[#082016] border-2 border-[#082016] px-6 py-2 rounded-full font-(family-name:--font-inter) font-bold whitespace-nowrap shadow-[2px_2px_0px_#082016] hover:-translate-y-[1px] transition-transform">
                  Unduh Template
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Kriteria Penilaian */}
          <ScrollReveal id="kriteria" className="bento-card rounded-xl p-8 md:p-12 border-2 border-[#082016] bg-[#e8fff0]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#006b30]/20 rounded-lg border-2 border-[#082016] flex items-center justify-center shadow-[3px_3px_0px_#082016]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#082016]">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h2 className="font-(family-name:--font-jakarta) text-[32px] font-bold text-[#082016]">
                Kriteria Penilaian
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between font-(family-name:--font-inter) text-[16px] font-bold text-[#082016] mb-2">
                  <span>Model Accuracy & Performance</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-white border-2 border-[#082016] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#006b30] h-full" style={{ width: "40%" }}></div>
                </div>
                <p className="font-(family-name:--font-inter) text-sm text-[#3e4a3e] mt-2">Dievaluasi berdasarkan metrik objektif (F1-Score, RMSE, dsb) pada dataset hidden test.</p>
              </div>
              <div>
                <div className="flex justify-between font-(family-name:--font-inter) text-[16px] font-bold text-[#082016] mb-2">
                  <span>Methodology & Engineering</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-white border-2 border-[#082016] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#fdc425] h-full" style={{ width: "30%" }}></div>
                </div>
                <p className="font-(family-name:--font-inter) text-sm text-[#3e4a3e] mt-2">Kualitas preprocessing, feature engineering, pemilihan arsitektur, dan kebersihan kode.</p>
              </div>
              <div>
                <div className="flex justify-between font-(family-name:--font-inter) text-[16px] font-bold text-[#082016] mb-2">
                  <span>Business Insight & Presentation</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-white border-2 border-[#082016] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#058c42] h-full" style={{ width: "30%" }}></div>
                </div>
                <p className="font-(family-name:--font-inter) text-sm text-[#3e4a3e] mt-2">Kemampuan menerjemahkan output teknis menjadi solusi bisnis yang dapat ditindaklanjuti.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Hadiah */}
          <ScrollReveal id="hadiah" className="bg-[#082016] border-2 border-[#082016] rounded-xl p-8 md:p-12 text-center shadow-[4px_4px_0px_#006b30] relative overflow-hidden">
            <h2 className="font-(family-name:--font-jakarta) text-[40px] md:text-[64px] font-extrabold tracking-tight text-white mb-4 relative z-10">
              Total Hadiah Jutaan Rupiah
            </h2>
            <p className="font-(family-name:--font-inter) text-[18px] text-white/80 max-w-xl mx-auto mb-8 relative z-10">
              Raih kesempatan memenangkan hadiah tunai, sertifikat penghargaan, dan peluang networking eksklusif dengan para praktisi industri AI.
            </p>
            <Link href="/#pendaftaran" className="neo-button-primary px-10 py-4 w-full sm:w-auto inline-flex items-center justify-center relative z-10">
              Daftarkan Tim Anda Sekarang
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
