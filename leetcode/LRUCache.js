/**
 * LRU缓存机制
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.max = capacity;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 判断是否存在key
  if (this.cache.has(key)) {
    // 如果存在 获取到当前节点
    let node = this.cache.get(key);
    // 把 cache 中对应的删除
    this.cache.delete(key);
    // 把当前节点放到最前面 
    this.cache.set(key, node);
    return node;
  }
  return -1;
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 判断是否存在key
  if (this.cache.has(key)) {
    // 把 cache 中对应的删除
    this.cache.delete(key);
    // 把value放在cache中
    this.cache.set(key, value);
  } else if (this.cache.size >= this.max) {// 超出最大容量 删除最后一个节点
    this.cache.delete(this.cache.keys().next().value);
  }
  // 把当前节点放到最前面 
  this.cache.set(key, value);
}