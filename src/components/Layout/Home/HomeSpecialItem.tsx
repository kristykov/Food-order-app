import React from "react";
import classes from "./HomeSpecialItem.module.scss";

interface ISpecialItem {
  id: string;
  name: string;
  detail: string;
  price: number;
  img: string;
}

const HomeSpecialItem = ({ id, name, detail, price, img }: ISpecialItem) => {
  return (
    <div className={classes["menu-content"]} key={id}>
      <img
        src={require(`../../../assets/${img}.png`).default}
        className={classes["menu-img"]}
        alt=""
      />
      <div className={classes["menu-card"]}>
        <h3>{name}</h3>
        <span className={classes["menu-detail"]}>{detail}</span>
        <span className={classes["menu-price"]}>{`$${price.toFixed(2)}`}</span>
        <a className={classes["menu-btn"]} href="/pic">
          Find out more
        </a>
      </div>
    </div>
  );
};

export default HomeSpecialItem;
