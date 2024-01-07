// Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//
function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("fibonacciIterative(8) :>> ", fibonacciIterative(8));
console.log("fibonacciRecursive(8) :>> ", fibonacciRecursive(8));
