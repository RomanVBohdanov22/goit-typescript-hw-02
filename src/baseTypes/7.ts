/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

/*
enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}

export = {};
*/
/*
enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  // handle response
}

respond(HttpCodes.OK);

export {};

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
//let wrkday = { day: DaysOfWeek.FRIDAY };

/*if (wrkday.day === DaysOfWeek.SATURDAY || wrkday.day === DaysOfWeek.SUNDAY) {
  console.log("This is Weekend!");
}*/

function isWeekend(dayOfWeek: DaysOfWeek): boolean {
  return dayOfWeek === DaysOfWeek.SUNDAY || dayOfWeek === DaysOfWeek.SATURDAY;
}

console.log(isWeekend(DaysOfWeek.SUNDAY));
console.log(isWeekend(DaysOfWeek.MONDAY));
console.log(isWeekend(DaysOfWeek.SATURDAY));
