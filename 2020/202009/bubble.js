function bubble(ary) {
    let temp = null;

    //外层循环i 控制比较的轮数
    for (let i = 0; i < ary.length - 1; i++) {
        // 里层循环控制每一轮比较的次数j
        for (let j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                // 当前项 大于 后一项 交换两者的位置
                // temp = ary[j];
                // ary[j] = ary[j + 1];
                // ary[j + 1] = temp;

                [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
            }

        }

    }
    return ary;
}

// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
//                 var temp = arr[j + 1];        // 元素交换
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

let ary = [12, 8, 24, 16, 1];
// ary = bubble(ary);
console.log(bubble(ary));