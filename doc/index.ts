// let a: unknown;
// a = 10; // 可以赋值为数字
// a = true; // 可以赋值为布尔值
// a = "hello"; // 可以赋值为字符串

// let x: string;
// if (typeof a === "string") {
//     x = a; // 只有在类型检查后才能安全地赋值
// } else {
//     x = "default"; // 如果不是字符串，提供默认值
// }

// // 第二种
// x = a as string; // 使用类型断言，但需要确保 a 实际上是字符串类型

// console.log(`x: ${x}`); // 输出 x 的值


// let a: string;
// a = "hello"; // 正常赋值
// if(typeof a === 'string') {
//     console.log(a.toUpperCase()); // 正常使用
// } else {
//    console.log(a)
// }

type LogFunc = () => void;

// // function f1(): void {
// //     return undefined;
// // }

function f1(): LogFunc {
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
