/* ---------------------------------------------------------------------------------------
* about:快排
* author:马兆铿（137937163 81768333@qq.com）
* date:22-11-12
* ---------------------------------------------------------------------------------------- */

// const a = [0, 5, 2, 1, 6, 3] // exp
const a = [30, 20, 60, 80, 70, 90, 50, 40, 10]

// ✔️ 空间复杂度 O(1)
function quickSort (list) {
  // 交换
  function swap (arr, i, j) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  // 分区
  function partition (arr, left, right) {
    const pivotIndex = right
    const pivot = arr[pivotIndex]
    let i = left // 左移指针
    let j = right - 1 // 右移指针

    // 直到指针相遇。为什么是 '<=' 而不是 '<'？因为当剩下 3 个时，内层的 j 不能移动，i 要移动到 j 上，完成比较工作
    while (i <= j) {
      if (arr[i] > pivot) {
        if (arr[j] < pivot) {
          swap(arr, i, j)
        } else {
          j -= 1
        }
      } else {
        i += 1
      }
    }

    swap(arr, i, pivotIndex)
    return i
  }
  // 排序
  function sort (arr, left, right) {
    if (left > right) return

    const pivotIndex = partition(arr, left, right)
    sort(arr, left, pivotIndex - 1)
    sort(arr, pivotIndex + 1, right)
  }

  sort(list, 0, list.length - 1)
  return list
}

// ⭕️ 阮一峰解法（空间复杂度 O(n)），因为面试时候不允许
/*
function quickSort(list) {
  if (list.length <= 1) {
    return list
  }
  const left = []
  const right = []
  const pivotIndex = Math.ceil(list.length / 2)
  const pivot = list.splice(pivotIndex, 1)[0]
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    item < pivot
      ? left.push(item)
      : right.push(item)
  }

  return quickSort(left).concat(pivot, quickSort(right))
}
*/

console.log(quickSort(a))
