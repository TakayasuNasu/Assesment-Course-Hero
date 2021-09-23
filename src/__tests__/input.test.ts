const canSeparate = (input: any) => {
  const words = input.split(' ')
  if (words.length < 2) {
    return false
  } else {
    return true
  }
}

const validCase2 = (input: any) => {
  const result = /([0-9].*[a-zA-Z]|[a-zA-Z].*[0-9])/.test(input)
  return result
}

const validCase3 = (input: any) => {
  const result = /[A-Za-z]+/.test(input)
  return result
}

const validCase4 = (input: any) => {
  const splitString = input.split(/(\d+)/).filter((i: string) => i)
  if (splitString.length != 2) {
    return false
  }
  if (/[a-zA-Z]+/.test(splitString[0])) {
    const w = splitString[0]
    const n = splitString[1]
    const result = /(Spring|Summer|Fall|Winter|S|Su|F|W)/i.test(w)
    if (!result) {
      return false
    }
    if (n.length != 2 && n.length != 4) {
      return false
    }

  } else {
    const w = splitString[1]
    const n = splitString[0]
    const result = /(Spring|Summer|Fall|Winter|S|Su|F|W)/i.test(w)
    if (!result) {
      return false
    }
    if (n.length != 2 && n.length != 4) {
      return false
    }
  }
  return true
}

const isLetter = (input: any) => {
  const result = /^[a-z]+$/i.test(input)
  return result
}

const testCases1 = [
  ['CS111 2018 Fall', true],
  ['CS-111 Fall 2016', true],
  ['CS456 Fall2022', true],
  ['Math 123 2015 Spring', true],
  ['Math 123 Fall2016', true],
  ['Math2015', false],
]

const testCases2 = [
  ['CS111', true],
  ['CS-111', true],
  ['CS:111', true],
  ['CS', false],
  ['111', false],
]

const testCases3 = [
  ['CS', true],
  ['123', false],
  [':23', false],
  ['-3', false],
]

const testCases4 = [
  ['2018Fall', true],
  ['18Fall', true],
  ['18Summer', true],
  ['18Winter', true],
  ['18F', true],
  ['18Su', true],
  ['18Fall', true],
  ['Fall2020', true],
  ['20AA', false],
  ['Fall200', false],
  ['Fall20444', false],
]

describe('input', () => {
  describe('valid', () => {
    test.each(testCases1)('canSeparate', (a, expected) => {
      expect(canSeparate(a)).toBe(expected)
    })
    test.each(testCases2)('validCase2', (a, expected) => {
      expect(validCase2(a)).toBe(expected)
    })
    test.each(testCases3)('validCase3', (a, expected) => {
      expect(validCase3(a)).toBe(expected)
    })
    test.each(testCases4)('validCase4', (a, expected) => {
      expect(validCase4(a)).toBe(expected)
    })
    test.each([['abc', true],['a1a', false]])('isLetter', (a, expected) => {
      expect(isLetter(a)).toBe(expected)
    })
  })
})

export {}
