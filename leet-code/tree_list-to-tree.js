const arr = [
  { id: 1, parentId: null, name: 'a' },
  { id: 2, parentId: null, name: 'b' },
  { id: 3, parentId: 1, name: 'c' },
  { id: 4, parentId: 2, name: 'd' },
  { id: 5, parentId: 1, name: 'e' },
  { id: 6, parentId: 3, name: 'f' },
  { id: 7, parentId: 4, name: 'g' },
  { id: 8, parentId: 7, name: 'h' },
]

function array2Tree (list, id) {
  const res = []
  list.forEach(item => {
    if (item.parentId === id) {
      item.children = array2Tree(list, item.id)
      res.push(item)
    }
  })
  return res
}

console.log(
  JSON.stringify(array2Tree(arr, null), null, 2)
)
