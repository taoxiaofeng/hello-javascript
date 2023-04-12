import { list } from './mock.js';
import _ from 'lodash';
var getValues = () => {
  return list.map(item => _.pick(item, ['max', 'min', 'targetValue']))
}

console.log(_.pick({
  "targetValue": "30.0",
  "max": "100.0",
  "min": "90.0",
  "level": "",
  "type": ""
},['max', 'min', 'targetValue']))

// console.log(getValues());
// console.log(_.isEmpty({  }))
// console.log(Object.getOwnPropertyNames({ max: '', min: '', targetValue: '' }))

// 判断一个json对象中是否存在空的属性值
let hasAnyValue = Object.values({ max: [], min: {}, targetValue: '', a: null, b: undefined, c: 'aaa' }).some(e =>
  typeof e === 'string' ? !!e :
    typeof e === 'number' ? !isNaN(e) :
      Array.isArray(e) ? !!e.length :
        e != null
);
// console.log(hasAnyValue)