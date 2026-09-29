let milliseconds=parseFloat(prompt("Please enter a number of milliseconds: "));

let totalSeconds=Math.trunc(milliseconds/1000);
console.log(totalSeconds);

let totalMinutes=Math.trunc(totalSeconds/60);
console.log(totalMinutes);

let remainingSeconds=totalSeconds-totalMinutes*60;
console.log(remainingSeconds);

let totalHours=Math.trunc(totalMinutes/60);
console.log(totalHours);

let remainingMinutes=totalMinutes-totalHours*60;
console.log(remainingMinutes);

let totalDays=Math.trunc(totalHours/24);
console.log(totalDays);

let remainingHours=totalHours-totalDays*24;
console.log(remainingHours);

console.log(remainingHours,":",remainingMinutes,":",remainingSeconds);