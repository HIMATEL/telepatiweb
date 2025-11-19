'use client';

import { useState } from 'react';

export default function FaqSection() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const faqs = [
      {
         title: "Seperti apa Lomba Telepati 7.0 ini?",
         description: "Lomba Telepati 7.0 adalah sebuah kompetisi IoT yang diikuti oleh mahasiswa aktif Diploma atau Sarjana maksimal hingga semester 5, atau pelajar aktif SMA/SMK dengan skala nasional. Peserta akan membentuk tim yang terdiri dari 2-5 orang untuk mengembangkan solusi inovatif berbasis IoT sesuai dengan tema yang telah ditentukan. Untuk bisa mengikuti lomba ini, peserta harus mendaftar secara online form pendaftaran yang tertera pada link di Guidebook atau pada Website ini. Setelah itu, peserta diharapkan dapat mengirimkan proposal sebelum tenggat waktu yang ditentukan, yang nantinya akan dinilai oleh juri. Tim yang lolos seleksi proposal akan melanjutkan ke tahap final, di mana mereka akan mempresentasikan karya mereka di hadapan juri dan peserta lainnya di kampus Politeknik Negeri Bandung.",
      },
      {
         title: "Apakah Lomba Telepati 7.0 Berbayar?",
         description: "Lomba Telepati 7.0 ini berbayar, peserta diperlukan untuk membayar biaya administrasi sebesar Rp 50.000,- per tim untuk mengikuti lomba ini. Pembayaran dapat dilakukan melalui transfer bank ke nomor rekening yang telah disediakan oleh panitia yang tertera pada Guide Book.",
      },
      {
         title: "Saya berada di luar Jawa Barat. Apakah saya tetap bisa mendaftar?",
         description: "Tentu bisa, akan tetapi kami tidak menyediakan akomodasi bagi peserta yang berasal dari luar Jawa Barat. Peserta dari luar Jawa Barat tetap dapat mengikuti lomba ini dengan syarat dan ketentuan yang berlaku.",
      },
      {
         title: "Siapa saja yang menilai proposal dan karya kami?",
         description: "Proposal dan karya yang diajukan oleh peserta akan dinilai oleh Dosen Polban yang berkompeten di bidang IoT dan teknologi, serta memiliki pengalaman dalam industri terkait yang memiliki pengetahuan mendalam tentang inovasi teknologi dan penerapannya.",
      },
      {
         title: "Apakah ada makan siang gratis selama acara?",
         description: "Tentu saja! kami menyediakan makan siang gratis bagi semua peserta selama acara berlangsung. Kami ingin memastikan bahwa peserta tetap berenergi dan fokus selama acara.",
      },
      {
         title: "Saya ingin jadi sponsor, adakah kontak untuk dihubungi?",
         description: `Kami sangat menerima jika Anda tertarik untuk menjadi sponsor Telepati 7.0. Silakan hubungi kami melalui email <span class="bg-blue-500 text-white px-2 py-1 rounded font-semibold">polbantelepati@gmail.com</span>`,
         isHtml: true
      },
   ];

   const toggleFaq = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 py-20">
            {/* Title */}
            <h1 className="font-bold text-6xl mb-8 text-white text-center">FAQs</h1>

            {/* Light Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mb-16 rounded-full"></div>

            {/* FAQ List */}
            <div className="w-full max-w-4xl space-y-4">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     className="cursor bg-blue-900/30 backdrop-blur-sm border border-blue-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                     {/* Question Header */}
                     <button
                        onClick={() => toggleFaq(index)}
                        className="cursor-pointer w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-800/20 transition-colors duration-200"
                     >
                        <h3 className="text-lg font-semibold text-blue-200 pr-4">
                           {faq.title}
                        </h3>
                        <div
                           className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                              openIndex === index ? 'transform rotate-180' : ''
                           }`}
                        >
                           <svg
                              className="w-4 h-4 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M19 9l-7 7-7-7"
                              />
                           </svg>
                        </div>
                     </button>

                     {/* Answer Content */}
                     <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                           openIndex === index
                              ? 'max-h-96 opacity-100'
                              : 'max-h-0 opacity-0'
                        }`}
                     >
                        <div className="px-6 pb-5 pt-2 border-t border-blue-700/30 text-justify">
                           {faq.isHtml ? (
                              <p
                                 className="text-white/90 leading-relaxed"
                                 dangerouslySetInnerHTML={{ __html: faq.description }}
                              />
                           ) : (
                              <p className="text-white/90 leading-relaxed">
                                 {faq.description}
                              </p>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   )
}