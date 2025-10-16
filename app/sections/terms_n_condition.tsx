export default function TermsAndConditions() {
   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">

               {/* Left Side - Ketentuan Lomba */}
               <div className="flex flex-col">
                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white text-center flex items-center justify-center">
                     Ketentuan Lomba
                  </h2>

                  {/* Light Divider */}
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mb-8 rounded-full mx-auto"></div>

                  {/* Terms Card */}
                  <div className="bg-blue-900/80 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 shadow-2xl shadow-blue-900/20 hover:shadow-blue-800/30 transition-all duration-300 hover:scale-[1.02] flex-1 text-justify">
                     <div className="text-sm md:text-md space-y-4 text-white/90 leading-relaxed">
                        <p>
                           Tema <span className="relative inline-block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-cyan-400 after:shadow-[0_0_8px_rgba(34,197,94,0.6),0_0_16px_rgba(6,182,212,0.4)] after:animate-pulse">"Connected Green Future with IoT"</span> mendorong peserta untuk menciptakan solusi IoT yang dapat membantu menjaga kelestarian lingkungan.
                           Peserta ditantang untuk menghadirkan inovasi yang bermanfaat dalam kehidupan sehari-hari, seperti pemantauan kualitas udara, pengelolaan limbah dan sampah, sistem irigasi pintar, hingga deteksi kondisi tanah dan cuaca.
                        </p>

                        <p>
                           Berikut adalah syarat-syarat untuk mengikuti perlombaan ini:
                        </p>

                        <ol className="list-inside space-y-2 ml-4 list-decimal">
                           <li>Peserta harus tergabung dalam tim yang terdiri dari 2-5 orang,dengan seluruh anggota berasal dari universitas atau sekolah yang sama di wilayah Jawa Barat.</li>
                           <li>Peserta merupakan mahasiswa aktif program Diploma atau Sarjana, maksimal hingga semester 5, atau pelajar aktif SMA/SMK.</li>
                           <li>Peserta diwajibkan untuk melakukan registrasi dan mengirimkan proposal sebelum tenggat waktu yang ditentukan.</li>
                           <li>Bagi Peserta yang berhasil lolos ke tahap final akan melakukan presentasi dan demonstrasi karya dalam bentuk prototipe secara offline.</li>
                           <li>Peserta yang lolos ke tahap final di wajibkan untuk memberikan konfirmasi kepada panitia.</li>
                           <li>Peserta yang tidak melakukan konfirmasi kepada pihak panitia dalam waktu 24 jam setelah pengumuman akan didiskualifikasi dan di gantikan oleh tim lain.</li>
                        </ol>

                        <p>
                           Perubahan petunjuk dan informasi lebih lanjut akan disampaikan melalui media sosial Telepati.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right Side - Hadiah Juara */}
               <div className="flex flex-col justify-center">
                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white text-center flex items-center justify-center">
                     Hadiah Juara
                  </h2>

                  {/* Light Divider */}
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent mb-8 rounded-full mx-auto"></div>

                  {/* Winner Rewards Card */}
                  <div className="items-center justify-center flex flex-col bg-blue-900/80 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 shadow-2xl shadow-blue-900/20 hover:shadow-blue-800/30 transition-all duration-300 hover:scale-[1.02] flex-1">
                     <div className="space-y-8 text-white/90 w-full">
                        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                           <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">🥇 Juara Pertama</h3>
                           <p className="text-white/90 text-center text-lg leading-relaxed">
                              <span className="font-bold text-xl">Uang tunai senilai jutaan rupiah</span><br />
                              <span className="text-yellow-200">+ Sertifikat Juara 1</span>
                           </p>
                        </div>

                        <div className="bg-gradient-to-r from-gray-400/20 to-gray-500/20 border border-gray-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-300">
                           <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">🥈 Juara Kedua</h3>
                           <p className="text-white/90 text-center text-lg leading-relaxed">
                              <span className="font-bold text-xl">Uang tunai senilai jutaan rupiah</span><br />
                              <span className="text-gray-200">+ Sertifikat Juara 2</span>
                           </p>
                        </div>

                        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300">
                           <h3 className="text-2xl font-bold text-orange-300 mb-4 text-center">🥉 Juara Ketiga</h3>
                           <p className="text-white/90 text-center text-lg leading-relaxed">
                              <span className="font-bold text-xl">Uang tunai senilai jutaan rupiah</span><br />
                              <span className="text-orange-200">+ Sertifikat Juara 3</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}