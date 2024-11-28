class StringCalculator {
  public add(text: string): number | string | undefined | Error {
    if (!text) return 0
    const allCharacters: number[] = this.splitText(text)

    if (this.hasNegativeNumber(allCharacters)) {
      const negativeNumbers = this.findNegativeNumber(allCharacters)
      throw new Error(`Negatives not allowed: ${negativeNumbers}`)
    }

    const validNumbers = this.removeNumbersGreaterThan1000(allCharacters)
    return validNumbers.reduce((a, b) => a + Number(b), 0)
  }

  private splitText(text: string): number[] {
    //check for custom deleimitter
    const customDelimiterPattern = /^\/\/\[(.+)\]\n/
    const match = text.match(customDelimiterPattern)

    if (this.hasCustomDelimitter(text) && !match) {
      return this.splitTextForCustomDelimitter(text)
    }

    let inputText = text
    let defaultDelimiter = /,|\n/ // Default delimiters: comma or newline

    if (match) {
      // Extract the custom delimiter and numbers section
      const escapedDelimiter = match[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // Escape special characters
      defaultDelimiter = new RegExp(escapedDelimiter, "g") // Convert custom delimiter to a regex
      inputText = text.slice(match[0].length) // Remove delimiter definition
    }

    // Split the numbers section using the delimiter
    return inputText.split(defaultDelimiter).map(Number)
  }

  private hasCustomDelimitter(text: string): boolean {
    return text.includes("//")
  }

  private splitTextForCustomDelimitter(text: string): number[] {
    //Separate delimitter to new variable as delimiter
    const [delimiter, ...rest] = text.split("\n")
    //Now extract delimitter from \\; by slicing
    const customDelimitter = delimiter.slice(2)

    return rest.join("").split(customDelimitter).map(Number)
  }

  private hasNegativeNumber(arryOfNumber: number[]): boolean {
    return arryOfNumber.some((item) => Number(item) < 0)
  }

  private findNegativeNumber(arryOfNumber: number[]): string {
    return arryOfNumber
      .filter((item) => item < 0)
      .map((number) => Math.abs(number))
      .join(", ")
  }

  private removeNumbersGreaterThan1000(arryOfNumber: number[]): number[] {
    return arryOfNumber.filter((item) => item <= 1000)
  }
}

export default StringCalculator
