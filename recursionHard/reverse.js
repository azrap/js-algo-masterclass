function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";
  let last_char = str.charAt(str.length - 1);
  console.log(last_char);
  str = str.substring(0, str.length - 1);
  return last_char + reverse(str);
}

reverse("awesome");
reverse("rithmschool");
