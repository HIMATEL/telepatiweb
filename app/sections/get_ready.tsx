'use client';

import { LinkButton } from "../components/button";
import { links } from "../util/links";
import { CountdownTimer, useRegistrationStatus } from "../components/CountdownTimer";

export default function GetReady() {
   const isRegistrationClosed = useRegistrationStatus();   return (
      <>
         <section className="flex relative justify-center flex-col items-center px-10 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
               <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                     Siap membawa
                     <br />
                     <span className="text-blue-400">tim anda</span> menjadi
                     <br />
                     juara?
                  </h1>
               </div>

               <div className="flex flex-col gap-6 items-center">
                  {/* Countdown Timer */}
                  {!isRegistrationClosed && <CountdownTimer />}

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
                     {isRegistrationClosed ? (
                        <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center max-w-2xl">
                           <p className="text-lg sm:text-xl text-white font-semibold">
                              Pendaftaran sudah ditutup, finalis akan diumumkan nanti
                           </p>
                        </div>
                     ) : (
                        <>
                           <LinkButton
                              link={links.guidebook}
                              text="Guidebook Telepati 7.0"
                              isInverted={false}
                           />

                           <LinkButton
                              link={links.pendaftaran}
                              text="Link Pendaftaran"
                              isInverted={true}
                           />
                        </>
                     )}
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}