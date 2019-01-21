function digital_root(n) {

  let newArr = [];
  newArr.push(n);
  
  while (newArr >= 10) {
    let newVal = newArr.toString().split('').map(Number).reduce((a, b) => a + b);
    newArr.pop();
    newArr.push(newVal);
  }
  return newArr[0]
}

var result = digital_root(7087);

console.log(result);