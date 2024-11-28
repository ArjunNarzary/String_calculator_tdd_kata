class StringCalculator {
  public add(text: string): number | string | undefined {
    if (!text) return 0
    const allCharacters: string[] = this.splitText(text)
    const arrayOfNumber = this.convertToNumber(allCharacters)
    return arrayOfNumber.reduce((a, b) => a + Number(b), 0)
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
}

export default StringCalculator
