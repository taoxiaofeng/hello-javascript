
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
  result = arr.reduce((pre, cur) => {
    return pre.includes(cur) ? pre : [...pre, cur];
  },[])
  console.log(result);
}


getUniqueArray();