import React from "react";
import { Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
// import Header from "../components/Layout/Header";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import AuthForm from "../components/Auth/AuthForm";

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
      <Route path="/login">
        <AuthForm />
      </Route>
    </>
  );
};
export default Navigation;
