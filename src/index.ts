class StringCalculator {
  public add(text: string): number | string | undefined | Error {
    if (!text) return 0
    const allCharacters: string[] = this.splitText(text)
    const arrayOfNumber = this.convertToNumber(allCharacters)

    if (this.hasNegativeNumber(arrayOfNumber)) {
      const negativeNumbers = this.findNegativeNumber(arrayOfNumber)
      throw new Error(`Negatives not allowed: ${negativeNumbers}`)
    }

    const validNumbers = this.removeNumbersGreaterThan1000(arrayOfNumber)
    return validNumbers.reduce((a, b) => a + Number(b), 0)
  }

  private splitText(text: string): string[] {
    if (this.hasCustomDelimitter(text)) {
      return this.splitTextForCustomDelimitter(text)
    }
    return text.split(/[,|\n]/)
  }

  private convertToNumber(arryOfString: string[]): number[] {
    return arryOfString.map((item) => Number(item))
  }

  private hasCustomDelimitter(text: string): boolean {
    return text.includes("//")
  }

  private splitTextForCustomDelimitter(text: string): string[] {
    //Separate delimitter to new variable as delimiter
    const [delimiter, ...rest] = text.split("\n")
    //Now extract delimitter from \\; by slicing
    const customDelimitter = delimiter.slice(2)

    return rest.join("").split(customDelimitter)
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
