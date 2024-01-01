export const formatDateWithMonthAbbreviation = (date) => {
  const monthsAbbreviation = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const year = date.getFullYear();
  const monthAbbreviation = monthsAbbreviation[date.getMonth()];

  return `${year} ${monthAbbreviation}`;
}