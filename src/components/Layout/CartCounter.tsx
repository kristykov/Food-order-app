import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartCounter.module.scss";
import { IRootState } from "../../store/rootReducer";
// import CartContext from "../../store/cart-context";

const CartCounter = () => {
  const numberOfCartItems = useSelector((state: IRootState) => {
    return state.cart.totalQuantity;
  });
  // const { items } = useContext(CartContext);
  // const numberOfCartItems = items.reduce((currNum, item) => {
  //   return currNum + item.amount;
  // }, 0);

  return <span className={classes.counter}>{numberOfCartItems}</span>;
};

export default CartCounter;
