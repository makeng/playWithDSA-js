const a = [9, 1, 5, 8, 3, 7, 4, 6, 2]
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function swap(list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

// 冒泡
function bubbleSort(list) {
  let cnt = 0
  let isSwapped = false

  for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1)
        isSwapped = true
      }
      cnt += 1
    }
    // 如果都没有交换，表示从此往后的都符合了规律，不需要再进行
    if (!isSwapped) {
      console.log('break')
      break
    }
  }

  console.log('steps: ', cnt)
  return list
}

console.log(bubbleSort(a))
console.log(bubbleSort(b))
