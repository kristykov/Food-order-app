import React from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./CustomArrow.module.scss";

interface IProps {
  onClick: () => void;
}

const CustomRightArrow = ({ onClick }: IProps) => {
  return (
    <button
      className={`${classes["arrow-btn"]} ${classes.right}`}
      aria-label="Go to the next item"
      type="button"
      onClick={() => {
        return onClick();
      }}
    >
      <IonIcon
        className={`${classes["arrow-icon"]} ${classes["arrow-icon-right"]}`}
        name="chevron-forward-outline"
      />
    </button>
  );
};

export default CustomRightArrow;

export const CustomLeftArrow = ({ onClick }: IProps) => {
  return (
    <button
      className={`${classes["arrow-btn"]} ${classes.left}`}
      aria-label="Go to the next item"
      type="button"
      onClick={() => {
        return onClick();
      }}
    >
      <IonIcon
        className={`${classes["arrow-icon"]} ${classes["arrow-icon-left"]}`}
        name="chevron-back-outline"
      />
    </button>
  );
};
