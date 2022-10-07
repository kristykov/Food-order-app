import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartCounter.module.scss";
import { IRootState } from "../../store/rootReducer";

const CartCounter = () => {
  const numberOfCartItems = useSelector((state: IRootState) => {
    return state.cart.totalQuantity;
  });
  return <span className={classes.counter}>{numberOfCartItems}</span>;
};

export default CartCounter;
