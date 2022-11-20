/*
toBe uses Object.is to test exact equality. 
If you want to check the value of an object, 
use toEqual or toStrictEqual instead:
*/

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// toEqual recursively checks every field of an object or array.

/*
Using toStrictEqual is preferred over using toEqual. 
toEqual simply ignores undefined values, whereas 
toStrictEqual takes them into account.
*/

// npm test exact-equality2.test.js
