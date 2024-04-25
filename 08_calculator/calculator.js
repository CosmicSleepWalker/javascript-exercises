const add = function(num1, num2) {
	return parseInt(num1 + num2);
};

const subtract = function(num1, num2) {
	return parseInt(num1 - num2);
};

const sum = function(arr) {
  return parseInt(arr.reduce((total, num) => total + num, 0));
};

const multiply = function(arr) {
  return parseInt(arr.reduce((total, num) => total * num, 1));
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
	let total = num;
  for(let i = num - 1; i > 0; i--){
    total *= i;
  }
  return parseInt(total);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
