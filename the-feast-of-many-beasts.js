// Instructions
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

// Solution
function feast(beast, dish) {
  let beastFirstLetter = beast[0];
  let beastLastLetter = beast[beast.length -1];
  let dishFirstLetter = dish[0];
  let dishLastLetter = dish[dish.length - 1];
  
  return (beastFirstLetter == dishFirstLetter) && (beastLastLetter == dishLastLetter);
}

// Tests
console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)