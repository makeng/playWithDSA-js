/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge (/* obj1, obj2, obj3, ... */) {
  var result = {}

  function assignValue (val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val)
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val)
    } else {
      result[key] = val
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue)
  }
  return result
}
