const lib = require("../exercise1");

describe("fizzBuzz", () => {
  it("should throw an exception if input is not a number", () => {
    const args = [{}, null, "", false, undefined];
    args.forEach(a => {
      expect(() => {
        lib.fizzBuzz(a);
      }).toThrow();
    });
  });

  it("should return FizzBuzz if number divisible by 3 and 5", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should return Fizz if number only divisible by 3", () => {
    const result = lib.fizzBuzz(12);
    expect(result).toBe("Fizz");
  });
  it("should return Buzz if number only divisible by 5", () => {
    const result = lib.fizzBuzz(25);
    expect(result).toBe("Buzz");
  });
});
