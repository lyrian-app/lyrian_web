import { RenderResult, renderHook, act } from "@testing-library/react-hooks";
import { useBoolState, useToast, Bread } from "..";

describe("useBoolState", () => {
  let result: RenderResult<[boolean, () => void]>;

  beforeEach(() => {
    result = renderHook(() => useBoolState(false)).result;
  });

  it("Initial state is false", () => {
    expect(result.current[0]).toBe(false);
  });

  it("Toggled state is true", () => {
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
});

describe("useToast", () => {
  let result: RenderResult<{
    breads: Bread[];
    bake: (bread: Bread) => void;
    eat: (toastKey: string) => void;
  }>;

  beforeEach(() => {
    result = renderHook(() => useToast()).result;
  });

  it("Initial state is empty", () => {
    expect(result.current.breads.length).toBe(0);
  });

  it("Bake bread", () => {
    const bread: Bread = {
      type: "ok",
      value: "Hello!",
    };
    act(() => result.current.bake(bread));
    expect(result.current.breads[0]).toStrictEqual({
      ...bread,
      key: "something",
    });
  });

  it("Eat toast", () => {
    act(() =>
      result.current.bake({
        type: "ok",
        value: "Hello!",
      })
    );
    act(() => result.current.eat(result.current.breads[0].key!));
    expect(result.current.breads.length).toBe(0);
  });
});
