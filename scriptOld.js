// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function myFilter(array, callback) {
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             newArray.push(array[i]);
//         }
//     }

//     return newArray;
// }

// let filteredArray = myFilter(arr, (item) => item % 2 === 0);

// console.log(filteredArray);

//------------------------------------//

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function myFill(arr, value, start, end) {
//     for (let i = start; i < end; i++) {
//         arr[i] = value;
//     }
//     return arr;
// }

// myFill(data, 'r', 6, 9);

// console.log(data);

//------------------------------------//

// function toSquare(array) {
//   return array.map((num) => num * num);
// }

// console.log(toSquare([5, 7, 8, 3]));

//------------------------------------//

// function toOdd(array){
//     return array.filter((num) => num % 2 !== 0);
// }

// console.log(toOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//------------------------------------//

// function toEven(array){
//     return array.filter((num) => num % 2 === 0);
// }

// console.log(toEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//------------------------------------//

// function findFirstNegativeNumber(array){
//     return array.find((num) => num < 0);
// }

// console.log(findFirstNegativeNumber([1, 2, -2, 3, 5, -11, -5, -6]));

//------------------------------------//

// function isAllPositive(array){
//     return array.every((num) => num > 0);
// }

// console.log(isAllPositive([1, 2, -2, 3, 5, -11, -5, -6]));

//------------------------------------//

// function removeDuplicates(array) {
//   return array.filter((element, index) => array.indexOf(element) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6]));

//------------------------------------//

// const cities = ["Yerevan", "Gyumri", "Aparan"];
// const result = {};

// for (let i = 0; i < cities.length; i++) {
//   result[i] = cities[i];
// }

// console.log(result);