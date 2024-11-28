import StringCalculator from "../src"

describe("String Calculator", () => {
  let calculator: StringCalculator
  beforeEach(() => {
    calculator = new StringCalculator()
  })
  test("Should return 0 on empty string", () => {
    expect(calculator.add("")).toBe(0)
  })
})
