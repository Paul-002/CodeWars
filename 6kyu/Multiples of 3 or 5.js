function solution(number) {
	newArr = [0];
	for (let i = 1; i < number; i++) {
		(i % 3 === 0 || i % 5 === 0) ? newArr.push(i): false
	}
	return newArr.reduce((a, b) => a + b);
}
let result = solution(10);
console.log(result);