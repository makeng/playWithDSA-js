import { consoleJsonString } from '../utils/console.js'

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

function array2Tree(id, list) {
  const child = []

  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (item.parentId === id) {
      item.child = array2Tree(item.id, list)
      child.push(item)
    }
  }

  return child
}

const res = array2Tree(null, arr)
consoleJsonString(res)
