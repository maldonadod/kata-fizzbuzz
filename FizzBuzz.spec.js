const makeFizzBuzz = require("./makeFizzBuzz")

describe("FizzBuzz - when prints numbers from 1 to 3", () => {

  it("should print 1 and 2 as it is and Fizz instead of 3", () => {
    const actual = makeFizzBuzz(1, 3)
    expect(actual).toEqual(["1", "2", "Fizz"])
  })
})
describe("FizzBuzz - when prints numbers from 4 to 5", () => {

  it("should print 4 as it is and Buzz instead of 5", () => {
    const actual = makeFizzBuzz(4, 5)
    expect(actual).toEqual(["4", "Buzz"])
  })
})
describe("FizzBuzz - when prints numbers from 8 to 10", () => {

  it("should print 8 as it is, Fizz instead of 9 and Buzz instead of 10", () => {
    const actual = makeFizzBuzz(8, 10)
    expect(actual).toEqual(["8", "Fizz", "Buzz"])
  })
})
describe("FizzBuzz - when prints numbers from 13 to 15", () => {

  it("should print 13 and 14 as it is and FizzBuzz instead of 15", () => {
    const actual = makeFizzBuzz(13, 15)
    expect(actual).toEqual(["13", "14", "FizzBuzz"])
  })
})