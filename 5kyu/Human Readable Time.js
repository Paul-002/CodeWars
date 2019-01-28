function humanReadable(seconds) {

  let hours = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  return ((hours > 10) ? hours : '0' + hours) + ':' + ((min > 10) ? min : '0' + min) + ':' + ((sec > 10) ? sec : '0' + sec);
}
let result = humanReadable(86399);
console.log(result);