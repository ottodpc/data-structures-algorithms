// merge sort with devide and conquer approach and recursion
// Time complexity: O(n log n)
// Space complexity: O(n) - not in place algorithm (extra space)
function mergeSort(array) {
  if (array.length <= 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIdx);
  const rightHalf = array.slice(middleIdx);
  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf) {
  const sortedArray = new Array(leftHalf.length + rightHalf.length);
  (let = 0), (i = 0), (j = 0);
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      sortedArray[k++] = leftHalf[i++];
    } else {
      sortedArray[k++] = rightHalf[j++];
    }
  }
  while (i < leftHalf.length) sortedArray[k++] = leftHalf[i++];
  while (j < rightHalf.length) sortedArray[k++] = rightHalf[j++];
  return sortedArray;
}

console.log(
  "mergeSort([8, 5, 2, 9, 5, 6, 3]) :>> ",
  mergeSort([8, 5, 2, 9, 5, 6, 3])
);
