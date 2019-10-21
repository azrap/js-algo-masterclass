console.log(countUniqueValues([1, 1, 1, 1, 1]));
console.log(countUniqueValues([]));

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  console.log(arr);
  let uniques = 0;

  // iterate over the entire array
  // check to see if arr[n]==arr[n+1], uniques stays the same, n+=1
  // else if arr[n]!=arr[n+1] uniques+=1 n
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      uniques++;
    }
  }
  return uniques;
}
