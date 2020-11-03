// 两数相加-数组实现
var addTwoNumbers = function (l1, l2) {
  const res = []
  let addOne = 0

  for (let i = 0; i < l1.length || i < l2.length || addOne > 0; i++) {
    let sum = l1[i] + l2[i] + addOne
    addOne = 0 // 使用后清空
    if (sum >= 10) { // 进位
      sum = sum % 10
      addOne = 1
    }
    res.push(sum)
  }

  return res
}

console.log(
  addTwoNumbers([2, 4, 3], [5, 6, 4])
)
