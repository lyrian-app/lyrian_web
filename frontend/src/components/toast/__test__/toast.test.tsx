import { render, screen } from "@testing-library/react";
import { RenderResult, renderHook, act } from "@testing-library/react-hooks";
import { Toaster } from "..";
import { Bread, useToast } from "../../../hooks";

describe("Toaster", () => {
  let hook: RenderResult<{
    breads: Bread[];
    bake: (bread: Bread) => void;
    eat: (toastKey: string) => void;
  }>;

  beforeEach(() => {
    hook = renderHook(() => useToast()).result;
  });

  it("Display Toast component", () => {
    act(() =>
      hook.current.bake({
        key: "key1",
        type: "ok",
        value: "Hello!",
      })
    );

    render(<Toaster breads={hook.current.breads} eat={hook.current.eat} />);
    const hello = screen.getByText(/Hello!/);
    expect(hello).toBeInTheDocument();
  });

  it("Click Toast component", () => {
    act(() =>
      hook.current.bake({
        key: "key1",
        type: "ok",
        value: "Hello!",
      })
    );

    const { container } = render(
      <Toaster breads={hook.current.breads} eat={hook.current.eat} />
    );
    const toast = container.querySelector('[class="toast ok"]');

    act(() => {
      toast?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(hook.current.breads.length).toBe(0);
  });
});
