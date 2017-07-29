function findMultiples(a, b, limit) {
  var arr = [];

  for (var i = 1; i < limit; i++) {
    if (i % a === 0 || i % b === 0) {
      arr.push(i);
    }
  }
  var total = arr.reduce((prev, cur) => {
    return prev + cur;
  });

  return total;
}

console.log(findMultiples(3, 5, 1000));
