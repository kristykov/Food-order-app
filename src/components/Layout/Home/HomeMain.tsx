import React from "react";
import classes from "./HomeMain.module.scss";
import frontPage from "../../../assets/frontpage.png";

const HomeMain = () => {
  return (
    // <main className={classes.main}>
    <section className={`${classes.home} section`}>
      <div className={`${classes["home-container"]} container`}>
        <img className={classes["home-img"]} src={frontPage} alt="" />

        {/* <FrontPage className={classes["home-img"]} /> */}
        <div className={classes["home-data"]}>
          <h1 className={classes["home-title"]}>Tasty food</h1>
          <h2 className={classes["home-subtitle"]}>
            Try the best food of the week
          </h2>
          <a href="/" className={`general-btn ${classes["home-btn"]}`}>
            View Menu
          </a>
        </div>
        {/* <img
          className={classes["home-img"]}
          src={require("../../../assets/mainpic.png").default}
          alt=""
        /> */}
      </div>
    </section>
    // </main>
  );
};

export default HomeMain;
