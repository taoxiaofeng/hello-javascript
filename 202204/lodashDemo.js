import { list } from './mock.js';
import _ from 'lodash';
var getValues = () => {
  return list.map(item => _.pick(item, ['max', 'min', 'targetValue']))
}

// console.log(getValues());
// console.log(_.isEmpty({  }))
console.log(Object.getOwnPropertyNames({ max: '', min: '', targetValue: '' }))