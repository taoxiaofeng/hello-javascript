let arr = [
    [1, 2, 2,],
    [3, 4, 5, 6],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

// 1、使用 ES6 中提供的 Array.prototype.flat 处理
// arr = arr.flat(Infinity);
// console.log(arr);


// 2、把数组直接变为字符串即可（数组toString之后，不管有多少级，最后都会变为以逗号分隔的字符串，没有中括号和所谓的层级了）,相当于直接扁平化了。
// arr = arr.toString().split(',').map(item => {
//     return Number(item);
// })

// 3、JSON.stringify也可以扁平化数组
//  arr = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item));

// 4、基于数组中some方法进行判断检验，验证数组中的某一项有没有符合函数中提供的规则
// while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr);
// }

// 5、自己递归处理
~ function() {
    function myFlat() {
        let result = [],
        _this = this;
        // => 循环arr 中每一项，把不是数组的存储到新数组中
        let fn = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                if(Array.isArray(item)) {
                    fn(item);
                    continue;
                }
                result.push(item);
            }
        };
        fn(_this);
        return result;
    }
    Array.prototype.myFlat = myFlat;
}();

arr = arr.myFlat();


console.log(arr);