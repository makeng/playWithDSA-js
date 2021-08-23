import { swap } from './utils/array.js'

const a = [4, 2, 7, 1, 3]

// 插入
function insertionSort (list) {
  for (let i = 1; i < list.length; i++) {
    const temp = list[i]
    let indexOfEmptySlot = i

    for (let j = i - 1; j >= 0; j--) {
      if (list[j] > temp) {
        swap(list, j, j + 1) // 右移
        indexOfEmptySlot = j
      }
    }
    console.log('indexOfEmptySlot:' + indexOfEmptySlot, 'temp:' + temp)
    list[indexOfEmptySlot] = temp
  }

  return list
}

console.log(insertionSort(a))
