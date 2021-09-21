import { swap } from '../utils/array.js'

const a = [9, 1, 5, 8, 3, 7, 4, 6, 2]
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 冒泡
function bubbleSort (list) {
  let isNotSwapped
  let cnt = 0

  for (let i = list.length - 1; i > 0; i--) {
    isNotSwapped = true // 未交换
    for (let j = 0; j <= i - 1; j++) {
      cnt += 1
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1)
        isNotSwapped = false
      }
    }
    if (isNotSwapped) { // 说明顺序已经正确
      break
    }
  }
  console.log('loop: ' + cnt)
  return list
}

console.log(bubbleSort(a))
console.log(bubbleSort(b))
