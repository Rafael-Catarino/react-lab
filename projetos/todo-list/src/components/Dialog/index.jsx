import { useEffect, useRef } from "react";
import { IconClose } from "../icons";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children }) {
  // O React não aceita busca no DOM desse jeito.
  // const dialog = document.querySelector("dialog");
  // const showButton = document.querySelector("dialog + button");
  // const closeButton = document.querySelector("dialog button");

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog className="dialog" ref={dialogRef}>
        <div className="btn-close-wrapper">
          <button className="btn-close" autoFocus onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
