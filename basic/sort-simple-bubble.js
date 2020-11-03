const a = [9, 1, 5, 8, 3, 7, 4, 6, 2]
const b = [2, 1, 3, 4, 5, 6, 7, 8, 9]

function swap (list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

// 冒泡
function bubbleSort (list) {
  let isNotSwap = false

  // 如果都没有交换，表示从此往后的都符合了规律，不需要再进行
  for (let i = 0; i < list.length - 1 && !isNotSwap; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1)
        isNotSwap = false // 有交换，就表示还需要比较
      }
    }
  }

  return list
}

console.log(bubbleSort(a))
console.log(bubbleSort(b))
