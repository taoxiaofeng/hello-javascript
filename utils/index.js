/** unshift */
// let arr = [1, 2, 3];


// Array.prototype.myUnshift = function () {
//   const len = arguments.length;
//   for (let i = len - 1; i >= 0; i--) {
//     const element = arguments[i];
//     this.splice(0, 0, element);
//   }
//   return this.length;
// }

// console.log(arr.myUnshift(3,2,1))

/**
 * 数组去重
 */
// let arr = [1, 2, 2, 3, 4, 4, 5];

// Array.prototype.myUnique = function () {
//   const res = [];
//   const obj = {};
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     if (!obj[element]) {
//       obj[element] = 1;
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(arr.myUnique())

/**
 * 数组随机数
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const randomArr = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     const temp = array[i];
//     array[i] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }
// console.log(randomArr(arr))

/**
 * 数组扁平化
 */
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]], 14, [15, [16, [17, [18]]]]];

// const flatten = (array) => {
//   while (array.some(item => Array.isArray(item))) {
//     array = [].concat(...array);
//   }
//   return array;
// }

// console.log(flatten(arr));

const flatten = (array) => {
  return [].concat(...array.map(item => Array.isArray(item) ? flatten(item) : item));
}

console.log(flatten(arr))