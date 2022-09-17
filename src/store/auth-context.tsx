import React, { useState } from "react";

type Props = {
  children: JSX.Element;
};

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: Props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (tkn: string) => {
    setToken(tkn);
    localStorage.setItem("token", tkn);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    token: token as string,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
