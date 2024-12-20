import findAndCountDuplicates from "./findAndCountDuplicates";

describe("findAndCountDuplicates testing", () => {
  test("test 1 => No duplicates", () => {
    expect(findAndCountDuplicates([1, 2, 3, 4, 5])).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    });
  });

  test("test 2 => All duplicates of the same element", () => {
    expect(findAndCountDuplicates([2, 2, 2, 2, 2])).toEqual({ 2: 5 });
  });

  test("test 3 => Some duplicates", () => {
    expect(findAndCountDuplicates([1, 2, 2, 3, 4, 5, 1])).toEqual({
      1: 2,
      2: 2,
      3: 1,
      4: 1,
      5: 1,
    });
  });

  test("test 4 => Non-integer values with duplicates", () => {
    expect(
      findAndCountDuplicates(["apple", "banana", "apple", "cherry", "banana"])
    ).toEqual({
      apple: 2,
      banana: 2,
      cherry: 1,
    });
  });

  test("test 5 => Mixed types with some duplicates", () => {
    expect(
      findAndCountDuplicates([1, "apple", 1, "banana", "apple", 3])
    ).toEqual({
      1: 2,
      apple: 2,
      banana: 1,
      3: 1,
    });
  });
  test("test 6 => with undefined input", () => {
    expect(findAndCountDuplicates(undefined)).toEqual({});
  });
});
