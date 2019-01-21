function likes(names) {

  let likes;
  switch (names.length) {
    case 0:
      likes = 'no one likes this';
      break;
    case 1:
      likes = names[0] + ' likes this';
      break;
    case 2:
      likes = names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      likes = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    case 4:
      likes = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
      break;
    default:
      likes = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
  return likes;
}

var result = likes(['Pawel', 'Adam', 'Łukasz', 'Tomasz', 'Janek', 'Zbigniew']);

console.log(result);