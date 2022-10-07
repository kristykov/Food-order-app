import React from "react";
import { Fade } from "react-awesome-reveal";
import IonIcon from "@reacticons/ionicons";
import classes from "./HomeReviews.module.scss";
import person from "../../../assets/testimonial1.png";
import burger from "../../../assets/burger4.jpg";

const HomeReviews = () => {
  return (
    <section className={`${classes.reviews} section`}>
      <div className={`${classes["reviews-container"]} container`}>
        <Fade direction="down" triggerOnce>
          <div className={classes["reviews-content"]}>
            <img className={classes.burger} src={burger} alt="burger" />
            <div className={classes["reviews-description"]}>
              <h3 className="section-title">What our customers say about us</h3>
              <div>
                <div className={classes.customer}>
                  <img
                    className={classes["customer-pic"]}
                    src={person}
                    alt=""
                  />

                  <div className={classes["customer-data"]}>
                    <span className={classes["customer-name"]}>Joe Doye</span>
                    <span>Student</span>
                  </div>
                </div>
                <p>
                  The food is really delicious. The delivery time is prettyr
                  fast. I would recommend this place to everyone!
                </p>
                <div className={classes["customer-rate"]}>
                  <IonIcon
                    className={classes["customer-rate-star"]}
                    name="star"
                  />
                  <IonIcon
                    className={classes["customer-rate-star"]}
                    name="star"
                  />
                  <IonIcon
                    className={classes["customer-rate-star"]}
                    name="star"
                  />
                  <IonIcon
                    className={classes["customer-rate-star"]}
                    name="star"
                  />
                  <IonIcon
                    className={classes["customer-rate-star"]}
                    name="star"
                  />
                  <span className={classes["customer-rate-text"]}>
                    4.9 (240K reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default HomeReviews;
