let isWeekday=confirm("Is it a weekday? (true:OK or false:Cancel)");
let isVacation=confirm("Is it a vacation? (true:OK or false:Cancel)");

let canSleepIn=!isWeekday||isVacation;

console.log(canSleepIn);