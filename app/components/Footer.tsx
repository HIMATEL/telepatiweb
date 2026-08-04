import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-surface text-[#e8fff0] py-16 px-6 border-t-8 border-primary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <Link
            href="#"
            className="flex items-center gap-2 font-(family-name:--font-exo2) text-[20px] leading-[1.3] font-bold tracking-tight text-white mb-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/telepati8.svg"
              alt="Telepati 8.0 Logo"
              width={32}
              height={32}
              className="h-16 w-auto object-contain bg-white rounded-full"
            />
            TELEPATI 8.0
          </Link>
          <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-[#cde9d8] max-w-sm text-justify">
            Program kerja tahunan berupa perlombaan tingkat nasional yang
            diselenggarakan oleh HIMATEL POLBAN, kali ini hadir dengan tema{" "}
            <span className="font-bold">
              "AgriTech: Growing the Golden Future"
            </span>{" "}
            yang berfokus pada pengembangan teknologi untuk mewujudkan industri
            agrikultur Indonesia yang lebih maju.
          </p>
          <div className="mt-4 rounded-full">
            <img
              src="/images/supporters.png"
              className="scale-[50%] origin-left bg-white p-2 rounded-full"
              alt="Pendukung Internal"
            />
          </div>
        </div>

        <div>
          <h4 className="font-(family-name:--font-jakarta) font-bold text-lg mb-4 text-white">
            Tautan Cepat
          </h4>
          <ul className="space-y-3 font-(family-name:--font-inter) text-[#cde9d8]">
            <li>
              <Link
                href="/#tentang"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/#cabang-lomba"
                className="hover:text-white transition-colors"
              >
                Kategori Lomba
              </Link>
            </li>
            <li>
              <Link
                href="/#timeline"
                className="hover:text-white transition-colors"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-(family-name:--font-jakarta) font-bold text-lg mb-4 text-white">
            Legal
          </h4>
          <ul className="space-y-3 font-(family-name:--font-inter) text-[#cde9d8]">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Syarat dan Ketentuan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-(family-name:--font-jakarta) font-bold text-lg mb-4 text-white">
            Kontak
          </h4>
          <ul className="space-y-3 font-(family-name:--font-inter) text-[#cde9d8]">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-lg text-primary">
                location_on
              </span>
              <span>Politeknik Negeri Bandung, Jawa Barat 40559</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary">
                mail
              </span>
              <span>polbantelepati@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 mt-4">
              <Link
                href="https://instagram.com/himatelpolban"
                className="w-10 h-10 rounded-full bg-[#1e352a] flex items-center justify-center hover:bg-primary transition-colors"
              >
                IG
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center font-(family-name:--font-inter) text-sm text-[#cde9d8]">
        <p>
          &copy; 2026 Departemen IPTEK Himpunan Mahasiswa Teknik Telekomunikasi
          Politeknik Negeri Bandung Kabinet Transformasi Aksi.
        </p>
      </div>
    </footer>
  );
}
