import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.scss";
import { ChildrenType } from "../../interfaces";

interface ICartClose {
  onClose: () => void;
}

const Backdrop = ({ onClose }: ICartClose) => {
  return (
    <div onClick={onClose} className={classes.backdrop} aria-hidden="true" />
  );
};
const ModalOverlay: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ChildrenType> = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
