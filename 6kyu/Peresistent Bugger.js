function persistence(num) {

  let newArr = [];
  let i = 0;
  newArr.push(num);

  while (newArr > 9) {
    let stringNumb = newArr.toString().split('');
    let stringToInt = stringNumb.map(Number);
    let resultMultip = stringToInt.reduce((numb1, numb2) => numb1 * numb2);
    newArr.pop();
    newArr.push(resultMultip);
    i++;
  }
  return i
}

var result = persistence(2435);

console.log(result);