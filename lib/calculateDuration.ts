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

export function calculateCompanyDuration(
  roles: { startDate: string; endDate: string }[]
): string {
  if (roles.length === 0) return '';

  // Earliest start across all roles
  const earliestStart = [...roles]
    .sort((a, b) => a.startDate.localeCompare(b.startDate))[0].startDate;

  // Latest end ('present' beats any date string)
  const hasPresent = roles.some((r) => r.endDate === 'present');
  const latestEnd = hasPresent
    ? 'present'
    : [...roles].sort((a, b) => b.endDate.localeCompare(a.endDate))[0].endDate;

  return calculateDuration(earliestStart, latestEnd);
}

export function calculateTotalExperience(earliestStart: string): string {
  const start = new Date(earliestStart + '-01');
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  return `${years}+`;
}
