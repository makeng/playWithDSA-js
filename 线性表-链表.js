/* ---------------------------------------------------------------------------------------
* about:链表的例子。由于没有指针操作，就假设 find 当成是 O(1) 的指针操作
* author:马兆铿（810768333@qq.com）
* date:2020-02-02
* ---------------------------------------------------------------------------------------- */
const log = console.log

// 单链表
const singlyLinkedList = [
  { index: 3, value: 'l', next: 4 },
  { index: 2, value: 'l', next: 3 },
  { index: 0, value: 'h', next: 1 },
  { index: 1, value: 'e', next: 2 },
  { index: 4, value: 'o', next: null }
]

/**
 * 获取第 index 个元素
 * @param index
 */
singlyLinkedList.get = function (index) {
  // 找到第一个，O(n)
  let target = this.find(item => item.index === 0)
  for (let i = 0; i < index; i++) {
    if (target.next) {
      target = this.find(item => item.index === target.next)
    }
  }
  return target
}

log('/*------ 找到第几个 ------*/')
log(singlyLinkedList.get(0))
log(singlyLinkedList.get(3))


singlyLinkedList.insert = function (index, value) {
  const list = JSON.parse(JSON.stringify(this))
  list.get = this.get
  const INSERT_ITEM_INDEX = -1 // 指针值随机即可
  // 找到第一个，O(n)
  let target = list.find(item => item.index === 0)
  let targetNext = undefined
  // 头部:O(1)
  if (index === 0) {
    targetNext = 0
  }
  // 尾部:O(1)
  else if (index >= list.length - 1) {
    const oldLast = list.find(item => item.next === null)
    targetNext = null
    oldLast.next = INSERT_ITEM_INDEX
  }
  // 正常:用到了 get 方法，O(n)
  else {
    const pre = list.get(index)
    const next = list.find(item => item.index === pre.next)
    pre.next = INSERT_ITEM_INDEX
    targetNext = next.next
  }
  list.push({ index: INSERT_ITEM_INDEX, value, next: targetNext })
  return list
}

log('/*------ 插入元素 ------*/')
log(singlyLinkedList.insert(0, 'H'))
log(singlyLinkedList.insert(2, 'L'))
log(singlyLinkedList.insert(5, 'O'))
