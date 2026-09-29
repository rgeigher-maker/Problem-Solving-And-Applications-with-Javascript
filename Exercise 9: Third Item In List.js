let itemList = prompt("Enter at least 4 items separated by commas:");
console.log(itemList);

let afterFirstComma = itemList.substring(itemList.indexOf(",") + 1, itemList.length);
console.log(afterFirstComma);

let afterSecondComma = afterFirstComma.substring(afterFirstComma.indexOf(",") + 1, afterFirstComma.length);
console.log(afterSecondComma);

console.log(afterSecondComma.substring(0, afterSecondComma.indexOf(",")));