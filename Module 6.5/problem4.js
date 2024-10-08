// 4. Check if the number is leap year

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter a number: `, (input) => {
  if (input % 400 == 0) {
    console.log(input, " is leap year");
  } else if (input % 100 == 0) {
    console.log(input, " is not a leap year");
  } else if (input % 4 == 0) {
    console.log(input, " is leap year");
  } else {
    console.log(input, " is not leap year");
  }
  rl.close();
});
