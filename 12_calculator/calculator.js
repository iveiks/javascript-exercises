const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (nr) {
  let arr = [];
  for (let i = nr; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
