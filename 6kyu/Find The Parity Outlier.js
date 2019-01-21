function findOutlier(integers) {
  var oddNumbers = integers.filter((e) => e % 2 != 0);
  return (oddNumbers.length === 1) ? parseInt(oddNumbers, 10) : parseInt(integers.filter((e) => e % 2 == 0), 10);
}

var result = findOutlier([2, 3, 8, 12, 20]);

console.log(result);

// Other version without unnecessary parseInt()
/*
function findOutlier(integers) {
  var oddNumbers = integers.filter((e) => e % 2 != 0);
  return (oddNumbers.length === 1) ? oddNumbers[0] : integers.filter((e) => e % 2 == 0)[0];
}

var result = findOutlier([2, 3, 8, 12, 20]);

console.log(result);
*/