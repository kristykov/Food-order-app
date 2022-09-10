import React from "react";
import classes from "./HomeMenu.module.scss";
import plate1 from "../../../assets/plate1.png";
import plate2 from "../../../assets/plate2.png";
import plate3 from "../../../assets/plate3.png";
import plate4 from "../../../assets/plate4.png";

const HomeMenu = () => {
  return (
    <section className={`${classes.menu} section`}>
      <div className="container">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Our best menu</h2>
      </div>
      <div className={`${classes["menu-container"]} container`}>
        <div className={classes["menu-content"]}>
          <img src={plate1} className={classes["menu-img"]} alt="" />
          <div className={classes["menu-card"]}>
            <h3 className={classes["menu-name"]}>Barbecue salad</h3>
            <span className={classes["menu-detail"]}>Delicious dish</span>
            <span className={classes["menu-price"]}>$22.00</span>
            <a className={classes["menu-btn"]} href="/pic">
              Find out more
            </a>
          </div>
        </div>

        <div className={classes["menu-content"]}>
          <img src={plate2} className={classes["menu-img"]} alt="" />
          <div className={classes["menu-card"]}>
            <h3 className={classes["menu-name"]}>Pasta with seafood</h3>
            <span className={classes["menu-detail"]}>Delicious dish</span>
            <span className={classes["menu-price"]}>$22.00</span>
            <a className={classes["menu-btn"]} href="/pic">
              Find out more
            </a>
          </div>
        </div>

        <div className={classes["menu-content"]}>
          <img src={plate3} className={classes["menu-img"]} alt="" />
          <div className={classes["menu-card"]}>
            <h3 className={classes["menu-name"]}>Chicken salad</h3>
            <span className={classes["menu-detail"]}>Delicious dish</span>
            <span className={classes["menu-price"]}>$22.00</span>
            <a className={classes["menu-btn"]} href="/pic">
              Find out more
            </a>
          </div>
        </div>

        <div className={classes["menu-content"]}>
          <img src={plate4} className={classes["menu-img"]} alt="" />
          <div className={classes["menu-card"]}>
            <h3 className={classes["menu-name"]}>Spinach salad</h3>
            <span className={classes["menu-detail"]}>Delicious dish</span>
            <span className={classes["menu-price"]}>$22.00</span>
            <a className={classes["menu-btn"]} href="/pic">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeMenu;
