const a = [30, 20, 60, 80, 70, 90, 50, 40, 10]

// 堆排序
function mergeSort (list) {
  function merge (arr1, arr2) {
    console.log('--合并--', arr1, arr2)
    const res = [...arr1]

    for (let i = 0; i < arr2.length; i++) {
      const item = arr2[i]
      let isInserted = false
      for (let j = res.length - 1; j >= 0; j--) {
        if (item > res[j]) {
          res.splice(j + 1, 0, item)
          isInserted = true
          break
        }
      }
      if (!isInserted) {
        res.unshift(item)
      }
    }
    console.log('结果', res)
    return res
  }

  function mSort (list) {
    const mid = Math.floor(list.length / 2)
    let listL = list.slice(0, mid)
    let listR = list.slice(mid)

    if (mid === 0) {
      return list
    }
    listL = mSort(listL)
    listR = mSort(listR)
    return merge(listL, listR)
  }

  return mSort(list)
}

console.log(mergeSort(a))
