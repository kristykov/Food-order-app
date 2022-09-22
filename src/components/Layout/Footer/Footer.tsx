import React from "react";
import IonIcon from "@reacticons/ionicons";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-content"]}>
          <a href="/" className={classes["footer-logo"]}>
            Tasty Food
          </a>
          <span className={classes["footer-description"]}>
            Get your food fast
          </span>
          <div>
            <a href="/" className={classes["footer-social"]}>
              <IonIcon
                className={classes["footer-social-icon"]}
                name="logo-facebook"
              />
            </a>
            <a href="/" className={classes["footer-social"]}>
              <IonIcon
                className={classes["footer-social-icon"]}
                name="logo-instagram"
              />
            </a>
            <a href="/" className={classes["footer-social"]}>
              <IonIcon
                className={classes["footer-social-icon"]}
                name="logo-twitter"
              />
            </a>
          </div>
        </div>
        <div className={classes["footer-content"]}>
          <h3 className={classes["footer-title"]}>Services</h3>
          <ul>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Delivery
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Pricing
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Fast food
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Reserve your spot
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["footer-content"]}>
          <h3 className={classes["footer-title"]}>Information</h3>
          <ul>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Event
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Contact us
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Privacy policy
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="/" className={classes["footer-link"]}>
                Terms of service
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["footer-content"]}>
          <h3 className={classes["footer-title"]}>Adress</h3>
          <ul>
            <li className={classes["footer-list-item"]}>Krakow - Poland</li>
            <li className={classes["footer-list-item"]}>ul.Romanowicza #999</li>
            <li className={classes["footer-list-item"]}>519 - 999 - 222</li>
            <li className={classes["footer-list-item"]}>tastyfood@email.com</li>
          </ul>
        </div>
      </div>
      <p className={classes["footer-copy-rights"]}>
        &#169; 2022 Kristina. All right reserved
      </p>
    </footer>
  );
};
export default Footer;
