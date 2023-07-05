/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = Math.pow(2, 31) - 1
  let reverseX = 0

  while (x !== 0) {
    reverseX = reverseX * 10 + x % 10
    x = parseInt(x / 10)
  }

  return reverseX > limit || reverseX < -limit ? 0 : reverseX
};

var reverse = function (x) {
  const reverseStringX = Math.abs(x).toString().split('').reverse().join('')
  const reverseX = x < 0 ? -Number(reverseStringX) : Number(reverseStringX)
  return reverseX > Math.pow(-2, 31) && reverseX < Math.pow(2, 31) - 1 ? reverseX : 0
};
// @lc code=end

