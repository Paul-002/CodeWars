function narcissistic(value) {
	let digits = value.toString().split('');
	let realDigits = digits.map(Number);
	return (realDigits.map((e) => e ** realDigits.length).reduce((a, b) => a + b) === value) ? true : false;
}

let result = narcissistic(92727);
console.log(result);
console.time(narcissistic)