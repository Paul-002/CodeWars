function spinWords(evt) {
  var arr = [];

  arr.push(evt.split(' '));

  var checkTheText = arr[0].map(function(e) {

    if (e.length >= 5) {
      return e.split("").reverse().join("");
    } else {
      return e
    }
  });
  
  return checkTheText.join(' ');
}

var result = spinWords("Hey fellow warriors");

console.log(result);
