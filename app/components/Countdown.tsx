"use client";

import { useEffect, useState } from "react";

// ponytail: timezone hardcoded WIB. upgrade: use Intl.DateTimeFormat or a date lib when DST matters
const DEADLINE = new Date("2026-08-30T23:59:00+07:00");

function calcTimeLeft() {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
    expired: false,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-(family-name:--font-jakarta) text-3xl md:text-5xl font-extrabold tabular-nums text-primary">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-wider text-on-surface-variant mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(() => calcTimeLeft());

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Suppress mismatch: render empty on server, real countdown after mount
  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-3" suppressHydrationWarning>
        <p className="text-sm uppercase tracking-widest text-on-surface-variant">
          Pendaftaran ditutup dalam
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          <Unit value={0} label="hari" />
          <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
          <Unit value={0} label="jam" />
          <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
          <Unit value={0} label="menit" />
          <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
          <Unit value={0} label="detik" />
        </div>
      </div>
    );
  }

  if (time.expired) {
    return (
      <p className="text-lg md:text-xl font-semibold text-primary text-center">
        Pendaftaran telah ditutup!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm uppercase tracking-widest text-on-surface-variant">
        Pendaftaran ditutup dalam
      </p>
      <div className="flex items-center gap-4 md:gap-6">
        <Unit value={time.days} label="hari" />
        <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
        <Unit value={time.hours} label="jam" />
        <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
        <Unit value={time.minutes} label="menit" />
        <span className="text-3xl md:text-5xl font-extrabold text-on-surface-variant select-none">:</span>
        <Unit value={time.seconds} label="detik" />
      </div>
    </div>
  );
}
