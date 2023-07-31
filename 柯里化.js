var myCurried = function (fn) {
  const arglist = []

  const curry = function (...args) {
    if (args.length) {
      arglist.push(...args)
      return curry
    } else {
      return fn(...arglist)
    }
  }

  return curry
}

const func = myCurried((...args) => {
  let sum = 0
  args.forEach((arg) => { sum += arg })
  return sum
})
console.log(func(1, 2, 3)(1)(4, 6)())
