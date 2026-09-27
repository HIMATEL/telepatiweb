"use client";

import { useEffect, useState } from "react";
import { AGROIOT_DEADLINE, AGRIDATA_DEADLINE } from "../utils/deadline";

// ponytail: 1 komponen, 2 track — AgroIoT (tutup 20 Sep) & AgriData (tutup 25 Okt)
export default function RegistrationDisclaimer({
  track,
}: {
  track: "agroIot" | "agriData";
}) {
  const deadline = track === "agroIot" ? AGROIOT_DEADLINE : AGRIDATA_DEADLINE;
  const name = track === "agroIot" ? "AgroIoT" : "AgriData";
  const deadlineText =
    track === "agroIot" ? "20 September 2026" : "25 Oktober 2026";
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setIsClosed(Date.now() > deadline.getTime());
  }, [deadline]);

  return (
    <div className="mb-8 p-5 md:p-6 rounded-xl border-2 border-on-surface bg-[#fff9db] shadow-[4px_4px_0px_#082016] flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#fdc425] border-2 border-on-surface flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#082016]">
        <span className="text-xl">{isClosed ? "⚠️" : "📢"}</span>
      </div>
      <div className="space-y-1 text-on-surface">
        <h3 className="font-(family-name:--font-jakarta) font-bold text-[16px] md:text-[18px]">
          {isClosed
            ? `Pendaftaran & Submission ${name} Telah Ditutup`
            : `Perpanjangan Waktu Pendaftaran & Submission ${name}`}
        </h3>
        <p className="font-(family-name:--font-inter) text-[14px] md:text-[15px] text-on-surface-variant leading-relaxed">
          {isClosed ? (
            <>
              Pendaftaran akun dan pengumpulan proposal / submission karya{" "}
              <strong>{name}</strong> telah resmi <strong>ditutup</strong> pada{" "}
              <strong>{deadlineText} pukul 23:59 WIB</strong>
              . Terima kasih atas partisipasi seluruh peserta. Babak final
              dilaksanakan <strong>07 November 2026</strong>.
            </>
          ) : (
            <>
              Pendaftaran peserta baru dan pengumpulan berkas karya / proposal
              (submission) <strong>{name}</strong> diperpanjang hingga{" "}
              <strong>{deadlineText} pukul 23:59 WIB</strong> melalui{" "}
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
