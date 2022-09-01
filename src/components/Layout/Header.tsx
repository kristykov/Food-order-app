import React from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./Header.module.scss";
import CartCounter from "./CartCounter";

interface ICartShow {
  onShowCart: () => void;
}

const Header = ({ onShowCart }: ICartShow) => {
  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <h1>Welcome, userName!</h1>
        <p>Don't forget to eat healthy food today</p>
      </div>
      <form action="" className={classes["header-form-controls"]}>
        <label htmlFor="input">
          <input placeholder="Search your food..." type="text" />
        </label>
        <button type="submit">
          <IonIcon
            className={classes["header-search-icon"]}
            name="search-outline"
          />
        </button>
      </form>
      <button
        onClick={onShowCart}
        type="button"
        className={classes["header-button"]}
      >
        <IonIcon className={classes["header-cart-btn"]} name="bag-handle" />
        <span>Add to cart</span>
      </button>
      <CartCounter />
    </header>
  );
};

export default Header;
