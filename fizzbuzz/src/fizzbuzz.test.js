import { fizzbuzz } from "./fizzbuzz";

test("test value number", () => {
  expect(fizzbuzz()[0]).toEqual(1);
});

test("test Fizz", () => {
  expect(fizzbuzz()[2]).toEqual("Fizz");
});

test("test Buzz", () => {
  expect(fizzbuzz()[4]).toEqual("Buzz");
});

test("test FizzBuzz", () => {
  expect(fizzbuzz()[14]).toEqual("FizzBuzz");
});

test("test Fizz with number contain", () => {
  expect(fizzbuzz()[52]).toEqual("Fizz");
});

test("test Buzz with number contain", () => {
  expect(fizzbuzz()[54]).toEqual("Buzz");
});
