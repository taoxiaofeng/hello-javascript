/**
 * 方法一   不可行
 */
function create1(Fn) {
    let obj = {};
    obj.__proto__ = new Fn();
    return obj;
}

/**
 * 方法二  可行
 */
function create2(Fn) {
    let F = function () { }
    F.prototype = Fn;
    return new F();
}

/**
 * 创建 person 函数测试
 */

 function Person() {
     this.name = "诺克萨斯之手";
     this.q = "大杀四方";
     this.w = "致残打击";
     this.e = "无情铁手";
     this.r = "断头台";
 }

 let obj1 = create1(Person);
 let obj2 = create2(Person);
 let obj3 = Object.create(Person);

 console.log(obj1);
 console.log(obj2);
 console.log(obj3);

 /**
  * 经测试 方法二 和 原生 Object.create() 方法实现的效果是一直的。方法一在创建对象的时候 把对象的属性带过来了，不可行。
  */
