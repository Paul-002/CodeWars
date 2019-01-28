function pigIt(str) {
  let word = str.split(' ');
  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    let wi = word[i];
    (wi[0] != '?' && wi[0] != '!') ? newArr.push(wi.substr(1, wi.length) + wi[0] + 'ay'): newArr.push(wi[0]);
  }
  return newArr.join(' ')
}
// Without Regex

let result = pigIt('O Pig latin is cool ?');
console.log(result);