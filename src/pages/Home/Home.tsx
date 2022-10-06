import React from "react";
import HomeApp from "../../components/Layout/Home/HomeApp";
import HomeHeader from "../../components/Layout/Home/HomeHeader/HomeHeader";
import HomeMain from "../../components/Layout/Home/HomeMain";
import HomeMenu from "../../components/Layout/Home/HomeMenu";
import HomeReviews from "../../components/Layout/Home/HomeReviews";
import HomeServices from "../../components/Layout/Home/HomeServices";
import Footer from "../../components/Layout/Footer/Footer";

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
