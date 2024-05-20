import type { Duration } from '../types';

export const calculateDurationInMonths = (from: Date, to: Date): number => {
    let months;
    months = (to.getFullYear() - from.getFullYear()) * 12;
    months -= from.getMonth();
    months += to.getMonth();
    return months <= 0 ? 0 : months;
}

export const calculateDuration = (from: Date, to: Date): Duration => {
  const months = calculateDurationInMonths(from, to);
  const years = Math.floor(months/12);
  const remainingMonths = months%12;
  return { years: years, months: remainingMonths };
};

export const calculateAgeToDate = (birthday: Date, to: Date): number => {
  const toBirthday = new Date(`${to.getFullYear()}-${birthday.getMonth() + 1}-${birthday.getDate()}`);
  const age = to.getFullYear() - birthday.getFullYear() + (to >= toBirthday ? 0 : -1);
  return age;
};