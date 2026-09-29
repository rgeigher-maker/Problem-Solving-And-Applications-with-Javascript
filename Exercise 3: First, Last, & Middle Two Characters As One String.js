let s = prompt("Enter an even number of characters");
let firstChar = s.charAt(0);
let lastChar = s.charAt(s.length - 1);
let positionOfSecondMiddleChar = s.length / 2;
let positionOfFirstMiddleChar = positionOfSecondMiddleChar - 1;
let firstMiddleChar = s.charAt(positionOfFirstMiddleChar);
let secondMiddleChar = s.charAt(positionOfSecondMiddleChar);
console.log(s + ": " + firstChar + lastChar + firstMiddleChar + secondMiddleChar);