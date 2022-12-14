// You can check if an array or iterable contains a particular item using toContain:

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set

// npm test arrays.test.js
