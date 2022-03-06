function Student(name, subjects) {
  this.name = name;

  // ...
  // 如果是文科生: ['政治', '历史', '地理']
  // 如果是理科生: ['数学', '物理', '化学']
  this.subjects = subjects;
}
/**
 * 创建学生
 * @param {string} name 姓名
 * @param {string} type 文科还是理科
 */
function factory(name, type) {
  // if(type === 'LIBERAL_ART') {
  //   return new Student(name, ['政治', '历史', '地理']);
  // } else {
  //   return new Student(name, ['数学', '物理', '化学']);
  // }

  switch (type) {
    case 'LIBERAL_ART': return new Student(name, ['政治', '历史', '地理']);
    case 'SCIENCE': return new Student(name, ['政治', '历史', '地理']);
    case 'SPORTS': return new Student(name, ['长跑', '足球', '排球']);
    default:
      throw '没有这个专业！';
  }
}

var whh = factory('王花花', 'LIBERAL_ART');
var lsd = factory('李拴蛋', 'SCIENCE');
var zs = factory('张三', 'SPORTS');
var ls = factory('张三', 'CS');
console.log(whh, lsd, zs, ls);