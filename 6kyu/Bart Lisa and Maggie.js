function list(names) {

  let length = names.length;
  let newArr = [];

  for (let i = 0; i < names.length - 2; i++) {
    newArr.push(names[i].name);
  };

  return (length > 1) ? newArr.push('') && newArr.join(', ') + (names[length - 2].name) + " & " + (names[length - 1].name) :
    (length === 1) ? names[0].name : '';
  /*
    if (length > 1) {
      newArr.push('');
      return newArr.join(', ') + (names[length - 2].name) + " & " + (names[length - 1].name);

    } else if (length === 1) {
      return names[0].name;

    } else {
      return '';
    }
  */
}

let result = list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])

console.log(result);