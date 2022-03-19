// 计算出每个元素出现的次数
const arr = ['name', 'age', 'long', 'job', 'long', 'name', 'name'];
// 输出：{name:3, age:1,long:2,job:1}
const result = arr.reduce((pre, cur) => {
  // console.log(`pre[cur] --`, pre[cur])
  if (!pre[cur]) {
    pre[cur] = 1;
  } else {
    pre[cur]++;
  }
  return pre;
},{})

console.log(result);
