// 5. Find the number divisor of 3 and 5

let arrFor3 = [];
//let arrFor5 = [];
for (let i = 1; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arrFor3.push(i);
  }
  // else if (i % 5 === 0) {
  //   arrFor5.push(i);
  // }
}
console.log(`List of number divided by 3 and 5 ${arrFor3.length}: ${arrFor3}`);
//console.log(`List of number divided by 5 ${arrFor5.length}: ${arrFor5}`);
