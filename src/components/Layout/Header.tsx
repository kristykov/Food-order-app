import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./Header.module.scss";
import CartCounter from "./CartCounter";

interface IProps {
  onShowCart: () => void;
  onQuery: (str: string) => void;
}

const Header = ({ onShowCart, onQuery }: IProps) => {
  const [q, setQ] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = (e.currentTarget as HTMLInputElement).value;
    setQ(input);
  };
  onQuery(q);

  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <h1>Welcome, userName!</h1>
        <p>Don't forget to eat healthy food today</p>
      </div>
      <form action="" className={classes["header-form-controls"]}>
        <label htmlFor="input">
          <input
            placeholder="Search your food..."
            type="text"
            onChange={inputHandler}
            value={q}
          />
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
