import React from "react";
import Carousel from "react-multi-carousel";
import HomeSpecialItem from "./HomeSpecialItem";
import classes from "./HomeMenu.module.scss";
import "react-multi-carousel/lib/styles.css";

const specialData = [
  {
    id: "p1",
    name: "Barbecue salad",
    detail: "Delicious dish",
    price: 22,
    img: "plate1",
  },
  {
    id: "p2",
    name: "Pasta with seafood",
    detail: "Delicious dish",
    price: 28,
    img: "plate2",
  },
  {
    id: "p3",
    name: "Chicken salad",
    detail: "Delicious dish",
    price: 22,
    img: "plate3",
  },
  {
    id: "p4",
    name: "Spinach salad",
    detail: "Delicious dish",
    price: 20,
    img: "plate4",
  },
  {
    id: "p5",
    name: "Buffalo pizza",
    detail: "Delicious dish",
    price: 22,
    img: "plate5",
  },
];

const HomeMenu = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`${classes.menu} section`}>
      <div className="container">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Our best menu</h2>
      </div>
      <Carousel
        responsive={responsive}
        infinite
        arrows
        className={`${classes["menu-container"]}`}
      >
        {specialData.map((item) => {
          return (
            <HomeSpecialItem
              id={item.id}
              key={item.id}
              name={item.name}
              detail={item.detail}
              price={item.price}
              img={item.img}
            />
          );
        })}
      </Carousel>
    </section>
  );
};
export default HomeMenu;
