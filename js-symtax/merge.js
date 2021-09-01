const isObject = x => typeof x === 'object';

function merge(...args) {
  const res = {};
  // 属性赋予
  const assignValue = (to, from) => {
    for (let key in from) {
      if (from.hasOwnProperty(key)) {
        const fromPropVal = from[key];
        const toPropVal = to[key];

        (isObject(fromPropVal) && isObject(toPropVal))
          ? to[key] = merge(toPropVal, fromPropVal)
          : to[key] = fromPropVal;
      }
    }
  };

  for (let i = 0; i < args.length; i++) {
    assignValue(res, args[i]);
  }
  return res;
}

const a = { bin: { haha: 1, hehe: 1, cas: 1 } };
const b = { bin: { haha: 2, hehe: 2 } };

console.log(merge(a, b)); // { bin: { haha: 2, hehe: 2, cas: 1 } }
