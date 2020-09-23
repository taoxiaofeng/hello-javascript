/**
 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如：输入15
 * 结果：[[1,2,3,4,5],[4.5.6].[7,8]]
 */

function createArr(n, len) {
    let arr = new Array(len).fill(null),
        temp = [];
    arr[0] = n;
    arr = arr.map((item, index) => {
        if (item === null) {
            item = temp[index - 1] + 1;
        }
        temp.push(item);
        return item;
    });
    return arr;
}

function fn(count) {
    let result = [];
    // => 求出中间值
    let middle = Math.ceil(count / 2);
    // 从1开始累加
    for (let i = 1; i < middle; i++) {
        // 控制累加多少次
        for (let j = 2; ;j++) {
            // 求出累加多次的和   => 公式 (N + ( N + M - 1)) * M / 2
            let total = (i + (i + j - 1)) * (j / 2);
            if (total > count) {
                break;
            } else if (total === count) {
                result.push(createArr(i, j));
                break;
            }

        }

    }
    return result;
}


console.log(fn(4));
console.log(fn(5));
console.log(fn(6));
console.log(fn(10));
console.log(fn(15));
