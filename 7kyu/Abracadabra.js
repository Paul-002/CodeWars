function getCount(str) {
  var vowelsCount = 0;
  var splitWord = str.split('');

  for (var i = 0; i <= splitWord.length; i++) {
    switch (splitWord[i]) {
      case 'a':
        vowelsCount += 1; //++ will be better
        break;
      case 'e':
        vowelsCount += 1;
        break;
      case 'i':
        vowelsCount += 1;
        break;
      case 'o':
        vowelsCount += 1;
        break;
      case 'u':
        vowelsCount += 1;
        break;
    }
  }
  return vowelsCount;
}

var result = getCount("abracadabra");

console.log(result);