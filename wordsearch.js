const wordSearch = (letters, word) => {
  // Convert each row of letters into a string
  const horizontalJoin = letters.map(ls => ls.join(''));

  // Iterate over each string in horizontalJoin
  for (let l of horizontalJoin) {
    // Check if the current string includes the word
    if (l.includes(word)) {
      return true; // Return true if the word is found horizontally
    }
  }

  // Create the transposed array to enable vertical search
  const transposedLetters = letters[0].map((col, i) => letters.map(row => row[i]));
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

  // Iterate over each string in verticalJoin
  for (let l of verticalJoin) {
    // Check if the current string includes the word
    if (l.includes(word)) {
      return true; // Return true if the word is found vertically
    }
  }

  return false; // Return false if the word is not found
};

module.exports = wordSearch;