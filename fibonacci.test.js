const fibonacci = require('./1-fibonacci')

describe('Fibonacci', () => {
  test('If the number is 0 the result must be 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  test('If the number is 1 the result must be 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  test('If the number is 7 the result must be 13', () => {
    expect(fibonacci(7)).toBe(13)
  })

  test('If the number negative must be a error', () => {
    expect(fibonacci(-15)).toBe('Error: the argument must be a positive number')
  })

  test('If the number is not a number must be a error', () => {
    expect(fibonacci('test')).toBe('Error: the argument must be a positive number')
  })
})