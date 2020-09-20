/**
 * 浅拷贝
 */

const $ = require('../../node_modules/jquery/dist/jquery');

// const obj = {
//     a: 1,
//     b: 2
// }

// function simpleClone(obj) {
//     const cloneObj = {};

// es3
// for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         cloneObj[key] = obj[key];
//     }
// }

// es6
// for (const key of Object.keys(obj)) {
//     cloneObj[key] = obj[key];
// }

// for (const [key, value] of Object.entries(obj)) {
//     cloneObj[key] = value;
// }

// es5 defineProperty;
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

// Object.getOwnPropertyNames(obj).forEach(function(key) {
//     // cloneObj[key] = obj[key];
//     var des = Object.getOwnPropertyDescriptor(obj, key);
//     Object.defineProperty(cloneObj, key, des);
// });

// return cloneObj;
// }


// console.log(simpleClone(obj));

var obj = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 5,
            f: [1, 2, 3, 4, 5, 6]
        }
    }
}

// function deepClone(obj, cloneObj) {
//     var cloneObj = cloneObj || {},
//         toStr = Object.prototype.toString,
//         objArr = '[object Array]';

//     for (const i in obj) {
//         if (typeof obj[i] === 'object' && obj[i] !== null) {
//             // cloneObj[i] = Array.isArray(obj[i]) ? [] : {};
//             // cloneObj[i] = obj[i] instanceof Array ? [] : {};
//             cloneObj[i] = toStr.call(obj[i]) === objArr ? [] : {};
//             deepClone(obj[i], cloneObj[i]);
//             // for (const j in obj[i]) {
//             //     if (typeof obj[i][j] === 'object' && obj[i][j] !== null) {
//             //         cloneObj[i][j] = {};
//             //         for (const k in obj[i][j]) {
//             //             cloneObj[i][j][k] = obj[i][j][k];
//             //         }
//             //     } else {
//             //         cloneObj[i][j] = obj[i][j];
//             //     }
//             // }
//         } else {
//             cloneObj[i] = obj[i];
//         }
//     }

//     return cloneObj;
// }


/**
 * JSON.parse(JSON.stringify(obj))
 * @param {*} obj 
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * jquery 实现
 */
// console.log($);
// function deepClone(obj) {
//     return $.extend(true, {}, obj)
// }

var obj1 = deepClone(obj);

// obj.b.c = 10;
obj.b.d.e = 10;
console.log(JSON.stringify(obj));
console.dir(JSON.stringify(obj1));