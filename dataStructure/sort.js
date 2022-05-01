/**
 * 冒泡排序
 */
function bubbleSort(arr = []) {
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 相邻的两个元素凉凉相比
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // 元素交换
      }
    }
  }
  return arr;
}

// 测试
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));

/**
 * [
   2,  3,  4,  5, 15, 19,
  26, 27, 36, 38, 44, 46,
  47, 48, 50
  ]
 */
