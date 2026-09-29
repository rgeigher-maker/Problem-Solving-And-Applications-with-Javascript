let isMetsFan=confirm("Are you a Mets fan? (true:OK or false:CANCEL)");
let isYankeesFan=confirm("Are you a Yankees fan? (true:OK or false:CANCEL)");

let canBeTrueFan=!(isMetsFan&&isYankeesFan);

console.log(canBeTrueFan);