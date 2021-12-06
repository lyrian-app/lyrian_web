import { render } from "@testing-library/react";
import { Transition } from ".";

describe("Transition", () => {
  it("Screen is visible", () => {
    const { container } = render(<Transition status="mounted" />);
    expect(container.getElementsByClassName("mounted").length).toBe(1);
  });

  it("Component will mount", () => {
    const { container } = render(<Transition status="willMount" />);
    expect(container.getElementsByClassName("willMount").length).toBe(1);
  });

  it("Component will unmount", () => {
    const { container } = render(<Transition status="willUnmount" />);
    expect(container.getElementsByClassName("willUnmount").length).toBe(1);
  });
});
