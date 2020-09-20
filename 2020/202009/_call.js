// 模拟 call bar.mycall(null);
//实现一个call方法：
Function.prototype.myCall = function (context = window) {
    //此处没有考虑context非object情况
    console.log(this)
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn;
    return result;
}

let foo = {
    value: 1,
}
function bar() {
    console.log(this.value)
}
bar.myCall(foo) // 1

// 这个call就等价于
// let foo = {
//     value: 1,
//     bar: function () {
//         console.log(this.value)
//     },
// }
// foo.bar() // 1