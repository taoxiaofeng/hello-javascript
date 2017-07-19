
//JS是函数级作用域，在内部的变量，内部都能访问，外部不能访问内部的，内部可以访问外部的。
function test() {
	if (false) {
		var i = 10;
	}
	console.log(i);
}
test();