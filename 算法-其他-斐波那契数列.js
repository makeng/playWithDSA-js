/* ---------------------------------------------------------------------------------------
* about:如名
* author:马兆铿（810768333@qq.com）
* date:2020-02-07
* ---------------------------------------------------------------------------------------- */
const log = console.log

/**
 * 年龄标记法，其实就是面向对象
 * @constructor
 */
function method_ageMarking () {

  let list = [0]

  function breed (list) {
    let newRabbit = []
    // 全部年龄加一，到了年龄就生产到 newRabbit
    const newList = list.map(age => {
      const newAge = age + 1
      if (newAge >= 2) {
        newRabbit.push(0) // 放入 0 岁小兔子
      }
      return newAge
    })
    return newList.concat(newRabbit)
  }

  function farmInMonth (arr, month) {
    let list = [...arr]
    for (let i = month; i > 0; i--) {
      list = breed(list)
      log('数量：' + list.length)
    }
    return list
  }

  list = farmInMonth(list, 12)
}

log('/*------ 对象解法 ------*/')
method_ageMarking()

/**
 * 直接使用其数学本质
 * @constructor
 */
function method_math () {
  let list = [1]

  function calNext (index) {
    return list[index] + (list[index - 1] || 0)
  }

  for (let i = 0; i < 12; i++) {
    const newNum = calNext(list.length - 1)
    list.push(newNum)
  }
  log(list)
}

log('/*------ 数学解法 ------*/')
method_math()

/**
 * 递归法
 * @constructor
 */
function method_recursive () {
  let list = []

  function fbi (i) {
    // part1:最底层
    if (i < 2) {
      return 1
    }
    // part2:规律
    else {
      return fbi(i - 2) + fbi(i - 1)
    }
  }

  for (let i = 0; i < 12; i++) {
    const newNum = fbi(i)
    list.push(newNum)
  }
  log(list)
}

log('/*------ 递归解法 ------*/')
method_recursive()
