function clone (x) {
  const wholeTypeStr = Object.prototype.toString.call(x)
  const cloneObj = x => {
    const keyList = Object.keys(x) // keys() 方法得到的是直接可枚举的属性列表
    return keyList.reduce((obj, key) => {
      obj[key] = clone(x[key])
      return obj
    }, {})
  }
  const cloneArr = x =>
    x.map(item => clone(item))

  if (wholeTypeStr === '[object Array]') {
    return cloneArr(x)
  } else if (wholeTypeStr === '[object Object]') {
    return cloneObj(x)
  }
  return x
}
