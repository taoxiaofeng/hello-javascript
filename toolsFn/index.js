// 父类
function Parent () {
  this.name = 'parent'
  this.sayHello = function () {
    console.log('hello')
  }
}

Parent.prototype.a = '我是父类prototype上的属性a';

// 子类
function Child () {
  Parent.call(this);
}

Child.prototype = new Parent();

var child = new Child();
var parent = new Parent();
child.a = '我改变了父类上的属性a'
console.log(child.a); 
console.log(parent.a);