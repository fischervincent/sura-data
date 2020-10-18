import { normalizeBalance } from "../normalize-balance";

describe("normalize-balance", () => {
  it("returns a number from a text with decimals with a comma", () => {
    expect(normalizeBalance("1,01")).toEqual(1.01);
  });

  it("returns a number from a text with decimals with a point", () => {
    expect(normalizeBalance("1.01")).toEqual(1.01);
  });

  it("returns a number from a text with spaces", () => {
    expect(normalizeBalance("  10 000 000 000 ")).toEqual(10_000_000_000);
  });

  it("returns a number from a text with a euro sign and spaces at the end", () => {
    expect(normalizeBalance("1€  ")).toEqual(1);
  });
});
