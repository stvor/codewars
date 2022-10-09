// Instructions
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// Solution
function persistence(num) {
  if (String(num).length === 1) return 0;
  
  let count = 0;
  
  function multiply(arg) {
    const arr = [...String(arg)];
    const multiplied = arr.reduce((a, b) => a * b, 1);
    count += 1;
    if (String(multiplied).length > 1) multiply(multiplied);
  }
  
  multiply(num);
  
  return count;
}

// Tests
console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);
