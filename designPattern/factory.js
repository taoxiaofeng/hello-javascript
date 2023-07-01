/**
 * 工厂模式
 * 工厂方法提供创建对象的接口，对象被创建后可以修改。这样做的好处是，创建对象的逻辑集中在一个地方，这样简化了代码，使得代码更易组织。
 * 由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 优点：
 *    1. 可以使代码结构清晰，有效地封装变化。在编程中，产品类的实例化有时候是比较复杂和多变的，通过工厂模式，将产品的实例化封装起来，使得调用者根本无需关心产品的实例化过程，只需依赖工厂即可得到自己想要的产品。
 *    2. 对调用者屏蔽具体的产品类。如果使用工厂模式，调用者只关心产品的接口就可以了，至于具体的实现，调用者根本无需关心。即使变更了具体的实现，对调用者来说没有任何影响。
 *    3. 降低耦合度。产品类的实例化通常来说是很复杂的，它需要依赖很多的类，而这些类对于调用者来说根本无需知道，如果使用了工厂方法，我们需要做的仅仅是实例化好产品类，然后交给调用者使用。对调用者来说，产品所依赖的类都是透明的。
 */
// function Student(name, subjects) {
//   this.name = name;

//   // ...
//   // 如果是文科生: ['政治', '历史', '地理']
//   // 如果是理科生: ['数学', '物理', '化学']
//   this.subjects = subjects;
// }
// /**
//  * 创建学生
//  * @param {string} name 姓名
//  * @param {string} type 文科还是理科
//  */
// function factory(name, type) {
//   // if(type === 'LIBERAL_ART') {
//   //   return new Student(name, ['政治', '历史', '地理']);
//   // } else {
//   //   return new Student(name, ['数学', '物理', '化学']);
//   // }

//   switch (type) {
//     case 'LIBERAL_ART': return new Student(name, ['政治', '历史', '地理']);
//     case 'SCIENCE': return new Student(name, ['政治', '历史', '地理']);
//     case 'SPORTS': return new Student(name, ['长跑', '足球', '排球']);
//     default:
//       throw '没有这个专业！';
//   }
// }

// var whh = factory('王花花', 'LIBERAL_ART');
// var lsd = factory('李拴蛋', 'SCIENCE');
// var zs = factory('张三', 'SPORTS');
// var ls = factory('张三', 'CS');
// console.log(whh, lsd, zs, ls);

// ES5 写法
// function UserFactory(role) {
//   function User(role, pages) {
//     this.role = role;
//     this.pages = pages;
//   }
//   switch (role) {
//     case "superAdmin":
//       return new User("superAdmin", [
//         "home",
//         "user-manage",
//         "rights-manage",
//         "news-manage",
//         "goods-manage",
//       ]);
//     case "admin":
//       return new User("admin", [
//         "home",
//         "user-manage",
//         "rights-manage",
//         "news-manage",
//       ]);
//     case "editor":
//       return new User("editor", ["home", "user-manage", "rights-manage"]);
//     default:
//       throw "参数错误，可选参数：superAdmin、admin、editor"; // 抛出异常
//   }
// }

// ES6 写法  -- 简单工厂模式
// class User {
//   constructor(role, pages) {
//     this.role = role;
//     this.pages = pages;
//   }

//   static UserFactory(role) {
//     switch (role) {
//       case "superAdmin":
//         return new User("superAdmin", [
//           "home",
//           "user-manage",
//           "rights-manage",
//           "news-manage",
//           "goods-manage",
//         ]);
//       case "admin":
//         return new User("admin", [
//           "home",
//           "user-manage",
//           "rights-manage",
//           "news-manage",
//         ]);
//       case "editor":
//         return new User("editor", ["home", "user-manage", "rights-manage"]);
//       default:
//         throw "参数错误，可选参数：superAdmin、admin、editor"; // 抛出异常
//     }
//   }
// }

// var user = User.UserFactory("superAdmin");

// console.log(`user -- `, user);

// 抽象工厂模式
// 抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建，所以抽象工厂模式也被称为工厂的工厂。
// 抽象工厂模式的优点：
// 1. 抽象工厂模式隔离了具体类的生成，使得客户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂就变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。
// 2. 当一个产品族中的多个对象被设计成一起工作时，它能够保证客户端始终只使用同一个产品族中的对象。
// 3. 增加新的产品族很方便，无须修改已有系统，符合“开闭原则”。
class User {
  constructor(name) {
    this.name = name;
  }

  welcome() {
    console.log(`welcome ${this.name}`);
  }

  dataShow() {
    throw new Error("抽象方法不能调用");
  }
}

class Editor extends User {
  constructor(name) {
    super(name);
    this.role = 'editor';
    this.pages = ['home', 'news-manage'];
  }

  dataShow() {
    console.log(`editor dataShow`);
  }
}

