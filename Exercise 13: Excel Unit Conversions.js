let days=parseFloat(prompt("Enter a number of days: "));

let wholeDays=Math.trunc(days);

let totalHours=days*24;
console.log(totalHours);

let wholeHours=Math.trunc(totalHours);

let remainingHours=wholeHours-wholeDays*24;
console.log(remainingHours);

let totalMinutes=totalHours*60;
console.log(totalMinutes);

let wholeMinutes=Math.trunc(totalMinutes);

let remainingMinutes=wholeMinutes-wholeHours*60;
console.log(remainingMinutes);

let totalSeconds=totalMinutes*60;
console.log(totalSeconds);

let wholeSeconds=Math.trunc(totalSeconds);

let remainingSeconds=wholeSeconds-wholeMinutes*60;
console.log(remainingSeconds);

console.log(remainingHours,":",remainingMinutes,":",remainingSeconds);