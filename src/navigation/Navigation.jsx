import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import AuthForm from "../components/Auth/AuthForm";
// import AuthContext from "../store/auth-context";
import ModalAuth from "../components/UI/ModalAuth";
// import { isLoggedIn } from "../store/authSlice";

const Navigation = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.auth;
  });
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/menu");
      console.log("auth from nav");
    }
  });
  console.log(isAuthenticated);
  // const history = useHistory();
  // const initialToken = localStorage.getItem("token");
  // const [token, setToken] = useState(initialToken);
  // useEffect(() => {
  //   setToken(initialToken);
  // }, [initialToken]);
  // const userIsLoggedIn = !!token;
  // const authCtx = useContext(AuthContext);
  // const auth = useSelector(isLoggedIn);
  // console.log("auth", auth);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      {isAuthenticated && (
        <Route path="/menu">
          <Menu />
        </Route>
      )}

      {!isAuthenticated && (
        <Route path="/menu">
          <Home />
          <ModalAuth />
        </Route>
      )}

      {!isAuthenticated && (
        <Route path="/login">
          <AuthForm type="login" />
        </Route>
      )}
      {!isAuthenticated && (
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
