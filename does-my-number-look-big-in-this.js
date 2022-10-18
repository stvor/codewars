// Instructions
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// Solution
function narcissistic(value) {
  const valueString = String(value);
  const ditigsCount = valueString.length;
  let sum = 0;
  
  for (let i = 0; i < ditigsCount; i++) {
    sum += valueString[i] ** ditigsCount;
  }
  
  return sum === value;
}

// Tests
console.log(narcissistic( 7 ), true, "7 is narcissistic" );
console.log(narcissistic( 153 ), true, "153 is narcissistic" );