import minAndMaxFromArray from "./minAndMaxFromArray";

describe("minAndMaxFromArray testing", () => {
  test("test 1 => No duplicates", () => {
    expect(minAndMaxFromArray([1, 3, 7, 0, -5])).toEqual({ min: -5, max: 7 });
  });

  test("test 2 => Standard input", () => {
    expect(minAndMaxFromArray([10, 20, 30, 5, 1, 9])).toEqual({
      min: 1,
      max: 30,
    });
  });

  test("test 3 => Mixed values", () => {
    expect(minAndMaxFromArray([100, 200, 50, 60, 150])).toEqual({
      min: 50,
      max: 200,
    });
  });

  test("test 4 => Descending order", () => {
    expect(minAndMaxFromArray([7, 5, 8, 6, 3, 2])).toEqual({ min: 2, max: 8 });
  });

  test("test 5 => Negative values", () => {
    expect(minAndMaxFromArray([-1, -3, -2, -8, -5])).toEqual({
      min: -8,
      max: -1,
    });
  });

  test("test 6 => Random order", () => {
    expect(minAndMaxFromArray([50, 10, 60, 90, 30, 20])).toEqual({
      min: 10,
      max: 90,
    });
  });

  test("test 7 => Undefined input", () => {
    expect(minAndMaxFromArray(undefined)).toEqual({
      min: undefined,
      max: undefined,
    });
  });
});
