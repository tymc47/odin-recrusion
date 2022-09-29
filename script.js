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

console.log(fibs(8));
