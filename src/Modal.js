import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRelf = useRef(null); //useRef gives container which contains and ensures we reference exact same thing in every render
  if (!elRelf.current) {
    elRelf.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRelf.current);

    return () => modalRoot.removeChild(elRelf.current); //cleanup function
  }, []);

  return createPortal(<div>{children}</div>, elRelf.current);
};

export default Modal;
