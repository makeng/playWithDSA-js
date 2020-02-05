/* ---------------------------------------------------------------------------------------
* about:链表的例子。由于没有指针操作，就假设 find 当成是 O(1) 的指针操作
* author:马兆铿（810768333@qq.com）
* date:2020-02-02
* ---------------------------------------------------------------------------------------- */
const log = console.log

/**
 * 单链表创建
 * @param arr
 */
function createSingleLinkedList (arr) {
  // 创建
  const newArr = arr.map((item, index) =>
    Object({ index, value: item })
  )
  // 构建元素的指针
  newArr.forEach((item, index) => {
    item.next = newArr[index + 1] || null
  })
  return newArr
}

log('/*------ 创建 ------*/')
const singlyLinkedList = createSingleLinkedList(['h', 'e', 'l', 'l', 'o'])

/**
 * 获取第 index 个元素
 * @param index
 */
singlyLinkedList.get = function (index) {
  // 找到第一个
  let target = this.find(item => item.index === 0)
  // 前进：O(n)
  for (let i = 0; i < index; i++) {
    if (target.next) {
      target = target.next
    }
  }
  return target
}

log('/*------ 找到第几个 ------*/')
log(singlyLinkedList.get(0))
log(singlyLinkedList.get(3))

/**
 * 插入
 * @param index
 * @param value
 * @returns {any}
 */
singlyLinkedList.insert = function (index, value) {
  const insertAndSetNext = next => {
    const val = {
      index: this.length,
      value,
      next
    }
    this.push(val)
    return val
  }

  // 头部:O(1)
  if (index === 0) {
    insertAndSetNext(this.get(0))
  }
  // 尾部:O(n)
  else if (index >= this.length - 1) {
    const last = this.find(item => item.next === null)
    last.next = insertAndSetNext(null)
  }
  // 中间:用到了 get 方法，O(n)
  else {
    const target = insertAndSetNext(null)
    const pre = this.get(index - 1)
    const after = this.get(index)
    // 赋值
    target.next = after
    pre.next = target
  }
  return this
}

log('/!*------ 插入元素 ------*!/')
log(singlyLinkedList.insert(0, 'H'))
log(singlyLinkedList.insert(2, 'L'))
log(singlyLinkedList.insert(7, 'O'))

