function repeatWords(string) {
  if (typeof string !== 'string') return 'Error: The argument must be a string'

  // Delete the specials characters
  const formattedString = string.replace(/[^a-zA-Z ]/g, "").toLowerCase()
  const words = formattedString.split(' ')

  let repeatedWords = {}

  words.forEach(word => {
    if (repeatedWords[word] === undefined) {
      repeatedWords[word] = 1
    } else {
      repeatedWords[word] += 1
    }
  })

  return repeatedWords
}

console.log(repeatWords('Hi how are things? How are you? Are you a developer? I am also a developer'))

module.exports = repeatWords