/*
 * @lc app=leetcode.cn id=2624 lang=javascript
 *
 * [2624] 蜗牛排序
 */

// @lc code=start
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {array}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return []
  const output = []
  for (let i = 0; i < rowsCount; i++) {
    output.push([])
  }

  this.forEach((item, index) => {
    const row = index % rowsCount
    if ((index + 1) % (rowsCount * 2) > rowsCount || (index + 1) % (rowsCount * 2) === 0) {
      output[rowsCount - row - 1].push(item)
    } else {
      output[row].push(item)
    }
  })

  return output
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(arr.snail(4, 5))