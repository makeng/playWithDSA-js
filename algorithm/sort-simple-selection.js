import { swap } from '../utils/array.js'

const a = [9, 1, 5, 8, 3, 7, 4, 6, 2]

// 选择
function selectionSort (list) {
  const { length } = list

  for (let i = 0; i < length - 1; i++) {
    let indexOfMin = i
    for (let j = i; j < length; j++) {
      if (list[j] < list[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      swap(list, indexOfMin, i)
    }
  }

  return list
}

console.log(selectionSort(a))
