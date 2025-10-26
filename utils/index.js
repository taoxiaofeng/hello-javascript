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
// let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]], 14, [15, [16, [17, [18]]]]];

// const flatten = (array) => {
//   while (array.some(item => Array.isArray(item))) {
//     array = [].concat(...array);
//   }
//   return array;
// }

// console.log(flatten(arr));

// const flatten = (array) => {
//   return [].concat(...array.map(item => Array.isArray(item) ? flatten(item) : item));
// }

// console.log(flatten(arr))

/** 两数之和 */
// const numbers = [2, 7, 11, 15];
// const target = 9;
// const twoSum = (numbers, target) => {
//   for (let i = 0; i < numbers.length; i++) {
//     const complement = target - numbers[i];
//     const index = numbers.indexOf(complement, i + 1);
//     if (index !== -1) {
//       return [i, index];
//     } 
//   }
// }

// const twoSum = (numbers, target) => {
//   const numMap = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     const complement = target - numbers[i];
//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }
//     numMap.set(numbers[i], i);
//   }
//   return null;
// }
// console.log(twoSum(numbers, target));

/**
 * 给定 A/B/C 三个请求， 希望C 在 A 和 B 都完成后再执行， 怎么实现？
  方式一： 使用 Promise.all
  方式二： 使用 async/await
  方式三： 使用回调函数
  方式四： 使用事件监听器
  方式五： 使用计数器
  方式六： 使用生成器函数
  方式七： 使用状态管理库
  方式八： 使用第三方库如 async.js
 */
const requestA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Request A completed');
      resolve('A');
    }, 1000);
  });
};

const requestB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Request B completed');
      resolve('B');
    }, 1500);
  });
};

const requestC = () => {
  console.log('Request C executed after A and B');
};

// 方式一： 使用 Promise.all
// Promise.all([requestA(), requestB()]).then(() => {
//   requestC();
// });

// 方式二： 使用 async/await
// const executeRequests = async () => {
//   await requestA();
//   await requestB();
//   requestC();
// };
// executeRequests();

// 方式三： 使用回调函数
// const requestAWithCallback = (callback) => {
//   setTimeout(() => {
//     console.log('Request A completed');
//     callback();
//   }, 1000);
// };

// const requestBWithCallback = (callback) => {
//   setTimeout(() => {
//     console.log('Request B completed');
//     callback();
//   }, 1500);
// };

// let completedRequests = 0;
// const checkAndExecuteC = () => {
//   completedRequests++;
//   if (completedRequests === 2) {
//     requestC();
//   }
// };

// requestAWithCallback(checkAndExecuteC);
// requestBWithCallback(checkAndExecuteC);

// 方式四： 使用事件监听器
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('requestCompleted', () => {
//   completedRequests++;
//   if (completedRequests === 2) {
//     requestC();
//   }
// });

// requestA().then(() => eventEmitter.emit('requestCompleted'));
// requestB().then(() => eventEmitter.emit('requestCompleted'));

// 方式五： 使用计数器
// let counter = 0;
// const incrementCounter = () => {
//   counter++;
//   if (counter === 2) {
//     requestC();
//   }
// } ;

// requestA().then(incrementCounter);
// requestB().then(incrementCounter);

// 方式六： 使用生成器函数
// function* requestGenerator() {
//   yield requestA();
//   yield requestB();
//   requestC();
// }

// const gen = requestGenerator();
// gen.next().value.then(() => gen.next().value.then(() => gen.next()));

// 方式七： 使用状态管理库
// 略

// 方式八： 使用第三方库如 async.js
// 略     