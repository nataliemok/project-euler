function fib_sequence(n) {
  let arr = [1, 1];

  for (let i = 1; i <= n - 2; i++) {
    let num = arr[i] + arr[i - 1];
    if (num > 4000000) {
      break;
    }
    arr.push(num);
  }

  var sum = 0

  arr.forEach((num) => {
    if (num % 2 === 0) {
      sum += num;
    }
  });

  return sum;
}

console.log(fib_sequence(1000000));