// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// const functions = require('./unit-test-me');

test("isPhoneNumber should return true for valid phone numbers", () => {
  expect(functions.isPhoneNumber("909-270-6525")).toBe(true);
  expect(functions.isPhoneNumber("(909) 270-6525")).toBe(true);
});

test("isPhoneNumber should return false for invalid phone numbers", () => {
  expect(functions.isPhoneNumber("1234567890")).toBe(false);
  expect(functions.isPhoneNumber("(123) 456 7890")).toBe(false);
});

test("isEmail should return true for valid emails", () => {
  expect(functions.isEmail("test@example.com")).toBe(true);
  expect(functions.isEmail("hello123@example.co")).toBe(true);
});

test("isEmail should return false for invalid emails", () => {
  expect(functions.isEmail("invalid.email")).toBe(false);
  expect(functions.isEmail("hello@123@example.com")).toBe(false);
});

test("isStrongPassword should return true for strong passwords", () => {
  expect(functions.isStrongPassword("Abc123")).toBe(true);
  expect(functions.isStrongPassword("pass_1234")).toBe(true);
});

test("isStrongPassword should return false for weak passwords", () => {
  expect(functions.isStrongPassword("pas")).toBe(false);
  expect(functions.isStrongPassword("abc")).toBe(false);
});

test("isDate should return true for valid dates", () => {
  expect(functions.isDate("05/27/2023")).toBe(true);
  expect(functions.isDate("12/31/2022")).toBe(true);
});

test("isDate should return false for invalid dates", () => {
  expect(functions.isDate("130/01/2023")).toBe(false);
  expect(functions.isDate("2022/12/31")).toBe(false);
});

test("isHexColor should return true for valid hex colors", () => {
  expect(functions.isHexColor("#abc123")).toBe(true);
  expect(functions.isHexColor("123abc")).toBe(true);
});

test("isHexColor should return false for invalid hex colors", () => {
  expect(functions.isHexColor("#GGGGGG")).toBe(false);
  expect(functions.isHexColor("#12345")).toBe(false);
});
