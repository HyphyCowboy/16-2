const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it('should return "wklqnixo"', () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it('should return "qefkhcri"', () => {
    const actual = caesar("thinkful", -3);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });
  it('Should return "thinkful"', () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it('Should return "bpqa qa i amkzmb umaaiom!"', () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it('Should return "this is a secret message!"', () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it('Should return "false"', () => {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it('Should return "false"', () => {
    const actual = caesar("thinkful", 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it('Should return "false"', () => {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
