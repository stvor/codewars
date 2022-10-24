// Instructions
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// Solution
function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabetSlice = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[0]) + array.length + 1);
  array.forEach(char => {
    alphabetSlice = alphabetSlice.replace(char, '');
  });
  
  return alphabetSlice;
}

// Tests
console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');