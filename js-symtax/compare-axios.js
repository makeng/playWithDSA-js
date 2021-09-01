/**
 * 深比较
 */
function deepEqual (a, b) {
  // 普通类型
  if (typeof a !== typeof b) {
    return false
  }
  // 真比较
  if (typeof a !== 'object') {
    return a === b
  }

  // 对象
  for (let key in a) { // 兼容性到 IE8
    if (a.hasOwnProperty(key)) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
  }
  for (let key in b) { // 反过来，防止是子集的情况
    if (b.hasOwnProperty(key)) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
  }
  return true
}
