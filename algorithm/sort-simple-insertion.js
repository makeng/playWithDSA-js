const a = [5, 8, 1, 9, 3, 7, 4, 6, 2]

// 插入。构建有序表，然后一个个插入有序表
function insertionSort (list) {
  const sortedList = []
  sortedList[0] = list[0]
  
  for (let i = 1; i < list.length; i++) {
    const item = list[i]
    let isNotInserted = true

    for (let j = sortedList.length - 1; j >= 0; j--) {
      if (item > sortedList[j]) {
        sortedList.splice(j + 1, 0, item) // 插入
        isNotInserted = false
        break
      }
    }
    // 没有合适插入位置，则放置于最前面
    if (isNotInserted) {
      sortedList.unshift(item)
    }
  }

  return sortedList
}

console.log(insertionSort(a))
