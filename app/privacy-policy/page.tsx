import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi website Telepati 8.0 — Agritech: Growing The Golden Future oleh HIMATEL POLBAN.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <header className="mb-16">
        <div className="space-y-6">
          <div className="inline-block bg-secondary-container text-on-surface border-2 border-on-surface px-4 py-1 rounded-full text-[12px] leading-none tracking-wider font-bold uppercase shadow-[2px_2px_0px_#082016]">
            Dokumen Legal
          </div>
          <h1 className="font-(family-name:--font-jakarta) text-[36px] md:text-[52px] leading-[1.1] font-extrabold text-on-surface tracking-tight">
            Kebijakan Privasi
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
            1. Pendahuluan
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Selamat datang di website Telepati 8.0 (
            <strong>polbantelepati.tech</strong>). Website ini dikelola oleh
            Himpunan Mahasiswa Teknik Telekomunikasi (HIMATEL) Politeknik Negeri
            Bandung. Kebijakan Privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, menyimpan, dan melindungi informasi
            pribadi Anda saat menggunakan layanan kami, termasuk fitur
            pendaftaran peserta kompetisi melalui Google Sign-In.
          </p>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Dengan mengakses dan menggunakan website ini, Anda menyetujui
            praktik yang diuraikan dalam Kebijakan Privasi ini. Jika Anda tidak
            setuju, harap tidak melanjutkan penggunaan layanan kami.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            2. Informasi yang Kami Kumpulkan
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami mengumpulkan informasi berikut saat Anda menggunakan layanan
            kami:
          </p>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              a. Informasi dari Google Sign-In
            </h3>
            <ul className="list-disc list-inside space-y-2 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Foto profil Google</li>
            </ul>
          </div>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              b. Informasi Pendaftaran Kompetisi
            </h3>
            <ul className="list-disc list-inside space-y-2 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant">
              <li>Nama tim dan anggota tim</li>
              <li>Institusi asal / perguruan tinggi</li>
              <li>Nomor telepon / WhatsApp</li>
              <li>Kategori lomba yang dipilih</li>
              <li>Dokumen pendukung (KTM, bukti pembayaran, dsb.)</li>
            </ul>
          </div>

          <div className="bg-surface-variant border-2 border-on-surface rounded-xl p-6 space-y-4 shadow-[3px_3px_0px_#082016]">
            <h3 className="font-(family-name:--font-jakarta) text-[18px] font-bold text-on-surface">
              c. Informasi Teknis
            </h3>
            <ul className="list-disc list-inside space-y-2 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant">
              <li>Alamat IP</li>
              <li>Jenis perangkat dan browser</li>
              <li>Data analitik penggunaan website (melalui Vercel Analytics)</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            3. Tujuan Penggunaan Data
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Memverifikasi identitas peserta melalui autentikasi Google</li>
            <li>Memproses dan mengelola pendaftaran kompetisi Telepati 8.0</li>
            <li>
              Menghubungi peserta terkait informasi kompetisi, pengumuman, dan
              pembaruan penting
            </li>
            <li>Meningkatkan performa dan pengalaman pengguna pada website</li>
            <li>Memenuhi kewajiban hukum yang berlaku</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            4. Berbagi Data dengan Pihak Ketiga
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami <strong>tidak menjual, memperdagangkan, atau menyewakan</strong>{" "}
            informasi pribadi Anda kepada pihak ketiga. Namun, kami dapat
            membagikan data kepada pihak ketiga berikut dalam kapasitas terbatas:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              <strong>Google</strong> — sebagai penyedia layanan autentikasi
              (OAuth 2.0 / Google Sign-In)
            </li>
            <li>
              <strong>Vercel</strong> — sebagai penyedia hosting dan layanan
              analitik website
            </li>
            <li>
              <strong>Panitia dan Juri Telepati 8.0</strong> — untuk keperluan
              administrasi dan penilaian kompetisi
            </li>
            <li>
              <strong>Pihak berwenang</strong> — jika diwajibkan oleh hukum yang
              berlaku di Indonesia
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            5. Penyimpanan dan Keamanan Data
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami menyimpan data pribadi Anda selama diperlukan untuk memenuhi
            tujuan yang diuraikan dalam kebijakan ini, atau selama diwajibkan
            oleh hukum. Data akan disimpan dengan langkah-langkah keamanan yang
            wajar, termasuk:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Koneksi terenkripsi (HTTPS/SSL)</li>
            <li>Autentikasi berbasis token melalui Google OAuth 2.0</li>
            <li>Pembatasan akses data hanya kepada panitia yang berwenang</li>
          </ul>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Meskipun demikian, tidak ada metode transmisi data melalui internet
            yang 100% aman. Kami berusaha melindungi informasi Anda, namun tidak
            dapat menjamin keamanan absolut.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            6. Cookie dan Teknologi Pelacakan
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Website kami dapat menggunakan cookie dan teknologi pelacakan serupa
            untuk:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>Menjaga sesi login Anda (session cookie)</li>
            <li>Menganalisis trafik dan perilaku pengguna (analytics cookie)</li>
          </ul>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Anda dapat mengatur preferensi cookie melalui pengaturan browser
            Anda. Menonaktifkan cookie dapat memengaruhi fungsionalitas tertentu
            pada website.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            7. Hak Pengguna
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Sebagai pengguna, Anda memiliki hak untuk:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              <strong>Mengakses</strong> — meminta salinan data pribadi yang kami
              simpan tentang Anda
            </li>
            <li>
              <strong>Memperbaiki</strong> — meminta koreksi atas data yang
              tidak akurat
            </li>
            <li>
              <strong>Menghapus</strong> — meminta penghapusan data pribadi Anda,
              kecuali data yang wajib disimpan oleh hukum
            </li>
            <li>
              <strong>Mencabut persetujuan</strong> — mencabut izin akses akun
              Google melalui pengaturan keamanan akun Google Anda di{" "}
              <Link
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline underline-offset-2 hover:text-primary-container transition-colors"
              >
                myaccount.google.com/permissions
              </Link>
            </li>
          </ul>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi
            kontak yang tercantum di bawah.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            8. Layanan Pihak Ketiga
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Website kami menggunakan layanan pihak ketiga berikut. Setiap layanan
            memiliki kebijakan privasi tersendiri yang mengatur penggunaan data
            Anda:
          </p>
          <ul className="list-disc list-inside space-y-3 font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant ml-2">
            <li>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline underline-offset-2 hover:text-primary-container transition-colors"
              >
                Google Privacy Policy
              </Link>{" "}
              — untuk layanan Google Sign-In
            </li>
            <li>
              <Link
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline underline-offset-2 hover:text-primary-container transition-colors"
              >
                Vercel Privacy Policy
              </Link>{" "}
              — untuk hosting dan analitik
            </li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            9. Perubahan Kebijakan
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Kami berhak memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Perubahan akan dipublikasikan di halaman ini dengan memperbarui
            tanggal &quot;Terakhir diperbarui&quot; di bagian atas. Kami menyarankan Anda
            untuk meninjau halaman ini secara berkala.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="font-(family-name:--font-jakarta) text-[24px] md:text-[28px] font-bold text-on-surface border-b-2 border-primary pb-2">
            10. Hubungi Kami
          </h2>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.8] text-on-surface-variant text-justify">
            Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait
            Kebijakan Privasi ini, silakan hubungi kami:
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
        <div className="pt-8 border-t-2 border-outline-variant">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-(family-name:--font-jakarta) font-bold text-primary hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Kembali ke Beranda
          </Link>
        </div>
      </article>
    </main>
  );
}
