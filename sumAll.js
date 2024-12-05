function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  let sum = 0;
    
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45


// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
//
// console.log(sumArray([1, 4])); // 5
// console.log(sumArray([4, 1])); // 5
// console.log(sumArray([5, 10])); // 15
