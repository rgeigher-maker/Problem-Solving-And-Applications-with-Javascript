let enteredTextWithS = prompt("Enter a string with an s:");
let sPosition = enteredTextWithS.indexOf("s");
let beforeS = enteredTextWithS.substring(0, sPosition);
let afterS = enteredTextWithS.substring(sPosition + 1, enteredTextWithS.length);
console.log(beforeS + "$" + afterS);