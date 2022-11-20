const sumTwoNumbers = require("./exact-equality");

test("two plus two is four", () => {
  expect(sumTwoNumbers(2, 2)).toBe(4);
});

// without a function like Object.is
/*
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
*/

// npm test exact-equality.test.js
