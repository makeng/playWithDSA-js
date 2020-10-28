/* ---------------------------------------------------------------------------------------
* about:队列的实现/应用。
* author:马兆铿（810768333@qq.com）
* date:2020-02-09
* ---------------------------------------------------------------------------------------- */
const log = console.log

/**
 * 循环队列。关键点是「满」与「空」的判断。
 */
function circularQueue () {
  class Queue {
    constructor (size) {
      this.font = 0
      this.rear = 0
      this.list = Array(size)
    }

    getMaxSize () {
      return this.list.length
    }

    // 数据数量
    getLength () {
      return (this.getMaxSize() - this.font + this.rear) % this.getMaxSize()
    }

    enQueue (x) {
      if ((this.rear + 1) % this.getMaxSize() === this.font) {
        throw new Error('队列溢出！')
      }
      this.list[this.rear] = x
      this.rear = (this.rear + 1) % this.getMaxSize()
    }

    deQueue () {
      if (this.font === this.rear) {
        throw new Error('队列为空！')
      }
      const res = this.list[this.font]
      this.list[this.font] = null
      this.font = (this.font + 1) % this.getMaxSize()
      return res
    }
  }

  const queue = new Queue(5)
  queue.enQueue(1)
  log(queue)
  queue.enQueue(2)
  log(queue)
  queue.enQueue(3)
  log(queue)
  queue.enQueue(4)
  log(queue)
  /*
  // 溢出
  queue.enQueue(5)
  log(queue)
  */
  const x = queue.deQueue()
  log('出队列', x)
  log(queue)
}

log('/*------ 循环队列实验 ------*/')
circularQueue()
