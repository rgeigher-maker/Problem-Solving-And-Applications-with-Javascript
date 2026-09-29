let isASmile=confirm("Is monkey A smiling? (true:OK or false:CANCEL)");
let isBSmile=confirm("Is monkey B smiling? (true:OK or false:CANCEL)");

let inTrouble=isASmile&&isBSmile||!isASmile&&!isBSmile;

console.log(inTrouble);