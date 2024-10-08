const findingBiggestName = (arrayOfNames) => {
  let biggestName = arrayOfNames[0];
  for (let i = 1; i < arrayOfNames.length; i++) {
    if (arrayOfNames[i].length > biggestName.length) {
      biggestName = arrayOfNames[i];
    }
  }
  return biggestName;
};

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigFriends = findingBiggestName(friends);
console.log(bigFriends);
