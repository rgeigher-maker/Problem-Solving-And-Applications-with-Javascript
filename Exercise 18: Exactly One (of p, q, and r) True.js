let p=confirm("Enter p: (true:OK or false:CANCEL)");
let q=confirm("Enter q: (true:OK or false:CANCEL)");
let r=confirm("Enter r: (true:OK or false:CANCEL)");

let exactlyOne=p&&!q&&!r||!p&&q&&!r||!p&&!q&&r;

console.log(exactlyOne);