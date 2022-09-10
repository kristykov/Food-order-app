import React from "react";
import { Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
// import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home/Home";
import Menu from "../pages/Menu/index";

const Navigation = () => {
  return (
    <>
      {/* <Home /> */}
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
    </>
  );
};
export default Navigation;
