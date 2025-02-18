const getSumMiddleArr = (arr) => arr
  .slice(0, Math.ceil(arr.length / 2))
  .reduce((acc, num) => acc + num, 0)

console.log(getSumMiddleArr([1, 2, 3, 4, 5, 6]))
console.log(getSumMiddleArr([-4, -4, 2, 5]))

