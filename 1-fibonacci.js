function fibonacci(n) {
  if (n < 0 || typeof n !== 'number') return 'Error: the argument must be a positive number'

  const sequence = [0, 1]

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1]
  }

  return sequence[n]
}

console.log(fibonacci(12))

module.exports = fibonacci