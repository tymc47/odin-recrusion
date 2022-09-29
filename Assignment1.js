//iteration ver. of Fibonacci
function fibs(n) {
  if (n <= 0) return [];
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) result.push(0);
    if (i === 1) result.push(1);
    if (i >= 2) {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}

//recursion ver. of Fibonacci
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return fibsRec(n - 1).concat(fibsRec(n - 2)[n - 3] + fibsRec(n - 1)[n - 2]);
}

console.log(fibs(8));
console.log(fibsRec(8));
