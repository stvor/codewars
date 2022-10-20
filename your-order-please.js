// Instructions
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Solution
function order(words){
  if (words === "") return "";
  
  let obj = {};
  words = words.split(" ");
  words.forEach((word) => {
    const position = [...word].map(Number).find(Number.isInteger);
    obj[position] = word;
  });
  const result = Object.values(obj).join(" ");
  
  return result;
}

// Tests
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "");