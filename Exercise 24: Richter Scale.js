let richter = parseFloat(prompt("Enter Richter scale magnitude:"));

if (richter >= 8.0) {
    console.log("Most structures fall");
} else if (richter >= 7.0) {
    console.log("Many buildings destroyed");
} else if (richter >= 6.0) {
    console.log("Many buildings considerably damaged, some collapse");
} else if (richter >= 4.5) {
    console.log("Damage to poorly constructed buildings");
} else {
    console.log("No destruction of buildings");
}