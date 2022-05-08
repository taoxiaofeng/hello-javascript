/**
 * 冒泡排序
 *1、 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 *2、 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
 *3、 针对所有的元素重复以上的步骤，除了最后一个。
 *4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */
function bubbleSort(arr = []) {
  console.time('bubbleSort');
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 相邻的两个元素凉凉相比
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // 元素交换
      }
    }
  }
  console.timeEnd('bubbleSort');
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

/**
 * 选择排序
 * 1、首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 2、再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3、重复第二步，直到所有元素均排序完毕
 */
function selectionSort(arr = []) {
  console.time('selectionSort')
  var len = arr.length;
  var minIndex, temp;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j;              // 将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.timeEnd('selectionSort');
  return arr;
}

console.log(selectionSort(arr));

