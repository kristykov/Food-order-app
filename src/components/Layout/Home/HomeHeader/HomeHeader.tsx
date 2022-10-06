import React, { useContext, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./HomeHeader.module.scss";
import AuthContext from "../../../../store/auth-context";
import Burger from "../../../UI/Burger";
import NavHeader from "./NavHeader";

const HomeHeader = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;
  const [openBurger, setOpenBurger] = useState(false);

  const onBurgerHandler = () => {
    setOpenBurger(!openBurger);
  };

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
        <Burger onBurgerHandler={onBurgerHandler} isBurgerOpen={openBurger} />
        <NavHeader isBurgerOpen={openBurger} />
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
