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
console.log(toCamelCase(''), '', "An empty string was provided but not returned");
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value");
