let calculationsIteractive = 0;
// fibonacci - iterative
function fibIterative(n) {
  //   O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculationsIteractive++;
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log("fibIterative(6) :>> ", fibIterative(6));
console.log("fibIterative(6) :>> ", fibIterative(6));
console.log("fibIterative(6) :>> ", fibIterative(6));
console.log("calculationsIteractive :>> ", calculationsIteractive);
console.log("fibIterative(20) :>> ", fibIterative(20));
console.log("fibIterative(20) :>> ", fibIterative(20));
console.log("fibIterative(20) :>> ", fibIterative(20));
console.log("calculationsIteractive :>> ", calculationsIteractive);

let calculationsRecursive = 0;
// fibonacci - recursive
function fibRecursive(n) {
  calculationsRecursive++;
  //   O(2^n)
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log("fibRecursive(6) :>> ", fibRecursive(6));
console.log("fibRecursive(6) :>> ", fibRecursive(6));
console.log("fibRecursive(6) :>> ", fibRecursive(6));
console.log("calculationsRecursive :>> ", calculationsRecursive);
console.log("fibRecursive(20) :>> ", fibRecursive(20));
console.log("fibRecursive(20) :>> ", fibRecursive(20));
console.log("fibRecursive(20) :>> ", fibRecursive(20));
console.log("calculationsRecursive :>> ", calculationsRecursive);

let calculationsMemorization = 0;
// fibonacci with memorization
function fib(n, memo = {}) {
  calculationsMemorization++;
  //   O(n)
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log("fib(6) :>> ", fib(6));
console.log("fib(6) :>> ", fib(6));
console.log("fib(6) :>> ", fib(6));
console.log("calculationsMemorization :>> ", calculationsMemorization);
console.log("fib(20) :>> ", fib(20));
console.log("fib(20) :>> ", fib(20));
console.log("fib(20) :>> ", fib(20));
console.log("calculationsMemorization :>> ", calculationsMemorization);

let calculationsMemorizationAndClusre = 0;
// fibonacci with memorization and closure
function fibClosure() {
  const memo = {};
  //   O(n)
  return function fib(n) {
    calculationsMemorizationAndClusre++;
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
}

const fibClosure1 = fibClosure();

console.log("fibClosure1(6) :>> ", fibClosure1(6));
console.log("fibClosure1(6) :>> ", fibClosure1(6));
console.log("fibClosure1(6) :>> ", fibClosure1(6));
console.log(
  "calculationsMemorizationAndClusre :>> ",
  calculationsMemorizationAndClusre
);
console.log("fibClosure1(20) :>> ", fibClosure1(20));
console.log("fibClosure1(20) :>> ", fibClosure1(20));
console.log("fibClosure1(20) :>> ", fibClosure1(20));
console.log(
  "calculationsMemorizationAndClusre :>> ",
  calculationsMemorizationAndClusre
);

console.log("fibClosure1(200) :>> ", fibClosure1(200));
console.log(
  "calculationsMemorizationAndClusre :>> ",
  calculationsMemorizationAndClusre
);
console.log("fibClosure1(400) :>> ", fibClosure1(400));
console.log(
  "calculationsMemorizationAndClusre :>> ",
  calculationsMemorizationAndClusre
);

// NOTE: CONCLUSION
// 1. Iterative approach is the best for this case
// 2. Recursive approach is the worst for this case
// 3. Memorization is the best approach for recursive case
// 4. Closure is the best approach for recursive case
