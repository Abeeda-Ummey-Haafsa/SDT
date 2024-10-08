// 3. Sort an array in ascending order

// Importing the module
const readline = require("readline-sync");

const sortingArray = (ar) => {
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i; j < ar.length; j++) {
      if (ar[i] > ar[j]) {
        let temp = ar[j];
        ar[j] = ar[i];
        ar[i] = temp;
      }
    }
  }
  return ar;
};

//Main module
let input = Number(readline.question(`Enter the array size: `));
let array = [];
for (let i = 1; i <= input; ++i) {
  array.push(Number(readline.question()));
}

console.log(sortingArray(array));
