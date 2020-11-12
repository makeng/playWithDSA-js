/* ---------------------------------------------------------------------------------------
* about:快排
* author:马兆铿（13790371603 810768333@qq.com）
* date:2020-11-12
* ---------------------------------------------------------------------------------------- */

const a = [30, 20, 60, 80, 70, 90, 50, 40, 10]

// 空间复杂度 O(1)
function quickSort(list) {
  // 交换
  function swap(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  // 分区
  function partition(arr, left, right) {
    const pivotIndex = right // 开始时候不知道选谁做枢轴，干脆让 right 来做
    const pivot = arr[pivotIndex]
    let storeIndex = left

    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        swap(arr, storeIndex, i)
        storeIndex += 1
      }
    }

    swap(arr, pivotIndex, storeIndex)
    return storeIndex
  }

  // 排序
  function sort(arr, left, right) {
    if (left > right) {
      return
    }
    const sortIndex = partition(arr, left, right)
    sort(arr, left, sortIndex - 1)
    sort(arr, sortIndex + 1, right)
  }

  sort(list, 0, list.length - 1)
  return list
}

/*
// 阮一峰解法（空间复杂度 O(n)），因为面试时候不允许
function quickSort(list) {
  if (list.length <= 1) {
    return list
  }

  const pivotIndex = Math.floor(list.length / 2)
  const pivot = list.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  list.forEach(item => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}
*/

console.log(quickSort(a))
