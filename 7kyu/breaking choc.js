function breakChocolate(n, m) {

  if (n !== 0 && m !== 0) {
    var multip = n * m;
    return multip - 1;
  } else {
    return 0;
  }
}

var result = breakChocolate(5, 5);

console.log(result);