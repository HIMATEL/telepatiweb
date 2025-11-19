export default function Timeline() {
   const timelineEvents = [
      {
         date: "29 September - 18 Oktober 2025",
         title: "Pendaftaran Batch 1",
      },
      {
         date: "18 Oktober - 10 November 2025",
         title: "Pendaftaran Batch 2",
      },
      {
         date: "10 November - 16 November 2025",
         title: "Penyeleksian 10 Besar Finalis",
      },
      {
         date: "17 Novemmber 2025",
         title: "Pengumuman 10 Besar Finalis",
      },
      {
         date: "21 November 2025",
         title: "Technichal Meeting",
      },
      {
         date: "30 November 2025",
         title: "Demonstrasi Karya Secara Offline",
      },
   ];

   return (
      <section className="flex relative justify-center flex-col items-center px-10 py-20">
         <h1 className="text-4xl font-bold md:text-5x lg:text-6xl mb-16 text-center">Timeline Perlombaan</h1>
         <div className="relative w-full max-w-4xl my-5">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>

            {timelineEvents.map((event, index) => (
               <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                     index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
               >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                     <div className="relative">
                        {/* Glowing effect */}
                        <div className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full blur-sm animate-pulse"></div>
                        {/* Outer blue circle */}
                        <div className="relative w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-400/50">
                           {/* White center dot */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                        </div>
                     </div>
                  </div>

                  {/* Content */}
                  <div
                     className={`w-6/12 lg:w-5/12 md:w-5/12 ${
                        index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                     }`}
                  >
                     <div className="transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl lg:text-2xl md:text-2xl font-bold mb-2 text-blue-400">
                           {event.title}
                        </h3>
                        <p className="text-sm md:text-sm lg:text-sm text-white font-semibold mb-3">
                           {event.date}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}