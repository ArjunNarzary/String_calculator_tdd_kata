class StringCalculator {
  public add(text: string): number | string | undefined {
    if (!text) return 0
    console.log(this.splitText(text))
    const allCharacters: string[] = this.splitText(text)
    const arrayOfNumber = this.convertToNumber(allCharacters)
    return arrayOfNumber.reduce((a, b) => a + Number(b), 0)
  }

  private splitText(text: string): string[] {
    if (text.includes("//")) {
      //Separate delimitter to new variable as delimiter
      const [delimiter, ...rest] = text.split("\n")
      //Now extract delimitter from \\; by slicing
      const customDelimitter = delimiter.slice(2)

      return rest.join("").split(customDelimitter)
    }
    return text.split(/[,|\n]/)
  }

  private convertToNumber(arryOfString: string[]): number[] {
    return arryOfString.map((item) => Number(item))
  }
}

export default StringCalculator
