const a = [1, 5, 8, 9, 3, 7, 4, 6, 2]

// 插入。构建有序表，然后一个个插入有序表
function insertionSort(list) {
  const sortedList = []

  sortedList[0] = list[0]
  for (let i = 1; i < list.length; i++) {
    const item = list[i]
    if (item < sortedList[i - 1]) {
      for (let j = sortedList.length - 2; j >= 0; j--) {
        if (item > sortedList[j]) {
          sortedList.splice(j + 1, 0, item)
          break
        }
      }
    } else {
      sortedList.push(item)
    }
  }

  return sortedList
}

function shellSort(list) {
  const {length} = list
  let gap = Math.trunc(length / 2)

  while (gap >= 1) {
    const subList = []
    const indexList = [] // 抽样的序号
    // 构建抽样子列表
    for (let i = 0; i < length; i += gap) {
      indexList.push(i)
      subList.push(list[i])
    }
    const subListSorted = insertionSort(subList)
    // 子组排序后，放回原数组
    for (let i = 0; i < indexList.length; i++) {
      const index = indexList[i]
      list[index] = subListSorted.shift()
    }
    // 下一轮条件
    gap = Math.trunc(gap / 2)
  }

  return list
}

console.log(shellSort(a))
