import { render, screen } from "@testing-library/react";
import { Toaster } from "..";
import { Bread } from "../../../hooks";

describe("Toaster", () => {
  it("Display Toast component", () => {
    const breads: Bread[] = [
      {
        key: "key1",
        type: "ok",
        value: "Hello!",
      },
    ];
    render(<Toaster breads={breads} eat={() => {}} />);
    const hello = screen.getByText(/Hello!/);
    expect(hello).toBeInTheDocument();
  });
});
