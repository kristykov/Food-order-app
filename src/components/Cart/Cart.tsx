import React from "react";
// import PropTypes from "prop-types";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";

interface ICartClose {
  onClose: () => void;
}

const Cart = ({ onClose }: ICartClose) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Bun Vit Gion",
          image: "Bun-vit-gion.png",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => {
        return (
          <li className={classes["cart-item"]}>
            <div className={classes["cart-item-img"]}>
              <img src={require(`../../images/${item.image}`).default} alt="" />
            </div>
            <div className={classes["cart-item-context"]}>
              <h3>{item.name}</h3>
              <p>
                $<span>{item.price}</span>
              </p>
              <div className={classes["card-input-field"]}>
                <button
                  type="button"
                  // onClick={() => {
                  //   return cartAmountHandler("minus");
                  // }}
                >
                  -
                </button>

                <input
                  // key={cardAmount}
                  defaultValue="1"
                  // value={cardAmount}
                  type="number"
                  name="amount"
                  min="1"
                  max="6"
                />

                <button
                  type="button"
                  // onClick={() => {
                  //   return cartAmountHandler("plus");
                  // }}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes["cart-total"]}>
        <span>Total Amount</span>
        <span>29</span>
      </div>
      <div className={classes["cart-controls"]}>
        <button
          onClick={onClose}
          className={`${classes["cart-controls-btn"]} ${classes["close-btn"]}`}
          type="button"
        >
          Close
        </button>
        <button
          className={`${classes["cart-controls-btn"]} ${classes["order-btn"]}`}
          type="button"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

// Cart.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

export default Cart;
