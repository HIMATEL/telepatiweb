// ponytail: hardcoded WIB (+07:00). upgrade: dynamic API/env when multi-stage dates needed
// Agridata: last registration 25 Okt 2026 (perubahan jadwal -> final 07 Nov 2026)
export const AGRIDATA_DEADLINE = new Date("2026-10-25T23:59:59+07:00");
// AgroIoT: pendaftaran & submission ditutup 20 Sep 2026
export const AGROIOT_DEADLINE = new Date("2026-09-20T23:59:59+07:00");

// Situs-wide (CTA header/hero) ikut registrasi yang masih buka = Agridata
export const REGISTRATION_DEADLINE = AGRIDATA_DEADLINE;

export function isRegistrationClosed(): boolean {
  return Date.now() > REGISTRATION_DEADLINE.getTime();
}
