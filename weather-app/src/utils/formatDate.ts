import moment from "moment";
export function formatDateToday(): string {
  const dayWeek = moment().format("ddd");

  const dayNumber = moment().format("D");

  const month = moment().format("MMM");  

  return `${dayWeek}, ${dayNumber} ${month}`;
}

export function formatDateAdd(dayAdd: number) {
  const dayWeek = moment().add(dayAdd, 'days').format("ddd");

  const dayNumber = moment().add(dayAdd, 'days').format("D");

  const month = moment().add(dayAdd, 'days').format("MMM");  

  return `${dayWeek}, ${dayNumber} ${month}`;
}
