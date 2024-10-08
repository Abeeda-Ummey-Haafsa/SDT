// Importing the module
const readline = require("readline-sync");

const monthlySavings = (payment, livingExpenses) => {
  if (!Array.isArray(payment) || typeof livingExpenses != "number") {
    return "invalid input";
  }
  let Savings = 0;
  for (let i = 0; i < payment.length; i++) {
    if (payment[i] >= 3000) {
      payment[i] = payment[i] - payment[i] * 0.2;
      Savings += payment[i];
    } else {
      Savings += payment[i];
    }
  }
  //return Savings - livingExpenses;
  if (Savings - livingExpenses <= 0) {
    return "Earn More";
  } else {
    return `Total Savings: ${Savings - livingExpenses}`;
  }
};

//  Main function
let input = Number(readline.question(`Enter the number of payment received: `));
let monthlyPayment = [];
for (let i = 1; i <= input; ++i) {
  monthlyPayment.push(Number(readline.question(`Payment amount ${i}: `)));
}
let livingExpense = Number(readline.question(`Live expense :`));
console.log(monthlySavings(monthlyPayment, livingExpense));
