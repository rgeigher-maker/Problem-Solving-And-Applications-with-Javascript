let email = prompt("Enter you email here: ");
console.log(email.substring(email.indexOf("@") + 1, email.length));
console.log(email.substring(email.indexOf("@") + 1, email.indexOf(".")));