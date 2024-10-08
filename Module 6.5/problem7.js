const removingDuplicate = (numbers) => {
  const uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    // using find() instead
    if (!uniqueNumbers.find((num) => num === numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
    // "===" ensures that JavaScript doesn’t automatically convert types behind the scenes

    // using indexOf() instead
    // if (uniqueNumbers.indexOf(numbers[i]) === -1) {
    //   uniqueNumbers.push(numbers[i]);
    // }
  }
  return uniqueNumbers;
};

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// const uniqueArray = removingDuplicate(numbers);
// console.log(...uniqueArray);
console.log(...removingDuplicate(numbers));
