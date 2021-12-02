import { passwordCheck } from "./passwordValidator";

test("valid password", () => {
  expect(passwordCheck("123456Pe_")).toEqual(true);
});

test("password length valid", () => {
  expect(passwordCheck("12345Pe_")).toEqual(false);
});

test("password contains underscore", () => {
  expect(passwordCheck("1234567Pe")).toEqual(false);
});

test("password contains capital letter", () => {
  expect(passwordCheck("123456pe_")).toEqual(false);
});

test("password contains lowercase", () => {
  expect(passwordCheck("123456PE_")).toEqual(false);
});

test("password contains at least one number", () => {
  expect(passwordCheck("Pepinillo_")).toEqual(false);
});
