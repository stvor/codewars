// Instructions
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Solution
function longest(s1, s2) {
  const chars = [...s1, ...s2];
  const uniqChars = [...new Set(chars)];
  const sortedString = uniqChars.sort().join('');
  
  return sortedString;
}

// Tests
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
