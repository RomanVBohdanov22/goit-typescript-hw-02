/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(dayOfWeek: DaysOfWeek): boolean {
  return dayOfWeek === DaysOfWeek.SUNDAY || dayOfWeek === DaysOfWeek.SATURDAY;
}

console.log(isWeekend(DaysOfWeek.SUNDAY));
console.log(isWeekend(DaysOfWeek.MONDAY));
console.log(isWeekend(DaysOfWeek.SATURDAY));
