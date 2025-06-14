"use strict";
// let a: unknown;
// a = 10; // 可以赋值为数字
// a = true; // 可以赋值为布尔值
// a = "hello"; // 可以赋值为字符串
// // function f1(): void {
// //     return undefined;
// // }
function f1() {
    return () => {
        console.log("Function f1 executed");
    };
}
f1(); // 调用 f1 函数
// const src = [1,2,3];
// const dst = [0];
// src.forEach(el => dst.push(el))
//  function Demo(): void {
//     // return 666;// 会报错：不能将类型“number”分配给类型“void”
//  }
// console.log(`dst -- `, dst)
