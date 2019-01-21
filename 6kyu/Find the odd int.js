function findOdd(A) {
  let newArray = {};
  A.forEach((e) => (newArray[e]) ? newArray[e]++ : newArray[e] = 1)

  for (let e in newArray) {
    if (newArray[e] % 2)
      return +e
  }
  return newArray;
}

var result = findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);

console.log(result);