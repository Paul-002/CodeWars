function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1 && !(num <= 0);
}

let result = isPrime(-1);

console.log(result);