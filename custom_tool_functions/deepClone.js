/**
 * 深拷贝
 */
function deepClone(value) {
  const cache = new WeakMap();

  function clone(value) {
    if(value === null || typeof value !== 'object') {
      return value;
    }

    if(cache.has(value)) {
      return cache.get(value);
    }

    const result = Array.isArray(value) ? [] : {};

    cache.set(value, result);

    for(let key in value) {
      if(value.hasOwnProperty(key)) {
        result[key] = clone(value[key]);
      }
    }

    return result;
  }

  return clone(value);
}