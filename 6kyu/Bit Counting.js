var countBits = function (n) {

  let bit = n.toString(2);
  let newArr = [0];
  
  for (let i = 0; i <= bit.length; i++) {
    (bit[i] === '1') ? newArr.push(parseInt(bit[i], 10)): false
  }
  return newArr.reduce((a, b) => a + b);
};

let result = countBits(0);

console.log(result);