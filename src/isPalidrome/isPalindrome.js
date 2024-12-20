import reverseString from "../reverse_string/reverseString";
const isPalindrome = (x) => {
  if (!x || (typeof x !== "string" && typeof x !== "number")) {
    return false;
  }
  const string = x?.toString();
  return reverseString(string) === string;
};

export default isPalindrome;
