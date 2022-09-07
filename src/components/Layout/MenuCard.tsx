import React, { useContext } from "react";
import { IDish } from "../../interfaces";
import CartContext from "../../store/cart-context";
import classes from "./MenuCard.module.scss";

const MenuCard = ({ id, name, image, price }: IDish) => {
  const { addItem } = useContext(CartContext);

  const onOrderHandler = () => {
    addItem({
      id,
      name,
      amount: 1,
      price,
      image,
    });
  };
  return (
    <div className={classes.card} key={id}>
      <img
        className={classes["card-img"]}
        src={require(`../../assets/${image}`).default}
        alt="Dish"
      />
      <div className={classes["card-data"]}>
        <h3>{name}</h3>
      </div>
      <div className={classes["card-context"]}>
        <div>
          <p>$</p>
          <span>{price}</span>
        </div>
        <button onClick={onOrderHandler} type="button">
          Order
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
