import React, { useContext } from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./HomeHeader.module.scss";
import AuthContext from "../../../store/auth-context";

const HomeHeader = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;

  const logoutHandler = () => {
    logout();
    localStorage.removeItem("username");
  };
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
        <div className={classes["nav-auth"]}>
          {!isLoggedIn && (
            <a className={`general-btn ${classes["auth-login"]}`} href="/login">
              <IonIcon className={classes["auth-icon"]} name="log-in-outline" />
              Log In
            </a>
          )}
          {!isLoggedIn && (
            <a
              className={` general-btn ${classes["auth-signup"]}`}
              href="/registration"
            >
              <IonIcon
                className={classes["auth-icon"]}
                name="people-circle-outline"
              />
              Sign Up
            </a>
          )}
          {isLoggedIn && (
            <button
              onClick={logoutHandler}
              type="button"
              className={`${classes["logout-btn"]} general-btn `}
            >
              <IonIcon
                id={classes.logoutIcon}
                className={`${classes["auth-icon"]}`}
                name="log-out-outline"
              />
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default HomeHeader;
