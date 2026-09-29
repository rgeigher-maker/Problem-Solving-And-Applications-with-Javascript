let pressedLevel = parseInt(prompt("Please enter the floor that you want to go to: "));
let actualLevel = pressedLevel;

if (pressedLevel >= 13) {
  actualLevel = pressedLevel - 1;
}

console.log(actualLevel);