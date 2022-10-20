// Instructions
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Solution
function toCamelCase(str){
  const arr = str.split(/[-_]/g);
  const upperCased = arr.map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1); 
    }
  });
  const result = upperCased.join('');
  
  return result;
}

// Tests
console.log(toCamelCase(''), '');
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
