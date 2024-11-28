import StringCalculator from "../src"

describe("String Calculator", () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  test("Should return 0 on empty string", () => {
    expect(calculator.add("")).toBe(0)
  })

  test("Should return 1 on '1'", () => {
    expect(calculator.add("1")).toBe(1)
  })

  test("Should return sum of 2 numbers delimited by comma", () => {
    expect(calculator.add("1,2")).toBe(3)
  })

  test("Should return sum of all numbers delimited by comma", () => {
    expect(calculator.add("1,2,3")).toBe(6)
  })

  test("Should return sum of all numbers delimited by newline", () => {
    expect(calculator.add("1,2\n3")).toBe(6)
  })

  test("Should return sum of all numbers with custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3)
  })

  test("Should throw and error if negative number provided", () => {
    expect(() => {
      calculator.add("//;\n-1;2;3")
    }).toThrow("Negatives not allowed: 1")
  })
})
