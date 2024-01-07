// insertion sort
// Time complexity: O(n^2)
// Space complexity: O(1) - in place algorithm (no extra space) - good for memory
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j - 1, j);
      j--;
    }
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(
  "insertionSort([8, 5, 2, 9, 5, 6, 3]) :>> ",
  insertionSort([8, 5, 2, 9, 5, 6, 3])
);
