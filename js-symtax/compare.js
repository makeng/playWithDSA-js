function deepCompare (obj1, obj2) {
  const compareArrOrObj = (x1, x2) => {
    const getKeyList = x => Object.keys(x)
    const keyList1 = getKeyList(x1)
    const keyList2 = getKeyList(x2)
    const isKeyListNotTheSame =
      !keyList1.every(key => keyList2.includes(key)) ||
      !keyList2.every(key => keyList1.includes(key))

    if (isKeyListNotTheSame) {
      // 属性名一致
      return false
    }
    return keyList1.every(key => deepCompare(x1[key], x2[key])) // 属性值一致
  }

  if (typeof obj1 !== typeof obj2) {
    return false
  }
  if (typeof obj === 'object') {
    return compareArrOrObj(obj1, obj2)
  }
  return obj1 === obj2
}

const a = { name: 'a', classMate: [1, 2, 3], voice: { hight: 23, low: 40 } }
const b = { name: 'a', classMate: [1, 2, 3], voice: { hight: 23, low: 40 } }
console.info(deepCompare(a, b))
