"use client";

export default function Finalis7_0Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Telepati 7.0 - Finalis",
    "description": "Pengumuman finalis kompetisi IoT Telepati 7.0 Politeknik Negeri Bandung",
    "organizer": {
      "@type": "Organization",
      "name": "Politeknik Negeri Bandung",
      "url": "https://www.polban.ac.id"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Politeknik Negeri Bandung"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[url('https://lh3.googleusercontent.com/d/1NZu2SJs69eYBh6ZVzJ8ZjMGbxqcQ46o6')] bg-cover bg-center bg-no-repeat flex relative justify-center flex-col items-center px-4 sm:px-6 lg:px-10 py-10 min-h-screen">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/20 z-20"></div>
        <article className="z-30 w-full max-w-7xl h-full text-white flex flex-col items-center space-y-6 sm:space-y-8">
         <header>
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-4">
              Finalis Telepati 7.0
           </h1>
         </header>
         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-4xl px-4">
            Berikut adalah daftar finalis yang telah berhasil lolos ke babak final Telepati 7.0. Selamat kepada tim-tim yang telah menunjukkan inovasi dan kreativitas luar biasa dalam kompetisi ini!
         </p>
         <div className="w-full flex-1 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] pb-10 flex flex-col items-center">
            <iframe
            width="100%"
            height="500px"
               className="rounded-xl border-2 border-blue-500/30 shadow-2xl bg-white"
               src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4g8iZgvqQId2xSim6WdIUrKXW7E2RsoISLi0cPqworBvPP-74K0CWE-Ueq5_FNiUXZJCnzxZy79ff/pubhtml?widget=true&amp;headers=false"
               title="Daftar Finalis Telepati 7.0 - Kompetisi IoT Polban"
               loading="lazy"
            ></iframe>

          <aside className="w-full max-w-4xl mt-8 bg-blue-900/30 backdrop-blur-sm border border-blue-700/50 rounded-xl p-6 sm:p-8 mx-auto">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-center mb-4">
              Keputusan penilaian bersifat final dan tidak dapat diganggu gugat.
            </p>
            <p className="text-sm sm:text-base text-center mb-6">
              Hormat kami,<br />
              <span className="font-semibold">Tim Juri Telepati 7.0</span>
            </p>
            <ul className="space-y-2 text-sm sm:text-base" role="list" aria-label="Daftar Tim Juri Telepati 7.0">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Griffani Megiyanto Rahmatullah, S.ST., M.T., Ph.D.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Maya Rahayu, S.Pd., M.T., Ph.D.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Novia Karostiani, S.Pd., M.T.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Mochamad Soebagja Budiana, S.T., M.T.</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-600/30">
              <p className="text-sm sm:text-base text-center text-blue-200/90 italic">
                Bagi tim yang belum terpilih pada kesempatan kali ini, jangan berkecil hati, karena kami akan kembali tahun depan!
              </p>
            </div>
          </aside>
         </div>
        </article>
      </section>
    </>
  );
}
