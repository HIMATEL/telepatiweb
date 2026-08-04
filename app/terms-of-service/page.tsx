import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description:
    "Syarat dan Ketentuan penggunaan website Telepati 8.0 — Agritech: Growing The Golden Future oleh HIMATEL POLBAN.",
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <header className="mb-16">
        <div className="space-y-6">
          <div className="inline-block bg-secondary-container text-on-surface border-2 border-on-surface px-4 py-1 rounded-full text-[12px] leading-none tracking-wider font-bold uppercase shadow-[2px_2px_0px_#082016]">
            Dokumen Legal
          </div>
          <h1 className="font-(family-name:--font-jakarta) text-[36px] md:text-[52px] leading-[1.1] font-extrabold text-on-surface tracking-tight">
            Syarat dan Ketentuan
          </h1>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant">
            Terakhir diperbarui: 4 Agustus 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="prose-legal space-y-12">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            1. Penerimaan Syarat
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Dengan mengakses dan menggunakan website Telepati 8.0 (
            <strong>polbantelepati.tech</strong>) beserta layanan dashboard
            peserta (<strong>dashboard.polbantelepati.tech</strong>), Anda
            menyatakan telah membaca, memahami, dan menyetujui untuk terikat
            dengan Syarat dan Ketentuan ini. Jika Anda tidak menyetujui syarat
            ini, harap hentikan penggunaan website kami.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            2. Definisi
          </h2>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              <strong>&quot;Kami&quot;</strong>,{" "}
              <strong>&quot;Penyelenggara&quot;</strong> — merujuk pada Panitia
              Telepati 8.0, yang dikelola oleh Himpunan Mahasiswa Teknik
              Telekomunikasi (HIMATEL) Politeknik Negeri Bandung
            </li>
            <li>
              <strong>&quot;Anda&quot;</strong>,{" "}
              <strong>&quot;Pengguna&quot;</strong>,{" "}
              <strong>&quot;Peserta&quot;</strong> — merujuk pada setiap individu
              yang mengakses website atau mendaftar kompetisi
            </li>
            <li>
              <strong>&quot;Layanan&quot;</strong> — merujuk pada seluruh fitur
              yang tersedia di website, termasuk pendaftaran kompetisi, dashboard
              peserta, dan informasi acara
            </li>
            <li>
              <strong>&quot;Kompetisi&quot;</strong> — merujuk pada ajang
              kompetisi Telepati 8.0 dengan tema &quot;Agritech: Growing The
              Golden Future&quot;
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            3. Kelayakan Peserta
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Untuk mendaftar sebagai peserta Kompetisi Telepati 8.0, Anda harus
            memenuhi persyaratan berikut:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              Merupakan mahasiswa aktif perguruan tinggi di seluruh Indonesia
              (dibuktikan dengan Kartu Tanda Mahasiswa yang masih berlaku)
            </li>
            <li>
              Mendaftar sesuai dengan ketentuan kategori lomba yang dipilih
              sebagaimana tercantum dalam guidebook masing-masing kategori
            </li>
            <li>
              Memiliki akun Google yang valid untuk proses autentikasi dan
              pendaftaran melalui Google Sign-In
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            4. Pendaftaran dan Akun
          </h2>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              a. Google Sign-In
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
              Pendaftaran dilakukan melalui Google Sign-In. Dengan melakukan
              login menggunakan akun Google, Anda memberikan izin kepada kami
              untuk mengakses informasi dasar profil Anda (nama, email, dan foto
              profil) sesuai dengan{" "}
              <Link
                href="/privacy-policy"
                className="text-primary font-bold underline underline-offset-2 hover:text-primary-container transition-colors"
              >
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </p>
          </div>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              b. Kebenaran Data
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
              Anda bertanggung jawab untuk memastikan bahwa seluruh informasi
              yang diberikan saat pendaftaran adalah benar, akurat, dan terkini.
              Pemberian informasi palsu dapat mengakibatkan diskualifikasi dari
              kompetisi.
            </p>
          </div>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              c. Keamanan Akun
            </h3>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
              Anda bertanggung jawab penuh atas keamanan akun Google Anda. Kami
              tidak bertanggung jawab atas akses tidak sah yang terjadi akibat
              kelalaian Anda dalam menjaga keamanan akun.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            5. Aturan Kompetisi
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Peserta wajib mematuhi seluruh aturan dan regulasi yang berlaku
            untuk masing-masing kategori lomba, sebagaimana tercantum dalam
            guidebook resmi. Aturan mencakup namun tidak terbatas pada:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Format dan ketentuan pengumpulan karya</li>
            <li>Batas waktu (deadline) pengumpulan</li>
            <li>Orisinalitas dan keaslian karya</li>
            <li>Larangan plagiarisme dan penggunaan konten tanpa izin</li>
            <li>Tata tertib selama pelaksanaan kompetisi</li>
          </ul>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Pelanggaran atas aturan kompetisi dapat berakibat pada teguran,
            pengurangan nilai, atau diskualifikasi, sesuai keputusan panitia
            yang bersifat final dan mengikat.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            6. Hak Kekayaan Intelektual
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Seluruh konten yang terdapat pada website Telepati 8.0, termasuk
            namun tidak terbatas pada desain, teks, grafik, logo, dan kode
            sumber, merupakan milik Panitia Telepati 8.0 dan/atau HIMATEL POLBAN
            dan dilindungi oleh hukum hak cipta yang berlaku.
          </p>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Peserta tetap memegang hak cipta atas karya yang disubmit untuk
            kompetisi. Namun, dengan mengirimkan karya, peserta memberikan izin
            non-eksklusif kepada penyelenggara untuk menampilkan, mempublikasikan,
            dan mempromosikan karya tersebut dalam konteks kegiatan Telepati 8.0
            dan kegiatan HIMATEL POLBAN.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            7. Penggunaan yang Dilarang
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Anda dilarang menggunakan website ini untuk:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Aktivitas ilegal atau yang melanggar hukum Indonesia</li>
            <li>
              Mengirim, menyimpan, atau mendistribusikan malware, virus, atau
              kode berbahaya lainnya
            </li>
            <li>
              Melakukan scraping, crawling, atau ekstraksi data secara otomatis
              tanpa izin tertulis
            </li>
            <li>
              Mengakses atau mencoba mengakses akun pengguna lain tanpa izin
            </li>
            <li>
              Mengganggu atau merusak infrastruktur website dan layanan terkait
            </li>
            <li>
              Menyamar sebagai orang lain atau memberikan representasi palsu atas
              identitas Anda
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            8. Pembatasan Tanggung Jawab
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Website dan layanan kami disediakan &quot;sebagaimana adanya&quot;
            (as is) tanpa jaminan apa pun, baik tersurat maupun tersirat.
            Penyelenggara tidak bertanggung jawab atas:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              Gangguan, error, atau ketidaktersediaan sementara pada website
            </li>
            <li>
              Kerugian langsung maupun tidak langsung yang timbul dari
              penggunaan website
            </li>
            <li>
              Kehilangan data akibat kegagalan teknis di luar kendali
              penyelenggara
            </li>
            <li>
              Konten, produk, atau layanan pihak ketiga yang diakses melalui
              tautan pada website
            </li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            9. Pembatalan dan Pengembalian Dana
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Biaya pendaftaran yang telah dibayarkan bersifat{" "}
            <strong>tidak dapat dikembalikan (non-refundable)</strong>, kecuali
            dalam kondisi berikut:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              Kompetisi dibatalkan secara resmi oleh pihak penyelenggara
            </li>
            <li>
              Terjadi kesalahan teknis pada sistem pembayaran yang dibuktikan
              secara sah
            </li>
          </ul>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Permintaan pengembalian dana harus diajukan melalui email resmi
            panitia dalam waktu 7 (tujuh) hari kerja setelah kejadian.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            10. Penghentian Layanan
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami berhak untuk menangguhkan atau menghentikan akses Anda ke
            website tanpa pemberitahuan terlebih dahulu jika:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Anda melanggar Syarat dan Ketentuan ini</li>
            <li>Anda terbukti melakukan kecurangan atau pelanggaran hukum</li>
            <li>Diperlukan untuk alasan keamanan atau pemeliharaan teknis</li>
          </ul>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            11. Perubahan Syarat
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami berhak memperbarui atau mengubah Syarat dan Ketentuan ini
            sewaktu-waktu. Perubahan akan berlaku efektif segera setelah
            dipublikasikan di halaman ini. Penggunaan berkelanjutan atas website
            setelah perubahan dianggap sebagai penerimaan Anda atas syarat yang
            telah diperbarui.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            12. Hukum yang Berlaku
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
            hukum Negara Republik Indonesia. Segala sengketa yang timbul dari
            penggunaan website ini akan diselesaikan melalui musyawarah mufakat
            terlebih dahulu. Apabila tidak tercapai kesepakatan, sengketa akan
            diselesaikan melalui yurisdiksi pengadilan yang berwenang di
            wilayah Kota Bandung, Jawa Barat.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            13. Hubungi Kami
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini,
            silakan hubungi kami:
          </p>
          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-3 shadow-[3px_3px_0px_#082016]">
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface">
              <strong>Panitia Telepati 8.0</strong>
              <br />
              Himpunan Mahasiswa Teknik Telekomunikasi (HIMATEL)
              <br />
              Politeknik Negeri Bandung
              <br />
              Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten
              Bandung Barat, Jawa Barat 40559
            </p>
            <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <Link
                href="mailto:polbantelepati@gmail.com"
                className="text-primary font-bold underline underline-offset-2 hover:text-primary-container transition-colors"
              >
                polbantelepati@gmail.com
              </Link>
            </p>
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-8 border-t-2 border-outline-variant flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-(family-name:--font-jakarta) font-bold text-primary hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Kembali ke Beranda
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center gap-2 font-(family-name:--font-jakarta) font-bold text-primary hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined">shield</span>
            Kebijakan Privasi
          </Link>
        </div>
      </article>
    </main>
  );
}
