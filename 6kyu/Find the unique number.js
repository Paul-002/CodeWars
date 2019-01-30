function findUniq(arr) {

  let arrA = [];
  let arrB = [];
  let i = 1;
  
  (arr[0] === arr[1]) ? false: (arr[1] === arr[2]) ? arrB.push(arr[0]) : arrB.push(arr[1]); 
  while (arrB.length === 0) {
    (arr[i] === arr[i + 1]) ? arrA.push(arr[i]): arrB.push(arr[i + 1]);
    i++;
  }
  return arrB[0]
}

let result = findUniq([1, 1, 1, 2, 1, 1]);
console.log(result);

/* worse version - 3k ms for larger arrays 
 function findUniq(arr) {
  let ident = [];
  let nonident = [];
  arr.map((e) => (arr[0] != e) ? nonident.push(e) : ident.push(e) );
  return (ident.length < nonident.length) ? ident[0] : (ident.length > nonident.length) ? nonident[0] : false
 }
*/

