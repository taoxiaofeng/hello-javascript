/**
 * 数组去重
 */


let arr2 = [1, 2, 3, 2, 33, 55, 66, 3, 55];

//1、第一种方法

// let newArr = [];
// arr2.forEach(item => {
//     if(newArr.indexOf(item) === -1) {
//         newArr.push(item);
//     }
// });

//2、 第二种方法
// let newArr = [...new Set(arr2)];

// console.log(newArr);

let arr1 = [
    {id: 1, name: '汤小梦'},
    {id: 2, name: '石小明'},
    {id: 3, name: '前端开发'},
    {id: 1, name: 'web前端'}
];


const unique = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

console.log(unique(arr1, 'id'));