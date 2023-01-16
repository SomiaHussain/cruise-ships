/* globals describe it expect */
const { default: expect } = require("expect");
const Ship = require("../src/Ship.js");
describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a Port to start from", () => {
    const ship = new Ship("Dover");
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail", () => {
    const ship = new Ship("Dover");
    ship.setsail();
    expect(ship.startingPort).toBeFalsy();
  })
});
