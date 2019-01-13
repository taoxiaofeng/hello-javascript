// var person = {
//     name: "Nicholas",
//     age: 29,
//     job: "Software Engineer",

//     sayName: function () {
//         alert(this.name);
//     }
// }

// var person = {};
// Object.defineProperty(person, "name", {
//     // writable: false, //不可写入 只读的
//     configurable: false, //不可配置
//     value: "Nicholas"
// });

// document.write(person.name);
// delete person.name;
// documen.write(person.name);

// var book = {
//     _year: 2004,
//     edition: 1
// }

// Object.defineProperty(book, "year", {
//     get: function () {
//         this._year;
//     },
//     set: function (newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// })

//定义访问器的旧有方法
// book.__defineGetter__("year", function(){
//     return this._year;
// });

// book.__defineGetter__("year", function(newValue) {
//     if(newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//     }
// });

// book.year = 2005;
// alert(book.edition);// 2
// document.write(`${book._year}:${book.edition}`)

var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// alert(descriptor.value); //2004
// alert(descriptor.configurable); // false
// alert(typeof descriptor.get); // undefined

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value); //undefined
alert(descriptor.enumerable); // false
alert(typeof descriptor.get); // "function"