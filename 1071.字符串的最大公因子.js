/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const test = (a, b) => {
    return a.indexOf(b) === 0 || a.lastIndexOf(b) === a.length - 1
  }

  const gcd = (a, b) => {
    if (!a) return b
    if (!b) return a

    if (test(a, b)) {
      const temp = a.split(b).join('')
      return gcd(temp, b)
    } else if (test(b, a)) {
      return gcd(b, a)
    } else {
      return ''
    }
  }

  return gcd(str1, str2)
};
// @lc code=end

