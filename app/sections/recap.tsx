import { GOOGLE_DRIVE_BASE_URL } from "../util/links";

export default function Recap() {
   const imageIds = [
      { id: "1nlK0LBY99QUsJ_JWdCM1TAwyriS66Yzd", alt: "Juara 1 Telepati 6.0" },
      { id: "1PyrztJgUe7YStGs6I7fNnu9GnXIfSGZv", alt: "Foto bersama seluruh partisipan Telepati 6.0" },
      { id: "1ia29BBTTKJoyRpc0vxVBW9aa4RptFMoB", alt: "Juara 2 Telepati 6.0" },
      { id: "1F27LZYD6Ylh6JbXlYB4a_QbwObhQFpCO", alt: "MC Telepati 6.0" },
      { id: "1xnBsJEbnKI686hTBwLvdRRDiWyFlHXVc", alt: "Panggung Telepati 6.0" },
      { id: "1u7nMcJvwckofNUCHx5pK7Go_PYumFPx5", alt: "Panitia Telepati 6.0" }
   ];

   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 pt-20">
            <h1 className="font-bold text-4xl m-4 md:text-5xl lg:text-6xl text-center">Recap Telepati 6.0</h1>
            {/* make grid of photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-2 lg:px-10 md:px-10 min-w-full items-center justify-center">
               {imageIds.map((image, _) => (
                  <img
                     key={image.id}
                     src={`${GOOGLE_DRIVE_BASE_URL}${image.id}`}
                     alt={image.alt}
                     className="w-full h-40 lg:h-64 md:h-64 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 hover:rotate-[5deg] hover:scale-110 hover:shadow-xl cursor-pointer"
                  />
               ))}
            </div>
         </section>
      </>
   )
}