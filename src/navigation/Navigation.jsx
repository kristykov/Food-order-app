import React, { useContext } from "react";
import { Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
// import Header from "../components/Layout/Header";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import AuthForm from "../components/Auth/AuthForm";
import AuthContext, { AuthContextProvider } from "../store/auth-context";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  // const { isLoggedIn } = authCtx;
  console.log(authCtx.isLoggedIn);
  return (
    <>
      {/* <Home /> */}
      <AuthContextProvider>
        <Route path="/home">
          <Home />
        </Route>
        {isLoggedIn && (
          <Route path="/menu">
            <Menu />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/login">
            <AuthForm type="login" />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/registration">
            <AuthForm type="signup" />
          </Route>
        )}
      </AuthContextProvider>
    </>
  );
};
export default Navigation;
