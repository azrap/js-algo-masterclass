function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
      console.log("swapped arr:", arr);
    }

    if (noSwaps) break;
  }
  return arr;
  // loop through the array, take the nth element and compare to each element in the array
  //if a[n]>a[n+1] swap\
  //do it for each element
}

//helper

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

console.log([8, 1, 2, 3, 4], "bubba sorted:", bubbleSort([8, 1, 2, 3, 4]));
