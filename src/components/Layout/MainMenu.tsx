import React, { useState } from "react";
import MenuCard from "./MenuCard";
import classes from "./MainMenu.module.scss";
import dishlist from "../../dishData";

interface IProps {
  searchStr: string;
}

const MainMenu = ({ searchStr }: IProps) => {
  const [activeLink, setActiveLink] = useState("recomended");
  let fileredDishList;

  const onUpdateActiveSection = (value: string): void => {
    setActiveLink(value);
  };

  if (!searchStr) {
    if (activeLink === "recomended") {
      fileredDishList = dishlist;
    } else {
      fileredDishList = dishlist.filter((item) => {
        return item.type === activeLink;
      });
    }
  } else if (activeLink === "recomended") {
    fileredDishList = dishlist.filter((item) => {
      return item.name.toLowerCase().includes(searchStr);
    });
  } else {
    const prefileredDishList = dishlist.filter((item) => {
      return item.type === activeLink;
    });
    fileredDishList = prefileredDishList.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchStr);
    });
  }

  return (
    <>
      <h2 className={classes["main-header"]}>Find the menu you want</h2>
      <ul className={classes["main-filter"]}>
        <li
          aria-hidden="true"
          className={
            activeLink === "recomended"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("recomended");
          }}
        >
          Recomended
          <div />
        </li>
        <li
          aria-hidden="true"
          className={
            activeLink === "breakfast"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("breakfast");
          }}
        >
          Breakfast <div />
        </li>
        <li
          aria-hidden="true"
          className={
            activeLink === "lunch"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("lunch");
          }}
        >
          Lunch <div />
        </li>
        <li
          aria-hidden="true"
          className={
            activeLink === "dinner"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("dinner");
          }}
        >
          Dinner
          <div />
        </li>
        <li
          aria-hidden="true"
          className={
            activeLink === "ice-cream"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("ice-cream");
          }}
        >
          Ice Cream <div />
        </li>
        <li
          aria-hidden="true"
          className={
            activeLink === "coffee"
              ? `${classes["main-filter-link"]} ${classes.active}`
              : "main-filter-link"
          }
          onClick={() => {
            return onUpdateActiveSection("coffee");
          }}
        >
          Coffee
          <div />
        </li>
      </ul>
      <div className={classes.container}>
        {fileredDishList.map((item) => {
          return (
            <MenuCard
              id={item.id}
              key={item.key}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainMenu;
