import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

import Button from "../Button/Button";

const Modal =  forwardRef(
  function Modal({children, buttonText}, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        }
      };
    });

    return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button label={buttonText}></Button>
        </form>
      </dialog>
    , document.getElementById('modal-root'));
  }
);

export default Modal;