"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExtendedRegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Active date range: Now until 20 September 2026 23:59:59 WIB
    const endDate = new Date("2026-09-20T23:59:59+07:00");
    const now = new Date();

    const isWithinDateRange = now <= endDate;
    const isDismissed = sessionStorage.getItem("telepati_ext_reg_closed");

    // ponytail: simple date-gate + sessionStorage flag, upgrade to remote config if dates dynamic
    if (isWithinDateRange && !isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("telepati_ext_reg_closed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Extended Registration AgroIoT"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={handleClose}
    >
      <div
        className="relative max-w-xs sm:max-w-md w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top-Right Floating on Outline */}
        <button
          onClick={handleClose}
          aria-label="Tutup Dialog"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 w-10 h-10 rounded-full bg-white border-2 border-on-surface flex items-center justify-center text-on-surface shadow-[2px_2px_0px_#082016] transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Pure Image with Outline & Shadow */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 border-on-surface shadow-[6px_6px_0px_#082016] bg-black">
          <Image
            src="/images/extended-registration-iot.png"
            alt="Extended Registration TELEPATI 8.0 AgroIoT Innovation Challenge"
            width={600}
            height={850}
            priority
            className="w-full h-auto object-contain max-h-[72vh]"
          />
        </div>

        {/* CTA Button */}
        <Link
          href="https://dashboard.polbantelepati.tech"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-on-surface bg-primary px-6 py-3 font-(family-name:--font-jakarta) text-[15px] font-bold text-white shadow-[3px_3px_0px_#082016] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#082016] active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          <span>Daftar Sekarang</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
