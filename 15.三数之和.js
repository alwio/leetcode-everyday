/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  const result = []

  if (len < 3) return result

  nums.sort((a, b) => (a - b))
  console.log(nums)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return result
    if (i > 0 && nums[i] === nums[i - 1]) continue

    LEFT = i + 1
    RIGHT = len - 1

    while (LEFT < RIGHT) {
      const sum = nums[i] + nums[LEFT] + nums[RIGHT]
      if (sum === 0) {
        result.push([nums[i], nums[LEFT], nums[RIGHT]])
        while (LEFT < RIGHT && nums[LEFT] === nums[LEFT + 1]) {
          LEFT++
        }
        while (LEFT < RIGHT && nums[RIGHT] === nums[RIGHT - 1]) {
          RIGHT--
        }
        LEFT++
        RIGHT--
      } else if (sum > 0) {
        RIGHT--
      } else {
        LEFT++
      }
    }
  }

  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
// @lc code=end

