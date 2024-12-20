import pairSumFromArray from "./pairSumFromArray";

describe("Find a pair with the given sum in an array", () => {
  test("test 1 =>", () => {
    expect(pairSumFromArray([8, 7, 2, 5, 3, 1], 10)).toEqual([8, 2]);
  });

  test("test 2 =>", () => {
    expect(pairSumFromArray([5, 2, 6, 8, 1, 9], 12)).toBe("Pair not found");
  });

  test("test 3 =>", () => {
    expect(pairSumFromArray([1, 4, 6, 8, 3, 7], 9)).toEqual([1, 8]);
  });

  test("test 4 =>", () => {
    expect(pairSumFromArray([10, 20, 30, 40, 50], 60)).toEqual([10, 50]);
  });

  test("test 5 =>", () => {
    expect(pairSumFromArray([2, 9, 5, 1, 4, 7], 10)).toEqual([9, 1]);
  });

  test("test 6 =>", () => {
    expect(pairSumFromArray([15, 25, 5, 35, 10], 40)).toEqual([15, 25]);
  });

  test("test 7 =>", () => {
    expect(pairSumFromArray([1, 3, 4, 6, 2], 8)).toEqual([6, 2]);
  });

  test("test 8 =>", () => {
    expect(pairSumFromArray([12, 7, 5, 3, 8], 10)).toEqual([7, 3]);
  });

  test("test 9 =>", () => {
    expect(pairSumFromArray([6, 3, 8, 4, 9, 5], 13)).toEqual([8, 5]);
  });

  test("test 10 =>", () => {
    expect(pairSumFromArray([1, 2, 3, 4, 5, 6], 7)).toEqual([1, 6]);
  });

  test("test 11 =>", () => {
    expect(pairSumFromArray([10, 15, 20, 25], 40)).toEqual([15, 25]);
  });

  test("test 12 =>", () => {
    expect(pairSumFromArray([2, 5, 8, 4, 6], 10)).toEqual([2, 8]);
  });

  test("test 13 =>", () => {
    expect(pairSumFromArray([2, 5, "8", "4", "6"], 10)).toEqual(
      "all array element should be number"
    );
  });
  test("test 14 =>", () => {
    expect(pairSumFromArray(undefined, 10)).toEqual("Pair not found");
  });
});
