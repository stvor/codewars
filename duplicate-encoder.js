// Instructions
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// Solution
function duplicateEncode(word){
  const lowerCasedArr = word.toLowerCase().split("");
  const obj = {};
  
  for (let char of lowerCasedArr) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  
  let result = lowerCasedArr
    .map((char) => obj[char] == 1 ? "(" : ")")
    .join("");
  
  return result;
}

// Tests
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");
