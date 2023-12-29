function firstRecurringCharacter(input) {
  // O(n)
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
}

const two = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]), // 2
  one = firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]); // 1

console.log("two :>> ", two);
console.log("one :>> ", one);
