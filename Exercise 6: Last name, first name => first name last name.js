let enteredName = prompt("Enter full name (last, first):");
let commaPosition = enteredName.indexOf(",");
let firstName = enteredName.substring(commaPosition + 2, enteredName.length);
let lastName = enteredName.substring(0, commaPosition);
console.log(firstName + " " + lastName);