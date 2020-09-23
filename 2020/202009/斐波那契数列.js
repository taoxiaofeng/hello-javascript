// function fibonacci(count) {
//     function fn(count, curr = 1, next = 1) {
//         if(count == 0) {
//             return curr;
//         } else {
//             return fn(count - 1, next, curr + next);
//         }
//     };
//      return fn(count);
// }

/**
 * 斐波那契数列
 */

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    let arr = [1, 1];
    // => 即将要创建多少个
    let i = n + 1 -2;
    while(i >0) {
        let a = arr[arr.length - 2],
            b = arr[arr.length - 1];
            arr.push(a + b);
            i--;
    }
    return arr[arr.length-1];
}

// 测试
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));