/* ---------------------------------------------------------------------------------------
* about:栈的应用。
* author:马兆铿（810768333@qq.com）
* date:2020-02-06
* ---------------------------------------------------------------------------------------- */
const log = console.log

/**
 * 四则运算，要解决先乘除、先括号问题。不支持()内超过 2 个数字。
 * @param str
 */
function calculate (str) {
  const reg_calSign = /[+\-*\/]/

  // 运算符定义
  function calTwoNum (num1, num2, sign) {
    if (typeof num1 === 'string') {
      num1 = Number(num1)
    }
    if (typeof num2 === 'string') {
      num2 = Number(num2)
    }
    return {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
      '/': num1 / num2,
    }[sign]
  }

  // 解析
  let result = str
  let calOrderList = [] // 运算栈

  function replaceSignByMarkThenCal (reg_match, matchIndex, reg_stop) {
    const MARK = 'MARK'

    if (result.match(reg_stop)) {
      const subStr = reg_match.exec(result)
      if (!subStr) {
        throw new Error('计算符号错误，不允许加减乘除以外运算')
      }
      calOrderList.push(subStr[matchIndex])
      result = result.replace(reg_match, MARK)
      replaceSignByMarkThenCal(reg_match, matchIndex, reg_stop)
    } else {
      while (calOrderList.length) {
        let item = calOrderList.shift() // 出栈
        if (item.indexOf(MARK) > -1) { // MARK 的是上一步的结果
          item = item.replace(MARK, result)
        }
        const sign = item.match(reg_calSign)[0]
        const sp = item.split(sign)
        const res = calTwoNum(sp[0], sp[1], sign)
        if (result.indexOf(MARK) > -1) {
          result = result.replace(MARK, res) // 仍是多元式
        } else { // 最终结果
          result = String(res)
        }
      }
    }
  }

  replaceSignByMarkThenCal(/\((.+?)\)/, 1, /\(/,)
  replaceSignByMarkThenCal(/\w+[*\/]\w+/, 0, /[*\/]/,)
  replaceSignByMarkThenCal(/\w+[+\-]\w+/, 0, /[+\-]/,)

  return result
}

log('/*------ 栈实现四则运算 ------*/')
log(calculate('9+(3-1)*3+10/2'))
