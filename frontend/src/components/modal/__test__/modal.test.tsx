import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { Modal, ModalContent, ModalOverlay } from "..";
import { useBoolState } from "../../../hooks";

describe("Modal", () => {
  it("Modal is open", () => {
    const { container } = render(<Modal isOpen={true} />);
    expect(container.getElementsByClassName("isOpen").length).toBe(1);
  });

  it("Modal is close", () => {
    const { container } = render(<Modal isOpen={false} />);
    expect(container.getElementsByClassName("isOpen").length).toBe(0);
  });

  it("Click ModalOverlay", () => {
    const hook = renderHook(() => useBoolState(true)).result;
    const { container } = render(
      <Modal isOpen={hook.current[0]}>
        <ModalOverlay onClick={hook.current[1]} />
        <ModalContent>
          <p>Hello!</p>
        </ModalContent>
      </Modal>
    );

    const overlay = container.querySelector('[class="modalOverlay"]');
    act(() => {
      overlay?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(hook.current[0]).toBe(false);
  });
});
