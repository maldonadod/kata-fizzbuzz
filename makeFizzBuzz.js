const { range } = require("lodash")

const EMPTY_STRING = ""
const FIZZ = "Fizz"
const BUZZ = "Buzz"

function makeFizzBuzz(from, to) {
  return makeRange(from, to).map(toFizzBuzz)
}
function makeRange(from, to) {
  return [...range(from, to), to]
}
function toFizzBuzz(n) {
  let result = write(FIZZ, EMPTY_STRING, whenMultipleOf(3, n))
  result = write(BUZZ, result, whenMultipleOf(5, n))
  return result === EMPTY_STRING
    ? n.toString()
    : result
}
function write(word, result, condition) {
  return condition
    ? result + word
    : result
}
function whenMultipleOf(multiple, n) {
  return n % multiple === 0
}

module.exports = makeFizzBuzz;