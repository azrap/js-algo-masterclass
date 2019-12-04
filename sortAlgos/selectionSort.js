function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_idx = i;
        let  cur_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
           if (arr[min_idx] > arr[j]) {
               min_idx = j;
               cur_idx = j;
      }
    }
        swap(arr, i, cur_idx);
  }
  return arr;
}

//helper

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let smallest = arr[i];
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (smallest > arr[j]) {
//         smallest = arr[j];
//         idx = j;
//       }
//     }
//     swap(arr, i, idx);
//   }
//   return arr;
// }

// //helper

// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   return arr;
// };

console.log(
  [1, 5, 8, 4, 2, 9, 6, 0, 3, 7],
  "select sorted:",
  selectionSort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7])
);
