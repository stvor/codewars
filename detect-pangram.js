// Instructions
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// Solution
function isPangram(string){
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (string.length < alphabet.length) return false;
  
  for (let char of string) {
    alphabet = alphabet.replace(char, '');
  }
  
  return alphabet.length === 0;
}

// Tests
console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("This is not a pangram."), false);