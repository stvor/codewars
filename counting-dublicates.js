// Instructions
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// Solution
function duplicateCount(text){
  const lowerCased = text.toLowerCase();
  let result = 0;
  const obj = {};
  
  for (let char of lowerCased) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  
  for (let count of Object.values(obj)) {
    if (count > 1) {
      result += 1;
    }
  }

  return result;
}

// Tests
console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);
