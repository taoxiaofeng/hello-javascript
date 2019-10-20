const Promise = require('./promise.js');

console.log('1');
new Promise((resolve, reject) => {
    // throw new Error('ha ha, cuo wu xin xi');
    setTimeout(() => {
        resolve(1);
        console.log('2');
    })
}).then(value => {
    console.log('4')
    console.log('value:', value)
}, reason => {
    console.log('reason:', reason)
});
console.log('3')