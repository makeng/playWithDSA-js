const a = [9, 1, 5, 8, 3, 7, 4, 6, 2]

function swap (list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

// 选择
function selectionSort (list) {
  const { length } = list

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      const lastIndex = length - i - 1
      if (list[j] > list[lastIndex]) {
        swap(list, j, lastIndex)
      }
    }
  }

  return list
}

console.log(selectionSort(a))
