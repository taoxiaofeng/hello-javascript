/**
 * 两数之和
 */
// 解法一：暴力法
// 数组的长度是n 算法大概执行了多少次 时间复杂度：O(n^2)
// i 和 j 都是一个普通的数字 空间复杂度：O(1)  
// var twoSum = function(nums = [], target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// 解法二：哈希表
// 数组的长度是n 时间复杂度：On
// 空间复杂度：O(n)
var twoSum = function (nums = [], target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let n = target - num;
    if (num in obj) {
      return [i, obj[num]];
    } else {
      obj[n] = i;
    }
  }
}

// 测试
console.log(twoSum([2, 7, 11, 15], 9));