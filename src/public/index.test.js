const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("Visual Basic Structure", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("Button Exists", function () {
    expect(document.getElementById("button")).toBeTruthy();
  });

  it("Total pokemons paragraph exists", function () {
    expect(document.getElementById("ashPokemons")).toBeTruthy();
  });
  it("Input Exists", function () {
    expect(document.getElementById("input")).toBeTruthy();
  });
  it("List Exists", function () {
    expect(document.getElementById("list")).toBeTruthy();
  });
});
