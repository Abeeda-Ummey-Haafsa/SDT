const readline = require("readline-sync");

let year = Number(readline.question(`Enter year: `));
if (year % 2 == 0) {
  console.log(year, " is an even number");
} else {
  console.log(year, " is an odd number");
}
