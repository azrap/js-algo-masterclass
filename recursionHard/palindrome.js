function isPalindrome(str) {
  var revStr = "";

  const reverse = helperStr => {
    if (helperStr.length === 0) return "";

    revStr += helperStr.slice(-1);
    reverse(helperStr.slice(0, helperStr.length - 1));
    return revStr;
  };

  if (str === reverse(str)) return true;

  return false;
}
