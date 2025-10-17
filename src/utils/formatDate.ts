export function formatToDDMMYYYY(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startDay = start.getDate();
  const startMonth = start.toLocaleString("default", { month: "long" });
  const endDay = end.getDate();
  const endMonth = end.toLocaleString("default", { month: "long" });
  const year = end.getFullYear();

  // If the month is same
  if (startMonth === endMonth) {
    return `${startDay} - ${endDay} ${endMonth}, ${year}`;
  }

  // If the month is different
  return `${startDay} ${startMonth} - ${endDay} ${endMonth}, ${year}`;
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);

  // Define short month names
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = shortMonths[date.getMonth()];

  return `${month} ${day}`;
}
