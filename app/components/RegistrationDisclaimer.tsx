"use client";

import { useEffect, useState } from "react";
import { REGISTRATION_DEADLINE } from "../utils/deadline";

export default function RegistrationDisclaimer() {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setIsClosed(Date.now() > REGISTRATION_DEADLINE.getTime());
  }, []);

  return (
    <div className="mb-8 p-5 md:p-6 rounded-xl border-2 border-on-surface bg-[#fff9db] shadow-[4px_4px_0px_#082016] flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#fdc425] border-2 border-on-surface flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#082016]">
        <span className="text-xl">{isClosed ? "⚠️" : "📢"}</span>
      </div>
      <div className="space-y-1 text-on-surface">
        <h3 className="font-(family-name:--font-jakarta) font-bold text-[16px] md:text-[18px]">
          {isClosed
            ? "Pendaftaran Telah Ditutup"
            : "Perpanjangan Waktu Pendaftaran & Submission"}
        </h3>
        <p className="font-(family-name:--font-inter) text-[14px] md:text-[15px] text-on-surface-variant leading-relaxed">
          {isClosed ? (
            <>
              Pendaftaran akun dan kompetisi telah resmi <strong>ditutup</strong> pada <strong>20 September 2026 pukul 23:59 WIB</strong>. Terima kasih atas partisipasi seluruh peserta.
            </>
          ) : (
            <>
              Pendaftaran peserta baru dan pengumpulan berkas karya / proposal (submission) diperpanjang hingga <strong>20 September 2026 pukul 23:59 WIB</strong> melalui{" "}
              <a
                href="https://dashboard.polbantelepati.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-primary"
              >
                Dashboard Peserta
              </a>
              .
            </>
          )}
        </p>
      </div>
    </div>
  );
}
