import React from "react";
import HomeSpecialItem from "./HomeSpecialItem";
import classes from "./HomeMenu.module.scss";

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
  return (
    <section className={`${classes.menu} section`}>
      <div className="container">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Our best menu</h2>
      </div>
      <div className={`${classes["menu-container"]} container`}>
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
      </div>
    </section>
  );
};
export default HomeMenu;
