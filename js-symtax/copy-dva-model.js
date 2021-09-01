/* ---------------------------------------------------------------------------------------
* about: Dva 的 model 的复制行为。浅复制就可以满足要求。
* author:马兆铿（13790371603 810768333@qq.com）
* date:2021-09-01
* ---------------------------------------------------------------------------------------- */
import merge from 'lodash/merge.js'

// old version
const combineModels = (...models) =>
  models.reduce((sum, item) => ({
    ...sum,
    ...item,
    state: {
      ...sum.state,
      ...item.state
    },
    reducers: {
      ...sum.reducers,
      ...item.reducers
    },
    effects: {
      ...sum.effects,
      ...item.effects
    },
    subscriptions: {
      ...sum.subscriptions,
      ...item.subscriptions
    }
  }), {})

// new version
function mergeModels(...modelList) {
  return modelList.reduce((acc, item) => {
    for (const key in item) {
      acc[key] = merge(acc[key], item[key])
    }
    return acc
  }, {})
}

/* ----------------------------------------- data ----------------------------------------- */
const ModelA = namespace => {
  return {
    namespace,
    state: {
      name: namespace,
      age: 19,
      gender: 'mail'
    },
    effects: {
      jump() {
        console.log('jump')
      },
      run() {
        console.log('run')
      }
    },
    reducers: {
      think() {
        console.log('think')
      },
      updateState(state, { payload }) {
        return { ...state, ...payload }
      },
    }
  }
}
const ModelB = namespace => {
  return {
    namespace,
    state: {
      name: namespace,
      age: 30,
      gender: 'female',
      phone: '8624069'
    },
    effects: {
      kick() {
        console.log('jump')
      },
      run() {
        console.log('run')
      }
    },
    reducers: {
      call() {
        console.log('call')
      },
      updateState(state, { payload }) {
        return { ...state, ...payload }
      },
    }
  }
}

/* ----------------------------------------- exec ----------------------------------------- */
const modelA = ModelA('Tony')
const modelB = ModelB('Benny')

console.time()
const modelCombined = combineModels(modelA, modelB)
console.log(modelCombined)
console.log('--- time ---')
console.timeEnd()

console.log('------------------------------------')

console.time()
const modelMerged = mergeModels(modelA, modelB)
console.log(modelMerged)
console.log('--- time ---')
console.timeEnd()
