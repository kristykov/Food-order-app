import React, { useState } from "react";
// import CartProvider from "../../store/CartProvider";
import Header from "../../components/Layout/Header";
import MainMenu from "../../components/Layout/MainMenu";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Layout/Footer/Footer";

const Menu = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const queryHandler = (q: string) => {
    setSearchStr(q);
  };

  return (
    // <CartProvider>
    <>
      <Header onShowCart={showCartHandler} onQuery={queryHandler} />
      <MainMenu searchStr={searchStr} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Footer />
    </>
    // </CartProvider>
  );
};
export default Menu;
