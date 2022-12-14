import React from "react";
import { Fade } from "react-awesome-reveal";
import classes from "./HomeServices.module.scss";
import Logo1 from "../../../assets/excellent.svg";
import Logo2 from "../../../assets/fast-food.svg";
import Logo3 from "../../../assets/delivery.svg";

const HomeServices = () => {
  return (
    <section className={`${classes.services} section`}>
      <span className="section-subtitle">Offering</span>
      <Fade direction="down" triggerOnce>
        <h2 className="section-title">Our amazing services</h2>
      </Fade>
      <div className={`${classes["services-container"]} container`}>
        <Fade direction="down" triggerOnce>
          <div className={classes["services-content"]}>
            <Logo1 className={classes["services-img"]} />
            <h3 className={classes["services-title"]}>Excellent food</h3>
            <p className={classes["services-description"]}>
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
        </Fade>
        <Fade direction="down" triggerOnce>
          <div className={classes["services-content"]}>
            <Logo2 className={classes["services-img"]} />
            <h3 className={classes["services-title"]}>Fast food</h3>
            <p className={classes["services-description"]}>
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
        </Fade>
        <Fade direction="down" triggerOnce>
          <div className={classes["services-content"]}>
            <Logo3 className={classes["services-img"]} />
            <h3 className={classes["services-title"]}>Delivery</h3>
            <p className={classes["services-description"]}>
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default HomeServices;
