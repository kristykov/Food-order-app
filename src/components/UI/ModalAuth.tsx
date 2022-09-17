import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import classes from "./ModalAuth.module.scss";

const ModalAuth = () => {
  const history = useHistory();
  const onClose = () => {
    history.push("/");
  };
  return (
    <Modal onClose={onClose}>
      <p className={classes.text}>Please, login to see our menu </p>
    </Modal>
  );
};

export default ModalAuth;
