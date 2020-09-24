/**
 * 函数柯里化解决方案
 */

// 定长参数
//  function add(a,b,c,d) {
//      return [
//          ...arguments
//      ].reduce((a,b) => a + b);
//  }

// //  console.log(add(1,2,3,4));

// function currying(fn) {
//     let len = fn.length;
//     let args = [];
//     return function _c(...newArgs) {
//         // 合并参数
//         args = [
//             ...args,
//             ...newArgs
//         ]
//         // 判断当前参数集合 args 的长度是否 < 目标函数fn 的需求参数长度
//         if(args.length < len) {
//             // 继续返回函数
//             return _c;
//         } else {
//             // 返回执行结果
//             return fn.apply(this, args.slice(0, len));
//         }
//     }
// }

// let  addCurry = currying(add);
// let total = addCurry(1)(2)(3)(4) // 同时只是 addCurry(1)(2)(3)(4) 该方式调用
// console.log(total);

/******************************************************************************************/
/**
 * 函数参数个数不定长的柯里化解决方案
 */
function add(...args) {
    return args.reduce((a, b) => a + b);
}

function currying(fn) {
    let args = [];
    return function _c (...newArgs) {
        if(newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return _c;
        } else {
            return fn.apply(this, args);
        }
    }
}

let addCurry = currying(add);
// 注意调用方式的变化
console.log(addCurry(1)(2)(3)(4)(5)());