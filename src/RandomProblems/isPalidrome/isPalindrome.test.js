import isPalindrome from "./isPalindrome";

describe("isPalindrome testing", () => {
  test("test 1 =>", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("test 2 =>", () => {
    expect(isPalindrome("45654")).toBe(true);
  });

  test("test 3 =>", () => {
    expect(isPalindrome("121")).toBe(true);
  });

  test("test 4 =>", () => {
    expect(isPalindrome("78987")).toBe(true);
  });

  test("test 5 =>", () => {
    expect(isPalindrome("99899")).toBe(true);
  });

  test("test 6 =>", () => {
    expect(isPalindrome("12345")).toBe(false);
  });

  test("test 7 =>", () => {
    expect(isPalindrome("1001")).toBe(true);
  });

  test("test 8 =>", () => {
    expect(isPalindrome("54345")).toBe(true);
  });

  test("test 9 =>", () => {
    expect(isPalindrome("9876789")).toBe(true);
  });

  test("test 10 =>", () => {
    expect(isPalindrome("10201")).toBe(true);
  });

  test("test 11 =>", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("test 12 =>", () => {
    expect(isPalindrome(undefined)).toBe(false);
  });

  test("test 13 =>", () => {
    expect(isPalindrome(null)).toBe(false);
  });

  test("test 14 =>", () => {
    expect(isPalindrome({})).toBe(false);
  });

  test("test 15 =>", () => {
    expect(isPalindrome()).toBe(false);
  });
});
