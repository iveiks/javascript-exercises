const palindromes = function (string) {
  // Build two arrays from the string, one in reverse
  let arr = string.split('');
  let arrRev = string.split('').reverse();

  // TODO: Add and array that contains the alphabet?
  // TODO: Filter out non-characters from both arrays

  // Compare the two arrays, if one array position
  // doesn't match, return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arrRev[i]) {
      return false;
    } else {
      return true;
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
