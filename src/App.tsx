import React from "react";
import Home from "./components/Layout/Home/Home";
// import React, { useState } from "react";
// import Cart from "./components/Cart/Cart";
// import Header from "./components/Layout/Header";

// import MainMenu from "./components/Layout/MainMenu";
// import CartProvider from "./store/CartProvider";

const App = () => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const [searchStr, setSearchStr] = useState("");
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  // const queryHandler = (q: string) => {
  //   setSearchStr(q);
  // };
  return (
    <Home />
    // <CartProvider>
    //   <Header onShowCart={showCartHandler} onQuery={queryHandler} />
    //   <MainMenu searchStr={searchStr} />
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    // </CartProvider>
  );
};

export default App;
