import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MainMenu from "./components/Layout/MainMenu";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <Header onShowCart={showCartHandler} />
      <MainMenu />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </>
  );
};

export default App;
