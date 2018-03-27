/**
 * 根据某一个对象数组arr及对象的某个属性attr，
 * 移除属性attr值相同的对象，返回新的对象数组
 * 
 * @method   removeDuplicateObjectByAttr
 * @param    {Array[Object]}             arr  需要过滤的对象数组
 * @param    {attr}                      attr 需要按照过滤的属性
 * @return   {Array}                         返回新数组
 * @author   朱阳星
 * @email    zhuyangxing@foxmail.com
 * @datetime 2018-03-25T10:59:33+080
 */
function removeDuplicateObjectByAttr(arr, attr) {
  if (!Array.isArray(arr)) {
    try {
      throw new Error("the frist arguments must be an array")
    } catch (e) {
      console.error(e);
    }
    return arr
  }
  if (typeof attr !== "string") {
    try {
      throw new Error("the second arguments must be a string")
    } catch (e) {
      console.error(e);
    }
    return arr
  }
  let set = new Set()
  let arr2 = []
  arr.forEach(ele => {
    if (ele[attr] === undefined) {
      throw new Error(JSON.stringify(ele) + " has no " + attr + ' attribute')
    } else {
      if (!set.has(ele[attr])) {
        set.add(ele[attr])
        arr2.push(ele)
      }
    }
  })
  return arr2
}
module.exports = removeDuplicateObjectByAttr;