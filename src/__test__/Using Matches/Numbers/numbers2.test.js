// For floating point equality, use toBeCloseTo instead of
// toEqual, because you don't want a test to depend on a tiny rounding error.

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// npm test numbers2.test.js
