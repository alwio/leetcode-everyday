/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let leftHeight = height[left]
  let rightHeight = height[right]
  let minHeight = Math.min(leftHeight, rightHeight)
  let maxArea = minHeight * (right - left)

  while (left < right) {
    if (minHeight === leftHeight) {
      left++

      while (height[left] <= leftHeight && left < right) {
        left++
      }
    }

    if (minHeight === rightHeight) {
      right--

      while (height[right] <= rightHeight && left < right) {
        right--
      }
    }

    leftHeight = height[left]
    rightHeight = height[right]

    minHeight = Math.min(leftHeight, rightHeight)

    maxArea < minHeight * (right - left) && (maxArea = minHeight * (right - left))
  }
};
// @lc code=end

