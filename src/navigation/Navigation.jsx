import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import AuthForm from "../components/Auth/AuthForm";
import AuthContext from "../store/auth-context";
import ModalAuth from "../components/UI/ModalAuth";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      {authCtx.isLoggedIn && (
        <Route path="/menu">
          <Menu />
        </Route>
      )}

      {!authCtx.isLoggedIn && (
        <Route path="/menu">
          <Home />
          <ModalAuth />
        </Route>
      )}

      {!authCtx.isLoggedIn && (
        <Route path="/login">
          <AuthForm type="login" />
        </Route>
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/registration">
          <AuthForm type="signup" />
        </Route>
      )}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
export default Navigation;
