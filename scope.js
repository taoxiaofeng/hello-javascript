
//JS是函数级作用域，在内部的变量，内部都能访问，外部不能访问内部的，内部可以访问外部的。

// test();
// var j  =1000;
// function test() {
// 	if (false) {
// 		var i = 10;
// 	} else {
// 		var t = 100;
// 	}
// 	console.log(j);
// }
// test();
// console.log(t);//scope.js:14 Uncaught ReferenceError: t is not defined
// 
// var j = 100;
// ~(function test() {
// 	console.log(j);
// })();
// //~ 把后面的函数转换成表达式来处理
// ~function test() {
// 	console.log(j);
// }();

// (function test() {
// 	console.log(j);
// })();

// function test() {
// 	console.log(j);
// }(); //scope.js:32 Uncaught SyntaxError: Unexpected token )
// 
 
 //闭包 他就是拿到本不该属于他的东西  ps:闭包容易造成内存泄露
 var j = 100;
 function test() {
 	var j;
 	j = 10;
 	var k = 1000;
 	return function () { //通过闭包使外部可以拿到K的值
 		return k;
 	}
 	console.log(j);
 }

var t = test()();
console.log(t);