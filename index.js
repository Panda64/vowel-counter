module.exports = function(string) {
    const vowels = ["a", "e", "i", "o", "u"]
    let counter = 0

    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
        counter++
        }
    }

    return counter
  }