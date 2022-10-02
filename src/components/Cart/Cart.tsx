import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { IRootState } from "../../store/rootReducer";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
// import CartContext from "../../store/cart-context";

interface ICartClose {
  onClose: () => void;
}

interface IAddedItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const Cart = ({ onClose }: ICartClose) => {
  const dispatch = useDispatch();

  const items = useSelector((state: IRootState) => {
    return state.cart.items;
  });

  const totalAmount = useSelector((state: IRootState) => {
    // number
    return state.cart.totalSum;
  });

  // const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const totalCartAmount = Math.abs(totalAmount);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id));
    // removeItem(id);
  };

  const cartItemAddHandler = (item: IAddedItem) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      }),
    );
    // addItem({
    //   id: item.id,
    //   name: item.name,
    //   amount: 1,
    //   price: item.price,
    //   image: item.image,
    // });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return (
          <li key={item.id} className={classes["cart-item"]}>
            <div className={classes["cart-item-img"]}>
              <img src={require(`../../assets/${item.image}`).default} alt="" />
            </div>
            <div className={classes["cart-item-context"]}>
              <h3>{item.name}</h3>
              <div className={classes["cart-item-info"]}>
                <p>
                  $<span>{item.price.toFixed(2)}</span>
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
                    readOnly
                    // defaultValue="1"
                    value={item.quantity}
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
        <span>${totalCartAmount.toFixed(2)}</span>
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

export default Cart;
