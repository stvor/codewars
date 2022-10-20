// Instructions
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// Solution
function findUniq(arr) {
  arr.sort();
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

// Tests
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
