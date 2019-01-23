function createPhoneNumber(numbers) {
  numbers.unshift('(');
  numbers.splice(4, 0, ')', ' ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

let result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(result);