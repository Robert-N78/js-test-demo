const { getMax, getSum } = require("../api/index");

// Unit testing
describe("getMax func testing", () => {
  test("Test with correct parameters", () => {
    const result = getMax([1, 2, 5]);
    expect(result).toBe(5);
  });

  test("Get one string parameter", () => {
    expect(getMax(["1", "2", "öt"])).toBe("Invalid input");
  });
});

describe("getSum func testing", () => {
  test("test get normal parameters", () => {
    const result = getSum(12, 32);
    expect(result).toBe(44);
  });

  test("test get invalid parameters", () => {
    expect(getSum("12", null)).toBe("Invalid input");
  });
});

// Integration testing

describe("getSum and getMax integration test", () => {
  test("test all parameters correct", () => {
    const result = calculate(10, [1, 2, 10]);
    expect(result).toBe(20);
  });
});
