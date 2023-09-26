import { monthTitle } from '^/constants';

export function convertDateToString(date: Date) {
  return `${date.getFullYear()}년 ${
    monthTitle[date.getMonth()]
  } ${date.getDate()}일`;
}
