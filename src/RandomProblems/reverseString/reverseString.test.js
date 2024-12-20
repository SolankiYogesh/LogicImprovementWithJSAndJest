import reverseString from "./reverseString";

describe("Reverse String testing", () => {
  test("Empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("Single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("Palindrome string", () => {
    expect(reverseString("madam")).toBe("madam");
  });

  test("String with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("String with special characters", () => {
    expect(reverseString("abc@123")).toBe("321@cba");
  });

  test("String with numbers", () => {
    expect(reverseString("123456")).toBe("654321");
  });

  test("Multiline string", () => {
    expect(reverseString("Hello\nWorld")).toBe("dlroW\nolleH");
  });
});
