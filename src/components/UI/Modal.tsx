import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.scss";
import { ChildrenType } from "../../interfaces";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ChildrenType> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
