class StringCalculator {
  public add(text: string): number | string | undefined {
    if (text) {
      return parseInt(text)
    } else {
      return 0
    }
  }
}

export default StringCalculator
