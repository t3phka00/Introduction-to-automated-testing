import { divide } from "../src/calculator.js";

test("divides two valid numbers correctly", () => {
  expect(divide(6, 2)).toBe(3);
});

test("throws error if arguments are not numbers", () => {
  expect(() => divide("6", 2)).toThrow(TypeError);
});

test("throws error if first argument is NaN", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("throws error if second argument is NaN", () => {
  expect(() => divide(2, NaN)).toThrow(TypeError);
});

test("throws error when dividing by zero", () => {
  expect(() => divide(2, 0)).toThrow(RangeError);
});
