
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (
      matrix == undefined
      ||
      matrix.reduce((prev, current) => prev + current, 0) === 0
  ) return []

  return matrix
      .map(item => matrix.indexOf(item) % 2 === 0 ? item : item.reverse())
      .join(',')
      .split(',')
}