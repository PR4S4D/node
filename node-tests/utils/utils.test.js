const utils = require("./utils");
const assert = require("assert");
const expect = require("expect");

it("should add two numbers", () => {
  let res = utils.add(3, 50);
  expect(res).toBe(53);
});

it("it should square", () => {
  let res = utils.square(5);

  expect(res)
    .toBe(25)
    .toBeA("number");
});
