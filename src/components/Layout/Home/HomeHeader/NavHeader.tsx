import React from "react";
import classes from "./NavHeader.module.scss";

interface IProps {
  isBurgerOpen: boolean;
}

const NavHeader = ({ isBurgerOpen }: IProps) => {
  return (
    <div
      className={`${classes["nav-menu"]} ${
        isBurgerOpen ? classes["nav-show-burger"] : ""
      }`}
    >
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-item"]}>
          <a
            href="#home"
            className={`${classes["nav-link"]} ${classes["active-link"]}`}
          >
            Home
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="#about" className={classes["nav-link"]}>
            About
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="#services" className={classes["nav-link"]}>
            Services
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="/menu" className={classes["nav-link"]}>
            Menu
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a href="#contact" className={classes["nav-link"]}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavHeader;
