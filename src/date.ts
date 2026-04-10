const TZ = "America/Toronto";

export function today(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: TZ });
}

export function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-CA", { timeZone: TZ });
}
