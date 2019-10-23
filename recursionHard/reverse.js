function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";
  console.log(str.charAt(str.length - 1));
  str = str.substring(0, str.length - 1);
  return str.charAt(str.length - 1) + reverse(str);
}

reverse("awesome");
reverse("rithmschool");
