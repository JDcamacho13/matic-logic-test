const repeatedWords = require('./2-repeatWords')

describe('Repeated Words', () => {
  test('If not pass a string must return a error', () => {
    expect(repeatedWords(54)).toBe('Error: The argument must be a string')
  })

  test('If is a sting must be return a object with the count of every word', () => {
    const phrase = "Hi how are things? How are you? Are you a developer? I am also a developer"
    const resultObject = {
      hi: 1,
      how: 2,
      are: 3,
      things: 1,
      you: 2,
      a: 2,
      developer: 2,
      i: 1,
      am: 1,
      also: 1
    }

    expect(repeatedWords(phrase)).toEqual(resultObject)
  })

})