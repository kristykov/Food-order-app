import React, { useContext } from "react";
import classes from "./CartCounter.module.scss";
import CartContext from "../../store/cart-context";

const CartCounter = () => {
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return <span className={classes.counter}>{numberOfCartItems}</span>;
};

export default CartCounter;
