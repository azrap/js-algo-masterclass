function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      console.log("swapped arr:", arr);
    }
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

console.log([10, 4, 6, 8, 2], "bubba sorted:", bubbleSort([10, 4, 6, 8, 2]));
