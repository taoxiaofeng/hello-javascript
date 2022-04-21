
const arr = [2, 4, 5, 2, 4, 7, 9, 1, 9, 500];

/**
 * 数组去重
 */
function getUniqueArray() {
  let result = [];

  // 方法一
  // result = Array.from(new Set(arr));

  // 方法二
  // arr.forEach(item => {
  //   if(result.indexOf(item) === -1) {
  //     result.push(item);
  //   }
  // })

  // 方法三
  // result = arr.filter((item,index) => {
  //   console.log(`indexOf -- ${index}`, arr.indexOf(item))
  //   return arr.indexOf(item) === index;
  // })

  // 方法四
  // result = arr.reduce((pre, cur) => {
  //   return pre.includes(cur) ? pre : [...pre, cur];
  // },[])

  //  方法五
  // 利用对象key值唯一的特性
  // let obj = {};
  // arr.forEach((item, index) => {
  //   obj[arr[index]] = index;
  // })

  // result = Object.keys(obj).map(item => ~~item);

  // 方法六 使用双层for循环
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if(arr[i] === arr[j]) {
  //       // 假如值一样，不再进行内层循环，i++ 直接外层进入下一次循环
  //       i++;
  //     }
  //   } 
  //   result.push(arr[i]);
  // }


  // 方法六 利用排序处理
  const temp = arr.sort();

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== temp[i + 1]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}


getUniqueArray();