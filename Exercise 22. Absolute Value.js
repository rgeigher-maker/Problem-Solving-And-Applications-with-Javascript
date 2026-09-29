let number = parseFloat(prompt("Enter a number:"));

let absoluteValue;

if (number < 0) {
    absoluteValue = -number;
} else {
  absoluteValue = number;
}

console.log(absoluteValue);
