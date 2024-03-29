function factorialRecursive(n) {
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("FACTORIAL :>> ", {
  factorialRecursive: factorialRecursive(5),
  factorialIterative: factorialIterative(5),
});
