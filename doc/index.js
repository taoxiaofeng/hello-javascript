"use strict";
// let a: unknown;
// a = 10; // 可以赋值为数字
// a = true; // 可以赋值为布尔值
// a = "hello"; // 可以赋值为字符串
// 需求是fn是一个类
function test(fn) { }
class Person {
}
Person.wife = "小红"; // 静态属性
test(Person); // 正常
