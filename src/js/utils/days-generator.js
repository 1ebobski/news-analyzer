import { russianShortWeekDays } from "../constants/russian-short-week-days.js";

const getLastNDays = (daysNumber) => {
  let nLastDaysArray = Array.from(Array(daysNumber).keys())
    .reverse()
    .map((daysAgo) => {
      let day = new Date();
      day.setDate(day.getDate() - daysAgo);
      return {
        date: day.getDate(),
        weekDay: russianShortWeekDays[day.getDay()],
      };
    });
  //     (element, index) => {
  //     let day = new Date();
  //     day.setDate(day.getDate() - daysNumber + index);
  //     console.log(day);
  //     return day;
  //   });

  return nLastDaysArray;
};

export { getLastNDays };
