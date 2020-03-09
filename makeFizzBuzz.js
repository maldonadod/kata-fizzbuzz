const { range } = require("lodash")
const FIZZ = "Fizz"
const BUZZ = "Buzz"

function makeFizzBuzz(from, to) {
  const listOfNumbers = [...range(from, to), to]
  return listOfNumbers.map(toFizzBuzz)
}
function toFizzBuzz(n) {
  if (n % 3 === 0) {
    return FIZZ
  }
  if (n % 5 === 0) {
    return BUZZ
  }
  return `${n}`
}

module.exports = makeFizzBuzz;