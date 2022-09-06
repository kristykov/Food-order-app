import React, { useContext } from "react";
// import PropTypes from "prop-types";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartContext from "../../store/cart-context";

interface ICartClose {
  onClose: () => void;
}

interface IAddedItem {
  id: string;
  name: string;
  amount: number;
  price: string;
  image: string;
}

const Cart = ({ onClose }: ICartClose) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const totalCartAmount = `${totalAmount.toFixed(2)}`;

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item: IAddedItem) => {
    addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
      image: item.image,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return (
          <li className={classes["cart-item"]}>
            <div className={classes["cart-item-img"]}>
              <img
                src={require(`../../../assets/${item.image}`).default}
                alt=""
              />
            </div>
            <div className={classes["cart-item-context"]}>
              <h3>{item.name}</h3>
              <div className={classes["cart-item-info"]}>
                <p>
                  $<span>{item.price}</span>
                </p>
                <div className={classes["card-input-field"]}>
                  <button
                    type="button"
                    onClick={() => {
                      return cartItemRemoveHandler(item.id);
                    }}
                  >
                    -
                  </button>

                  <input
                    // key={cardAmount}
                    defaultValue="1"
                    value={item.amount}
                    type="number"
                    name="amount"
                    min="1"
                    max="6"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      return cartItemAddHandler(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes["cart-total"]}>
        <span>Total Amount</span>
        <span>${totalCartAmount}</span>
      </div>
      <div className={classes["cart-controls"]}>
        <button
          onClick={onClose}
          className={`${classes["cart-controls-btn"]} ${classes["close-btn"]}`}
          type="button"
        >
          Close
        </button>
        {hasItems && (
          <button
            className={`${classes["cart-controls-btn"]} ${classes["order-btn"]}`}
            type="button"
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

// Cart.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

export default Cart;
