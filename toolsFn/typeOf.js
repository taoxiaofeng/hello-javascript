function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1];
  res = res.substring(0, res.length -1).toLowerCase();
  return res;
}



// function typeOf(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
// }

console.log(typeOf(1)); // number
console.log(typeOf('')); // string
console.log(typeOf(true)); // boolean
console.log(typeOf(undefined)); // undefined
console.log(typeOf(null)); // null
console.log(typeOf({})); // object
console.log(typeOf([])); // array
console.log(typeOf(new Date())); // date
console.log(typeOf(/\d/)); // regexp