// selection sort
// Time complexity: O(n^2)
// Space complexity: O(1) - in place algorithm (no extra space) - good for memory
function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(array, startIdx, smallestIdx);
    startIdx++;
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
console.log(
  "selectionSort([8, 5, 2, 9, 5, 6, 3]) :>> ",
  selectionSort([8, 5, 2, 9, 5, 6, 3])
);
