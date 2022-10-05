import React from "react";
import classes from "./HomeApp.module.scss";
import phone from "../../../assets/mobile1.png";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.jpg";
import user4 from "../../../assets/user4.jpg";
import arrow from "../../../assets/arrow.png";
import app1 from "../../../assets/app1.png";
import app2 from "../../../assets/app2.png";

const HomeApp = () => {
  return (
    <section className={`${classes.app} section`}>
      <div className={classes["app-block"]}>
        <div className={classes["app-description"]}>
          <h3 className={`${classes["app-title"]} section-title`}>
            Download Our Mobile App
          </h3>
          <div className={classes["app-users"]}>
            <img className={classes["app-users-img"]} src={user1} alt="" />
            <img className={classes["app-users-img"]} src={user3} alt="" />
            <img className={classes["app-users-img"]} src={user2} alt="" />
            <img className={classes["app-users-img"]} src={user4} alt="" />
            <img src={arrow} alt="link" />
          </div>
          <div className={classes["app-links"]}>
            <img src={app1} alt="" />
            <img src={app2} alt="" />
          </div>
        </div>
        <img className={classes["app-phone"]} src={phone} alt="" />
      </div>
    </section>
  );
};
export default HomeApp;
