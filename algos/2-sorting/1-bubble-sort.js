function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// bubble sort algorithm
// Time complexity: O(n^2)
// Space complexity: O(1) - in place algorithm (no extra space) - good for memory
function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      // console.log('i :>> ', i);
      if (array[i] > array[i + 1]) {
        // swap numbers
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

console.log(
  "bubbleSort([8, 5, 2, 9, 5, 6, 3]) :>> ",
  bubbleSort([8, 5, 2, 9, 5, 6, 3])
);
