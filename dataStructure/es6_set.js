// ES6 中的 Set();

// var s = new Set();
// s.add(1);
// s.add(2);
// s.add(3);
// s.add(1);

// s.forEach(function(value1, value2, set) {
//   // {1:1,2:2,3:3}
//   console.log('value 1 -- ', value1);
//   console.log('value 2 -- ', value2);
//   console.log('set -- ', set);
// });

// var arr = ['a', 'b', 'c'];
// arr.forEach(function(item,index) {
//   // item 数组存储的值， index 对应的下标
//   console.log(item,index);
// })

var a = new Set([1,2,3]);
var b = new Set([2,3,4]);
// es6 
var s = new Set();
s.add(1);
s.add(2);
s.add(3);


s.forEach(function(value1, value2, set) {
  console.log(`value1 - `, value1);
  console.log(`value2 - `, value2);
  console.log(`set - `, set);
})

var arr = ['a', 'b', 'c'];

arr.forEach(function(item, index) {
    // item 数组存储的值 index 对应的下标
    console.log(item, index)
})

//  实现迭代器
var interator = s.entries(); // 获得迭代器

console.log(interator.next().value)
console.log(interator.next().value)
console.log(interator.next().value)

// 测试数据
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);

// 并集
var union = new Set([...a,...b]);

// 交集
var intersect = new Set([...a].filter(x => b.has(x)));

// 差集
var difference = new Set([...a].filter(x => !b.has(x)));

console.log(`并集 -- `, union);
console.log(`交集 -- `, intersect);
console.log(`差集 -- `, difference);

