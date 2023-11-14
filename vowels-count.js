// Instructions
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Solution 1
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Solution 2
function getCount(str) {
  return str.split('').filter((char) => 'aeiouAEIOU'.includes(c)).length;
}

// Solution 3
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// Solution 4
function getCount(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str.toLowerCase()[i] === vowels[j]) {
        count++;   
      }
    }
  }
  
  return count;
}

// Tests
console.log(getCount('apple'), 2);
console.log(getCount('HELLO, CHAT!'), 3);
