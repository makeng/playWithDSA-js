const isObject = x => typeof x === 'object';
const { isArray } = Array;

/**
 * 深合并
 * @param objList 对象列表
 */
function deepMerge(...objList) {
  const firstParam = objList[0];
  const res = isArray(firstParam) ? [] : {};

  function assignValue(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const propValue = obj[key];

        // 数组直接合并
        if (isArray(res[key]) && isArray(propValue)) {
          res[key] = res[key].concat(propValue);
        }
        // 按照类型选择往下合并还是赋值
        else if (isObject(res[key]) && isObject(propValue)) {
          res[key] = deepMerge(res[key], propValue);
        } else if (isObject(propValue)) {
          const newVal = isArray(propValue) ? [] : {};
          res[key] = deepMerge(newVal, propValue);
        } else {
          res[key] = propValue;
        }
      }
    }
  }

  for (let obj of objList) {
    assignValue(obj);
  }
  return res;
}

const res = deepMerge(
  { name: 'Tony', studentList: [{ name: 'Tom' }, { name: 'Toby' }], tool: { size: 19 } },
  { age: 10, studentList: [{ name: 'Kat' }, { name: 'Ken' }], tool: { name: 'screwdriver' } }
);

console.log(JSON.stringify(res, null, 2));
