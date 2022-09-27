function fizzbuzz() {
  let result = ''

  for (let i = 1; i <= 100; i++) {
    // 15 because 5 * 3
    if (i % 15 === 0) {
      result += "fizz buzz, "
    } else if (i % 5 === 0) {
      result += "buzz, "
    } else if (i % 3 === 0) {
      result += "fizz, "
    } else {
      result += `${i}, `
    }
  }

  return result
}

console.log(fizzbuzz())

module.exports = fizzbuzz