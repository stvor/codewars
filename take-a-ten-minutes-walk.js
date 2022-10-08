// Instructions
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// Solution
function isValidWalk(walk) {
  if (walk.length != 10) return false;
  
  const ns = walk.filter((direction) => direction == 'n');
  const ss = walk.filter((direction) => direction == 's');
  const ws = walk.filter((direction) => direction == 'w');
  const es = walk.filter((direction) => direction == 'e');
  
  if (ns.length == ss.length && ws.length == es.length) return true;
  else return false;
}

// Tests
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
