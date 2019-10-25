function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        idx = j;
      }
    }
    swap(arr, i, idx);
  }
  return arr;
}

//helper

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

console.log(
  [8, 1, 20, 3, 4, 7],
  "select sorted:",
  selectionSort([8, 1, 20, 3, 4, 7])
);
