import React from "react";
import { IDish } from "../../interfaces";
import classes from "./MenuCard.module.scss";

const MenuCard = ({ id, name, image, price }: IDish) => {
  const onOrderHandler = () => {};
  // const [cardAmount, setCardAmount] = useState("1");

  // const cartAmountHandler = (sign: string) => {
  //   let newValue = 1;
  //   if (sign === "minus" && +cardAmount > 1) {
  //     newValue = +cardAmount - 1;
  //   } else if ((sign === "plus" && +cardAmount === 0) || +cardAmount > 5) {
  //     return;
  //   } else if (sign === "plus" && +cardAmount > 0) {
  //     newValue = +cardAmount + 1;
  //   }
  //   setCardAmount(newValue.toString());
  // };
  return (
    <div className={classes.card} key={id}>
      <img
        className={classes.img}
        src={require(`../../images/${image}`).default}
        alt="Dish"
      />
      <div className={classes["card-data"]}>
        <h3>{name}</h3>
        {/* <div className={classes["card-input-field"]}>
          <button
            type="button"
            onClick={() => {
              return cartAmountHandler("minus");
            }}
          >
            -
          </button>

          <input
            // key={cardAmount}
            // defaultValue="1"
            value={cardAmount}
            type="number"
            name="amount"
            min="1"
            max="6"
          />

          <button
            type="button"
            onClick={() => {
              return cartAmountHandler("plus");
            }}
          >
            +
          </button>
        </div> */}
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
