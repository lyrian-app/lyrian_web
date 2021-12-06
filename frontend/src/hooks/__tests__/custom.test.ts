import {
  RenderResult,
  renderHook,
  act,
  Renderer,
} from "@testing-library/react-hooks";
import { useBoolState, useToast } from "..";

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
