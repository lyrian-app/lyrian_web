import { cloneObj } from "../clone";

describe("cloneObj", () => {
  it("Two objects have same value, but do not share same reference", () => {
    const obj = { value: "something" };
    const cloned = cloneObj(obj);
    expect(obj === cloned).toBe(false);
  });
});
