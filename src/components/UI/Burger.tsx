import React from "react";
import classes from "./Burger.module.scss";

interface IProps {
  onBurgerHandler: () => void;
  isBurgerOpen: boolean;
}

const Burger = ({ onBurgerHandler, isBurgerOpen }: IProps) => {
  return (
    <div
      aria-hidden="true"
      className={classes.burger}
      onClick={onBurgerHandler}
    >
      <div
        className={`${classes["burger-line"]} ${
          isBurgerOpen ? classes["burger-line-first"] : ""
        }`}
      />
      <div
        className={`${classes["burger-line"]} ${
          isBurgerOpen ? classes["burger-line-second"] : ""
        }`}
      />
      <div
        className={`${classes["burger-line"]} ${
          isBurgerOpen ? classes["burger-line-third"] : ""
        }`}
      />
    </div>
  );
};
export default Burger;
