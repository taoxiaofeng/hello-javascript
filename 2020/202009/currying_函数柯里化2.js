/**
 * JavaScript 实现 类似于 add(1)(2)(3) 调用方式的方法
 */

//  var add = function(a) {
//      return function(b) {
//          return function(c) {
//              return a + b + c;
//          }
//      }
//  }

//  console.log(add(1)(2)(3));

// function add(x) {
//     var sum = x;
//     var tmp = function(y) {
//         sum = sum + y;
//         return tmp;
//     };
//     tmp.toString = function() {
//         return sum;
//     };
//     return tmp;
// }

// console.log(add(1)(2)(3));
// console.log(add(1)(2)(3)(4));

// function add(x) {
//     var sum = x;
//     var tmp = function (y) {
//         sum = sum + y;
//         return tmp;
//     };
//     tmp.toString = function () {
//         return sum;
//     };
//     return tmp;
// }
// console.log(add(1)(2)(3));  //6
// console.log(add(1)(2)(3)(4));   //10

function say(company, academy, name) {
    console.log(`我的公司是${company},专业是${academy},名字是${name}`);
}

// say('蜀国', '武将', '张飞');
// say('蜀国', '武将', '关羽');
// say('蜀国', '武将', '赵云');

// function say(company) {
//     return function(academy) {
//         return function(name) {
//             console.log(`我的公司是${company},专业是${academy},名字是${name}`);
//         }
//     }
// }
// console.log(say('蜀国')('武将')('张飞'));
// let setInfo = say('蜀国')('武将');
// setInfo('张飞');
// setInfo('关羽');
// setInfo('赵云');

// 封装一个公用 函数柯里化的方法
// 参数 fn： 被柯里化的函数
function curry(fn) {
    // 记录 fn 的参数个数
    let len = fn.length;
    return function temp() {
        // 收集本次传递参数
        let args = [...arguments];

        if(args.length >= len) {
            return fn(...args);
        } else {
            return function () {
                return temp(...args, ...arguments);
            }
        }
    }
}

// 测试 
let r = curry(say);

r('a')('b')('c');

let setInfo = r('蜀国')('武将');
setInfo('张飞');
setInfo('关羽');
setInfo('赵云');

/**
 * js 函数柯里化
 * 把接受多个参数的函数变换成接受单一参数的函数，并且返回接受余下的参数切返回结果的新函数的技术
 */

