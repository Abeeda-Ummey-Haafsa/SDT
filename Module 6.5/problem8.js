const findingBiggestNumber = (numbers) => {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(findingBiggestNumber(numbers));
