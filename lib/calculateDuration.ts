export function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate + '-01');
  const end = endDate === 'present' ? new Date() : new Date(endDate + '-01');

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths}M`;
  if (remainingMonths === 0) return `${years}Y`;
  return `${years}Y ${remainingMonths}M`;
}

export function calculateTotalExperience(earliestStart: string): string {
  const start = new Date(earliestStart + '-01');
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  return `${years}+`;
}
