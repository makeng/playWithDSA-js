/* ---------------------------------------------------------------------------------------
* about:串的相关算法
* author:马兆铿（810768333@qq.com）
* date:2020-02-10
* ---------------------------------------------------------------------------------------- */
const log = console.log

/**
 * 普通自负匹配
 */
function StringMatch () {
  const str = 'goodgoogle'
  const testList = [
    'google',
    '',
    'gooe'
  ]

  /**
   * 查找
   * @param str
   * @param substr
   */
  function indexOfSubStr (str, substr) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === substr[0]) {
        let cnt = 1
        for (let j = 1; j < substr.length; j++) {
          if (substr[j] === str[i + j]) {
            cnt += 1
          }
        }
        if (cnt === substr.length) {
          return i
        }
      }
    }
    return -1
  }

  // 测试
  testList.forEach(item => {
    log(item)
    log(item, indexOfSubStr(str, item))
  })
}

log('/*------ 普通字串匹配 ------*/')
StringMatch()
