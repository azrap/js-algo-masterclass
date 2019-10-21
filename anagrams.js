console.log(validAnagram("", ""));
console.log("aaz", validAnagram("aaz", "zza"));
console.log("anagram", validAnagram("anagram", "nagaram"));
console.log("rat", validAnagram("rat", "car"));
console.log("awesome", validAnagram("awesome", "awesom"));
console.log(
  "panama",
  validAnagram("amanaplanacanalpanama", "acanalmanplanpanama")
);
console.log("qwerty", validAnagram("qwerty", "qeywrt"));
console.log("textwist", validAnagram("texttwisttime", "timetwisttext"));

function validAnagram(str1, str2) {
  // check if the two words are the same length first
  if (str1.length !== str2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let i in str1) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
  }

  for (let i in str2) {
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}
// check to see if each letter in str1 is also in str2 and if the frequency is also the same
//t

// add whatever parameters you deem necessary - good luck!
