// Instructions
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

// Solution
function decodeMorse(morseCode){
  morseCode = morseCode.trim();
  const morseWords = morseCode.split(/\s{3}/g);
  const morseLetters = morseWords.map((word) => word.split(/\s/g));
  const humanLetters = morseLetters.map((word) => {
    // MORSE_CODE is a part of codewars example
    return word.map((letter) => MORSE_CODE[letter]);
  });
  return humanLetters.map((word) => word.join('')).join(' ');
}

// Tests
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');