function iqTest(numbers) {

  var arrEven = [];
  var arrOdd = [];
  var splitNumbers = numbers.split(' ');

  splitNumbers.map(function(e) {
    var evenOrOdd = e % 2 === 0;
    if (evenOrOdd) {
      return arrEven.push(e);
    } else {
      return arrOdd.push(e);
    }
  });
  if (arrEven.length > arrOdd.length) {
    var odd = arrOdd.toString();
    return splitNumbers.indexOf(odd) + 1;
  } else {
    var even = arrEven.toString();
    return splitNumbers.indexOf(even) + 1;
  }
}

var result = iqTest("2 4 8 7 10");

console.log(result);