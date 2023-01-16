/* globals describe it expect */
const { default: expect } = require("expect");
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a Port to start from", () => {
    
    const port = new Port("Dover");
    const ship = new Ship(port);

    expect(ship.startingPort).toBe(port);
  });
  it("can set sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setsail();
    expect(ship.startingPort).toBeFalsy();
  });
});
