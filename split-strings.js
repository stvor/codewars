// Instructions
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Solution
function solution(str) {
  if (str.length % 2 !== 0) {
    str += '_';
  }
  
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result.push(str.substring(i, i + 2));
    }
  }
  
  return result;
  
}

// Tests
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);