### 一、10个JS解构赋值相关的知识点

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。为开发人员节省了大量时间和代码。

##### 1、忽略值

数组通常携带大量数据。很多时候，只需要部分数据进行进一步处理。因此，在解构数组时，可以有选择地解构值，忽略不需要的值。如果希望值保持不变，只需写一个逗号。

```javascript
/**
 * 1、忽略值
 * Igoring values
 */
// 示例1-1
const list = ['a', 'b', 'c'];
const [aa, , cc] = list;
console.log(`aa -- `, aa, ' cc -- ', cc);

// 示例1-2
const list2 = [{
  "index": 1,
  "time": "2012-07-19",
  "khfa": "基层医疗机构考核方案",
  "ygt": "浙江省肿瘤医院",
  "shjg": "浙江医院庆丰村卫生站"
},
{
  "index": 2,
  "time": "1998-03-28",
  "khfa": "基层医疗机构考核方案",
  "ygt": "浙江大学医学院附属妇产科医院",
  "shjg": "浙江医院三墩院区"
},
{
  "index": 3,
  "time": "1978-04-28",
  "khfa": "基层医疗机构考核方案",
  "ygt": "浙江大学医学院附属第一医院",
  "shjg": "浙江医院花园新村卫生站"
},]
const [aa1, , cc1] = list2;
console.log(`aa1 -- `, aa1, ' cc1 -- ', cc1);
```

##### 2、分配剩余值

大多数开发人员都会知道 rest 参数。一个函数的参数以 3 个点为前缀，接受无数个参数并将它们解析为一个数组。

同样这种模式可以用于解构，通过在变量前加上 3 个点，就可以将所有剩余的值解构到其中。

这适用于对象和数组解构。

```javascript
 /**
 * 2、分配剩余值
 */
	// 示例2-1
	const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [a, b, ...rest] = list;
  console.log('a -- ', a);
  console.log('b -- ', b);
  console.log('rest -- ', rest);

  // 示例2-2
 const obj1 = { one: 'one', two: 'two', three: 'three', four: 'four', five: 'five', six: 'six', seven: 'seven', nine: 'nine', ten: 'ten' };
  const { one, two, ...restItem } = obj1;
  console.log('one -- ', one);
  console.log('two -- ', two);
  console.log('restItem -- ', restItem);
```

##### 3、组合数组和对象结构

对象和数组解构本身就很强大，但将两者结合起来可以提供开发超能力。面对一个里面有对象的数组，可以使用这种技术直接解构嵌套的对象。

```javascript
 /**
 * 3、组合数组和对象结构
 */
	// 示例3-1
	
  const list3 = [{
    id: 1,
    name: '张三',
    job: '程序员'
  }, {
    id: 2,
    name: '李四',
    job: '产品经理'
  }, {
    id: 3,
    name: '王五',
    job: '设计师'
  }]
  const [, { job }, { name }] = list3;

  console.log(`item 2 - job -- `, job, ` -- item 3 - name -- `, name);
```

##### 4、交换数组中的变量

是否曾经需要交换数组中的两个变量？如果是这样，这是一项繁琐的任务。要交换到两个变量，需要引入一个临时的第三个变量来存储要交换其中的一个值。

```javascript
/**
 * 4、交换数组中的变量
 */

// 冒泡排序
let arr = [3, 1, 5, 4, 7, 6, 0, 2];

function bubbleSort(arr) {
  let length = arr.length;
  // 遍历次数为length-1次
  for (let i = 0; i < length - 1; i++) {
    // 当前遍历的比较次数为length - 当前遍历次数
    for (let j = 0; j < length - i - 1; j++) {
      // 如果前一个数 大于 后一个数 就交换两数位置
      if (arr[j] > arr[j + 1]) {
        // 之前的写法 定义一个临时变量来实现交换两个数的位置
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // 使用解构的方法来交换两个数的位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      };
    };
  };
  return arr;
};

console.log(`bubbleSort(arr) -- `, bubbleSort(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```

##### 5、重命名变量

每个开发人员都见过至少可以说是模棱两可的对象键。键经常包含拼写错误或与它们的值没有明确的关系。为了克服这个问题，您可以在解构对象时设置一个新的变量名称。解压缩值时，只需写一个冒号，后跟新名称。

```javascript
/**
 * 5、重命名变量
 */
const demo5 = () => {
  const { id, name, job } = 
  id: 1,
  name: '张三',
  job: '程序员'
	};

  console.log(`id -- `, id, ` name -- `, name, ` job -- `, job);

  const { id:id2, name:name2, age } = {
  id: 1,
  name: '小明',
  age: 18
	};
  console.log(`id2 -- `, id2, ` name2 -- `, name2, ` age -- `, age);
}

demo5();
```

##### 6、默认值

在编写代码时有一个保障，提供默认值或回退值通常是一个好主意。解构时设置默认值非常简单。只需在变量名后写一个 = 符号，并提供默认值。当数组或对象中的值未定义时——任何另一个空值都将被解构——默认值被分配给变量。

```javascript
/**
 * 6、默认值
 */

const demo6 = () => {
  const props = { banana: '🍌', apple: undefined, orange: '🍊' };
  const { banana, apple = '' } = props;

  // console.log(`banana -- `, banana);
  // console.log(`apple -- `, apple);
  // 需要注意 如果需要结构的对象中的属性值是 ‘’ 空字符串 或者 null 时，解构赋的初始值是被覆盖的。
  const props2 = { one: '壹', two: null, three: '' };
  const { one = '1', two = '贰', three = '叁' } = props2;

  // console.log(`one --`, one);
  // console.log(`two --`, two);
  // console.log(`three --`, three);

  // ---------------- 数组
  const [ten, twenty, thirty = 30] = [10, 20 , undefined];
  console.log(`thirty -- `, thirty)
}

demo6();
```

##### 7、解构正则表达式

正则表达式用于定位字符串中的模式。当在 javascript 中执行正则表达式 (RegExp.exec() ) 时，匹配项将作为字符串数组返回。

使用数组解构，您可以直接将 RegExp 匹配解构到所需的变量。在下面的例子中，我们将一个邮件地址分解成不同的部分，并直接将它们分配给变量。

```javascript
/**
 * 解构正则表达式
 */

const demo7 = () => {
  const email = `youxiangzhurenmigncheng@163.com`;
  // const email = `qqhao@qq.com`;
  const [originalString, username, address, tld] = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email);

  console.log(`originalString -- `, originalString);
  console.log(`username -- `, username);
  console.log(`address -- `, address);
  console.log(`tld -- `, tld);
}

demo7();
```

##### 8、嵌套解构

对象和数组并不总是平坦的。赋值可以嵌套在一个子句中以直接达到所需的级别。

```javascript
/**
 * 嵌套解构
 */
const demo8 = () => {
  const fruits = { banana: '🍌', child: [{ apple: '🍎🍏', }, { orange: '🍊' }] }
  const { banana, child: [{ apple:curApple }] } = fruits;
  console.log(`curApple -- `, curApple);

  // 这样是获取不到 child 的
  // console.log(`child -- `, child);
}

demo8();
```

##### 9、动态对象健

假设要解构其键是动态的对象。

```javascript
/**
 * 9、动态对象键
 */

const demo9 = () => {
  const fruits = {
    banana: "I'm a banana 🍌",
    cherry: "I'm a cherry 🍒"
  };

  const key = 'banana';
  const { [key]: curFruits } = fruits;

  console.log(curFruits)

}

demo9();
```

##### 10、解构函数参数

在之前的所有示例中，我们将对象值解构为变量。但是如果一个对象作为函数参数提供，我们可以一起跳过这一步。函数参数可以直接解构，使值可用于函数体。

```javascript
/**
 * 10、解构函数参数
 */
const demo10 = () => {
  const fruits = {
    banana: "I'm a banana 🍌",
    cherry: "I'm a cherry 🍒",
    apple: "I'm a apple 🍎",
    orange: "I'm a orange 🍊",
  };

  const getFruits = ({ apple, banana }) => {
    console.log(`apple -- `, apple);
    console.log(`banana -- `, banana);
  }

  getFruits(fruits);
}

demo10();
```

