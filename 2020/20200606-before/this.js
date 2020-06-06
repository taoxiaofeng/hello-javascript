//this 谁调用指向谁

// this.m = 1000;
// function test() {
// 	console.log(this.m)
// }
// test();
// this.m = 1000;
// var obj = {
// 	m : 100,
// 	test:function(){
// 		console.log(this.m);
// 		return function () { //闭包   这个function指向了外面的window
// 			console.log(this.m);
// 		}
// 	}
// };
// (obj.test())();
//  //相当于
//  var t = obj.test();
//  t();
//  //等于
//  window.t();
// //里面这个function指向了外面的window
// 
function test() {
	console.log(this.style.color);
}

document.getElementById('test').onclick = test;