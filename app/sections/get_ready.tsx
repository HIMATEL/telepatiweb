'use client';

import { LinkButton } from "../components/button";
import { links } from "../util/links";

export default function GetReady() {
   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 py-20">
            <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-8">
               <div className="text-center">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                     Pendaftaran sudah ditutup,
                     <br />
                     <span className="text-blue-400">finalis</span> sudah
                     <br />
                     diumumkan
                  </h1>
               </div>

               <div className="flex flex-col gap-6 items-center">
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
                     <LinkButton
                        link={links.proposalKreatif}
                        text="Jadilah Sponsor kami!"
                        isInverted={false}
                     />

                     <LinkButton
                        internalUrl="/finalis"
                        text="Pengumuman Finalis"
                        isInverted={true}
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}