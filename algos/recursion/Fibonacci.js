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
fibonacciIterative(3);
fibonacciIterative(5);
fibonacciIterative(8);
