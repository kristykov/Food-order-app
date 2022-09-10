import React from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./HomeReviews.module.scss";
import person from "../../../assets/testimonial1.png";
import burger from "../../../assets/burger4.jpg";

const HomeReviews = () => {
  return (
    <section className={`${classes.reviews} section`}>
      <div className={`${classes["reviews-container"]} container`}>
        <div className={classes["reviews-content"]}>
          <img className={classes.burger} src={burger} alt="burger" />
          <div className={classes["reviews-description"]}>
            <h3 className={`${classes["reviews-title"]} section-title`}>
              What our customers say about us
            </h3>
            <div className={classes["reviews-customer-profile"]}>
              <div className={classes.customer}>
                <img className={classes["customer-pic"]} src={person} alt="" />

                <div className={classes["customer-data"]}>
                  <span className={classes["customer-name"]}>Joe Doye</span>
                  <span className={classes["customer-job"]}>Student</span>
                </div>
              </div>
              <p className={classes["customer-review"]}>
                The food is really delicious. The delivery time is prettyr fast.
                I would recommend this place to everyone!
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
      </div>
    </section>
  );
};
export default HomeReviews;
