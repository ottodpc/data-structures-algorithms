// binary search
// Time complexity: O(log n)
// Space complexity: O(1)
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let potentialMatch = array[middle];
    if (target === potentialMatch) return middle;
    else if (target < potentialMatch) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

console.log(
  "binarySearch([8, 5, 2, 9, 5, 6, 3], 5) :>> ",
  binarySearch([8, 5, 2, 9, 5, 6, 3], 5)
);
console.log(
  "binarySearch([8, 5, 2, 9, 5, 6, 3], 10) :>> ",
  binarySearch([8, 5, 2, 9, 5, 6, 3], 10)
);
