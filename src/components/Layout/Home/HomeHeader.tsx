import React from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="#home" className={classes["nav-logo"]}>
          Food
        </a>
        <div className={classes["nav-menu"]}>
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
              <a href="#menu" className={classes["nav-link"]}>
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
        <div className={classes["nav-auth"]}>
          <a className={`general-btn ${classes["auth-login"]}`} href="/login">
            <IonIcon className={classes["auth-icon"]} name="log-in-outline" />
            Log In
          </a>
          <a
            className={` general-btn ${classes["auth-signup"]}`}
            href="/register"
          >
            <IonIcon
              className={classes["auth-icon"]}
              name="people-circle-outline"
            />
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};
export default HomeHeader;
