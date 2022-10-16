// Instructions
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

// Solution
function digPow(n, p){
  const digitsString = String(n);
  let sum = 0;
  let result = 0;

  for (let i = 0; i < digitsString.length; i++) {
    sum += digitsString[i] ** (p + i);
  }
  
  if (sum % n === 0) {
    result = sum / n;
  } else {
    result = -1;
  }
  
  return result;
}

// Tests
console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);