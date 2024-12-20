const reverseString = (text) => {
  let reverse = "";
  for (let index = text.length - 1; index >= 0; index--) {
    reverse += text[index];
  }
  return reverse;
};
export default reverseString;
