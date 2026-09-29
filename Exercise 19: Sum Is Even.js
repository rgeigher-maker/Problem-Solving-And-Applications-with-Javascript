let a = parseInt(prompt("a"));
let b = parseInt(prompt("b"));
let c = parseInt(prompt("c"));

let isAEven = (a % 2 == 0);
let isBEven = (b % 2 == 0);
let isCEven = (c % 2 == 0);

let isSumEven = (isAEven && isBEven && isCEven) ||
                (isAEven && !isBEven && !isCEven) ||
                (!isAEven && isBEven && !isCEven) ||
                (!isAEven && !isBEven && isCEven);

console.log(isSumEven);