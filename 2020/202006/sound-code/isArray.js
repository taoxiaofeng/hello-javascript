/**
 * isArray 实现
 */
Array.myIsArray = function (arr) {
    return Object.prototype.toString.call(Object(arr)) === '[object Array]';
}

/**
 * 测试 myIsArray 方法
 */

console.log(Array.myIsArray([1, 2, 3]));
console.log(Array.myIsArray({ a: 'a' }));