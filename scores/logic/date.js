import { format, closestIndexTo, differenceInMinutes } from "date-fns";
import { nlBE } from "date-fns/locale";
import { DUTCH_MONTHS, ENGLISH_MONTHS } from "./constants/date";

export const convertToDateList = (list) => {
  const temp = list.map((e) => new Date(e));
  temp.sort((a, b) => a - b);
  return temp;
};

export const findClosestDateIndex = (list) => {
  // const today = new Date("29 october 2022 15:15");
  const today = new Date();
  return closestIndexTo(today, list);
};

export const formatDay = (date) => {
  if (date) return format(date, "dd MMM", { locale: nlBE });
  return "";
};

export const formatDateToString = (date) => {
  if (date) return format(date, "dd MMMM yyyy", { locale: nlBE });
  return "";
};

export const getGameTime = (date, time) => {
  try {
    const start = new Date(`${date} ${time}`);
    const end = new Date();
    // const end = new Date("15 october 2022 15:15");
    const diff = differenceInMinutes(end, start);

    if (diff < 1) return time;
    if (1 <= diff && diff <= 35) return `${diff}'`;
    if (35 < diff && diff < 50) return "HT";
    if (51 <= diff && diff <= 85) return `${diff - 15}'`;
    if (start.toString() === "Invalid Date") return time;
    return "FT";
  } catch (err) {
    return time;
  }
};

export const convertToEnglishDate = (text) => {
  for (let i = 0; i < ENGLISH_MONTHS.length; i++) {
    if (text.includes(ENGLISH_MONTHS[i])) {
      return text.replace(ENGLISH_MONTHS[i], DUTCH_MONTHS[i]);
    }
  }
  return text;
};
