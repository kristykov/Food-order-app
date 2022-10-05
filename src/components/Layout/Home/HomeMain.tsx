import React from "react";
import { Fade } from "react-awesome-reveal";
import classes from "./HomeMain.module.scss";
import frontPage from "../../../assets/frontpage.png";

const HomeMain = () => {
  return (
    <section className={`${classes.home} section`}>
      <div className={`${classes["home-container"]} container`}>
        <Fade direction="down" triggerOnce>
          {" "}
          <img className={classes["home-img"]} src={frontPage} alt="banner" />
        </Fade>

        <Fade direction="down" triggerOnce>
          <div className={classes["home-data"]}>
            <h1 className={classes["home-title"]}>Tasty food</h1>
            <h2 className={classes["home-subtitle"]}>
              Try the best food of the week
            </h2>
            <a href="/" className={`general-btn ${classes["home-btn"]}`}>
              View Menu
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HomeMain;
