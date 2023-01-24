const Pokedex = require("./pokedex");

describe("pokedex", () => {
  let pokedex = new Pokedex();

  it("returns an empty pokedex as no pokemon added", () => {
    expect(pokedex.all()).toStrictEqual([]);
  });

  it("adds pikachu to the pokedex", () => {
    pokedex.catch("pikachu");
    expect(pokedex.all()).toEqual(["pikachu"]);
  });

  it("adds jigglypuff to the pokedex", () => {
    pokedex.catch("jigglypuff");
    expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"]);
  });
});
