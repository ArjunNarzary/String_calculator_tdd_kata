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
})
