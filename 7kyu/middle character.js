function getMiddle(e) {
  var evenOrOdd = e.length % 2 === 0;
  var inTheMiddle = e.length / 2;

  if (evenOrOdd) {
    return e[--inTheMiddle] + e[++inTheMiddle];
  } else {
    if (e !== 1) {
      return e[Math.round(--inTheMiddle)];
    } else {
      return e;
    }
  }
}

var result = getMiddle("tomek");

console.log(result);
