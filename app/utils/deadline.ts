// ponytail: hardcoded WIB (+07:00). upgrade: dynamic API/env when multi-stage dates needed
export const REGISTRATION_DEADLINE = new Date("2026-09-20T23:59:59+07:00");

export function isRegistrationClosed(): boolean {
  return Date.now() > REGISTRATION_DEADLINE.getTime();
}
