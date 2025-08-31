const reverseString = function (string) {
  const newString = string.split('');
  let revString = '';
  for (i = newString.length; i > 0; i--) {
    revString += newString.splice(-1);
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
