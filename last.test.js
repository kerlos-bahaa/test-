const capitalizeFirstLetter = require("./last");
describe("add", () => {
  test("add", () => {
    expect(capitalizeFirstLetter("ahmed")).toBe("A");
  });
});
