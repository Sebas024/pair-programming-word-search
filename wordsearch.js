const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let row of letters) {
    let verticalString = '';
    for (let col of row) {
      verticalString += col;
    }
    if (verticalString.includes(word)) {
      return true;
    }
  }

  const numRows = letters.length;
  const numCols = letters[0].length;

  for (let col = 0; col < numCols; col++) {
    let diagonalString = '';
    let r = 0;
    let c = col;
    while (r < numRows && c < numCols) {
      diagonalString += letters[r][c];
      r++;
      c++;
    }
    if (diagonalString.includes(word)) {
      return true;
    }
  }

  for (let row = 1; row < numRows; row++) {
    let diagonalString = '';
    let r = row;
    let c = 0;
    while (r < numRows && c < numCols) {
      diagonalString += letters[r][c];
      r++;
      c++;
    }
    if (diagonalString.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;