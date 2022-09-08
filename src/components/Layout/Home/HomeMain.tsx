import React from "react";
import classes from "./HomeMain.module.scss";

const HomeMain = () => {
  return (
    <main className={classes.main}>
      <section className={classes.home}>
        <div className={`${classes["home-container"]} container`}>
          <div className={classes["home-data"]}>
            <h1 className={classes["home-title"]}>Tasty food</h1>
            <h2 className={classes["home-subtitle"]}>
              Try the best food of the week
            </h2>
            <a href="/home" className={classes["home-btn"]}>
              View Menu
            </a>
          </div>
          <img
            className={classes["home-img"]}
            src={require("../../../assets/mainpic.png").default}
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
