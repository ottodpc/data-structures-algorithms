function mergeArray(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    arr.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    arr.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j));
  }
  return arr;
}

const mergedArray = mergeArray([1, 3, 5, 7], [2, 4, 6]);
console.log("mergedArray :>> ", mergedArray);
