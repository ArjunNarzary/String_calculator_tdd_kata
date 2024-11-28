class StringCalculator {
  public add(text: string): number | string | undefined {
    if (!text) return 0
    if (text.includes(",") || text.includes("\n")) {
      const numbers = text.split(/[,|\n]/)
      return numbers.reduce((a, b) => a + Number(b), 0)
    }
    return Number(text)
  }
}

export default StringCalculator
