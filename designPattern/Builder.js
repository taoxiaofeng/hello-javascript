/**
 * 构建者模式
 */

var studentCount = 0;
function Student(name, gender) {
  this.name = name;
  this.gender = gender;
}

// 创建一个构造器
function StudentBuilder() {
  this.student = new Student();

  this.setName = function (name) {
    this.student.name = name;
  }

  this.setGender = function (gender) {
    if(gender !== '男' && gender !== '女') {
      throw '好玩不'
    }
    this.student.gender = gender;
  }

  this.setHairLength = function (hairLength) {
    if ((this.student.gender === '男' && hairLength > 1) || (this.student.gender === '女' && hairLength > 25)) {
      throw '回去剪头';
    }
    this.student.hairLength = hairLength;
  }

  this.build = function () {
    studentCount++;
    console.log(studentCount)
    return this.student;
  }
}

var builder = new StudentBuilder();
builder.setName('王花花');
builder.setGender('男');
builder.setHairLength(1);

var builder2 = new StudentBuilder();
builder2.setName('李栓蛋');
builder2.setGender('女');
builder2.setHairLength(10);

var whh = builder.build();
var lsd = builder2.build();

// 这种方式过于繁琐 
// var whh = new Student();
// var length = 2;
// whh.name = '王花花';
// whh.gender = '男';
// whh.hairLength = length;

// if ((whh.gender === '男' && length > 1) || (whh.gender === '女' && length > 25)) {
//   throw '回去剪头';
// }

console.log(whh);
console.log(lsd);