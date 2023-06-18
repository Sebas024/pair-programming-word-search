const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join('')); // Join each inner array of letters horizontally into a string

  for (let row of letters) { // Iterate over each row in the letters array
    let verticalString = '';
    for (let col of row) { // Iterate over each column in the current row
      verticalString += col; // Build a string vertically by concatenating characters
    }
    if (verticalString.includes(word)) { // Check if the vertical string includes the target word
      return true; // Return true if the word is found vertically
    }
  }

  const numRows = letters.length; // Get the number of rows in the letters array
  const numCols = letters[0].length; // Get the number of columns in the first row of the letters array

  for (let col = 0; col < numCols; col++) { // Iterate over each column
    let diagonalString = '';
    let r = 0;
    let c = col;
    while (r < numRows && c < numCols) { // Traverse diagonally starting from the top-left corner
      diagonalString += letters[r][c]; // Build a string by concatenating characters along the diagonal
      r++;
      c++;
    }
    if (diagonalString.includes(word)) { // Check if the diagonal string includes the target word
      return true; // Return true if the word is found diagonally
    }
  }

  for (let row = 1; row < numRows; row++) { // Iterate over each row starting from the second row
    let diagonalString = '';
    let r = row;
    let c = 0;
    while (r < numRows && c < numCols) { // Traverse diagonally starting from the top-left corner of each row
      diagonalString += letters[r][c]; // Build a string by concatenating characters along the diagonal
      r++;
      c++;
    }
    if (diagonalString.includes(word)) { // Check if the diagonal string includes the target word
      return true; // Return true if the word is found diagonally
    }
  }

  return false; // Return false if the word is not found in any direction
};

module.exports = wordSearch; // Export the wordSearch function as the module's export