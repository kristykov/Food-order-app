import React from "react";
import HomeApp from "./HomeApp";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeMenu from "./HomeMenu";
import HomeReviews from "./HomeReviews";
import HomeServices from "./HomeServices";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeServices />
      <HomeMenu />
      <HomeReviews />
      <HomeApp />
      <Footer />
    </>
  );
};
export default Home;
