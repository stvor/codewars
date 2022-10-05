// Instructions
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// Solution
function findOutlier(integers){
  let outlierIndex = 0;
  const reminders = integers
    .map((integer) => integer % 2)
    .map(Math.abs);
  const sumOfReminders = reminders.reduce((a, b) => a + b);
  
  if (sumOfReminders > 1) {
    outlierIndex = reminders.indexOf(0);
  } else {
    outlierIndex = reminders.indexOf(1);
  }
  
  return integers[outlierIndex];
}

// Tests
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);