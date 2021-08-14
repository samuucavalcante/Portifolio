import moment from "moment";
export default function formatDateToday(): string {
  const dayWeek = moment().format("ddd");

  const dayNumber = moment().format("D");

  const month = moment().format("MMM");  

  return `${dayWeek}, ${dayNumber} ${month}`;
}
