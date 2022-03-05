/**
 * 构造器模式
 */

// ES5
// function Student(name, gender, score, quality) {
//   this.name = name;
//   this.gender = gender;
//   this.score = score;
//   this.quality = quality;
// this.sumScore = function () {
//   return this.score + this.quality;
// }
// }

// ES6
class Student {
  constructor(name, gender, score, quality) {
    this.name = name;
    this.gender = gender;
    this.score = score;
    this.quality = quality;
  }

  sumScore() {
    return this.score + this.quality;
  }
}

var whh = new Student('王花花', '男', 30, 50);
var lsd = new Student('李栓蛋', ' 女', 28, 60);

console.log(whh.sumScore())

console.log(whh);
console.log(lsd)