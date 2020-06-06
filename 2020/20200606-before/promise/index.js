//1. index.js 进行原生的Promise 演示
//2. promise.js 进行自定义的Promise 演示
//3. test.js 是对promise.js 进行测试
//4. 开发过程结合promise/a+ 规范

console.log('1');
new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve(1);
    // })
    console.log('2');
    resolve(1)
})
    // new Promise(1); //Promise resolver 1 is not a function
    .then(value => {
        console.log('value:', value)
    }, reason => {
        console.log('reason:', reason)
});
console.log('3')
