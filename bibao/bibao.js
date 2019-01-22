function print(args) {
    document.write(args);
}


// let name = 'John';
// function sayHi() {
//     print(`Hi,${name}`);
// }
// name = 'Pete';
// sayHi();

//闭包
/**
 * 函数保存其外部的变量并且能够访问它们称之为闭包。
 */
// function makeWorker() {
//     let name = 'Pete';

//     return function() {
//         print(name);
//     }
// }

// let name = 'John';
// //创建一个函数
// let work = makeWorker();
// //call it 
// work();

//普通函数
// function f() {
//     let value1 = 123;
//     let value2 = 456;
// }

// f();//f() 执行完后，该词法环境变成不可达，因此它在内存中已被清理。

//闭包
// function f() {
//     let value = 123;

//     function g() { print(value); }

//     return g;
// }

// let f = f();// g 是可达的，并且将其外部词法环境保持在内存中

// function f() {
//     let value = Math.random();

//     return function () {
//         print(value);
//     }
// }

// 数组中的三个函数，每个都有词法环境相关联。
// 来自对应的 f()
//         LE   LE   LE
// let arr = [f(), f(), f()]; //arr在内存中
// 对应的词法环境可达
// print(arr);

// arr = null;
// print(arr); // ...在内存中被清理

//闭包的应用
/**
 * 制造一系列『马上能用』的过滤器：
 *inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
 *inArray([...]) —— 包含在给定的数组中。
 *用法如下所示：
 *arr.filter(inBetween(3,6)) —— 只挑选 3 和 6 之间的值。
 *arr.filter(inArray([1,2,3])) —— 只挑选与 [1,2,3] 其中成员匹配的元素。
 */
//inBetween 筛选器
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

//inArray 筛选器

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    }
}
console.log(arr.filter(inArray([1, 2, 10])));

//按字段排序
let users = [{
        name: "John",
        age: 20,
        surname: "Johnson"
    },
    {
        name: "Pete",
        age: 18,
        surname: "Peterson"
    },
    {
        name: "Ann",
        age: 19,
        surname: "Hathaway"
    }
];

//常用排序方式
//按name 排序
// users.sort((a, b) => a.name > b.name ? 1 : -1);
//按 age排序
// users.sort((a,b) => a.age > b.age ? 1 : -1);

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
console.log(users);

// users.sort(byField('age'));
// console.log(users);