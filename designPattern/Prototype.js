/**
 * 原型模式
 */

function Student(name, gender, score, quality) {
  this.name = name;
  this.gender = gender;
  this.score = score;
  this.quality = quality;
  // 使用原型解决
  // this.sumScore = function () {
  //   return this.score + this.quality;
  // }
}

  // 使用原型解决
Student.prototype.sumScore = function () {
  return this.score + this.quality;
}


var whh = new Student('王花花', '男', 30, 50);
var lsd = new Student('李栓蛋', ' 女', 28, 60);

console.log(whh.sumScore())

console.log(whh);
console.log(lsd)
