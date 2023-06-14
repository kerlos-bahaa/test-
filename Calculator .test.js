const Calculator = require("./Calculator ");
describe("add", () => {
  test("add", () => {
    expect(Calculator.add(1, 2)).toBe(3 == "LOWER THAN 10");
  });
  test("add", () => {
    expect(Calculator.add(10, 2)).toBe(12 == "HIGER THAN 10");
  });
  test("add", () => {
    expect(Calculator.add(8, 2)).toBe(10);
  });
});
describe("subtract", () => {
    test("subtract", () => {
      expect(Calculator.subtract(3, 2)).toBe(1);
    });
  });
  describe("divide", () => {
    test("divide", () => {
      expect(Calculator.divide(4, 2)).toBe(2);
    });
  });
  
  describe("multiply", () => {
    test("multiply", () => {
      expect(Calculator.multiply(4, 2)).toBe(8);
    });
  });