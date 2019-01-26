const utils = require("./utils");
const assert = require("assert");

it("should add two numbers", () => {
  let res = utils.add(3, 50);

  if (res != 53) {
    throw new Error(`Value not correct : ${res}`);
  }
});

it("it should square", () => {
  let res = utils.square(5);
  if (res != 25) {
    throw new Error(`Value not correct : ${res}`);
  }
});
