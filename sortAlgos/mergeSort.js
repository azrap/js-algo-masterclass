function sortArray(arr1, arr2) {
  sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  console.log(arr1.length, arr2.length);
  if (i >= arr1.length) {
    sortedArr = sortedArr.concat(arr2.slice(j));
  } else {
    sortedArr = sortedArr.concat(arr1.slice(i));
  }

  return sortedArr;
}

// 1, 2, 6, 7, 8, 9, 10, 12, 15, 20, 50;

console.log(sortArray([2, 6, 7, 9, 15, 20], [1, 8, 10, 50]));
console.log(sortArray([], [1, 8, 10, 50]));
