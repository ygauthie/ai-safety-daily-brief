export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
