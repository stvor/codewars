// Instructions
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Solution
function uniqueInOrder(iterable) {
  if (!Array.isArray(iterable)) {
    iterable = Array.from(iterable);
  }
  
  const result = iterable.filter((item, index, array) => {
    if (item !== array[index + 1]) return true;
  });
  
  return result;
}

// Tests
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3]);