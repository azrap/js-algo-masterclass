function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0; //1
  let end = arr.length - 1; //5
  let mid = Math.floor((start + end) / 2); //2

  if (num < arr[start] || num > arr[end]) {
    return -1;
  }
  while (arr[mid] !== num && start <= end) {
    if (arr[mid] > num) {
      end = mid - 1; //3
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === num) {
    return mid;
  }

  return -1;
}
