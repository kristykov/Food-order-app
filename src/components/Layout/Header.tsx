import React, { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./Header.module.scss";
import CartCounter from "./CartCounter";
import Logo from "../../assets/logo3.svg";

interface IProps {
  onShowCart: () => void;
  onQuery: (str: string) => void;
}

const Header = ({ onShowCart, onQuery }: IProps) => {
  const userName = localStorage.getItem("username");
  const [q, setQ] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = (e.currentTarget as HTMLInputElement).value;
    setQ(input);
  };
  useEffect(() => {
    onQuery(q);
  }, [onQuery, q]);

  return (
    <header className={classes.header}>
      <a href="/">
        <Logo className={classes["header-logo-img"]} />
      </a>
      <div className={classes["header-container"]}>
        <div className={classes["header-content"]}>
          <h3>Welcome, {userName}!</h3>
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
          className={`${classes["header-button"]} general-btn`}
        >
          <IonIcon className={classes["header-cart-btn"]} name="bag-handle" />
          <CartCounter />
        </button>
      </div>
    </header>
  );
};

export default Header;
