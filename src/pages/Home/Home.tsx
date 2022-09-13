import React from "react";
import HomeApp from "../../components/Layout/HomeApp";
import HomeHeader from "../../components/Layout/Home/HomeHeader";
import HomeMain from "../../components/Layout/Home/HomeMain";
import HomeMenu from "../../components/Layout/Home/HomeMenu";
import HomeReviews from "../../components/Layout/Home/HomeReviews";
import HomeServices from "../../components/Layout/Home/HomeServices";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeServices />
      <HomeMenu />
      <HomeReviews />
      <HomeApp />
    </>
  );
};
export default Home;
