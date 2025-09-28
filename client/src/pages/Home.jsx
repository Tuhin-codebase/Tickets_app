/**
 * title: home page
 * description: home page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import React from "react"; // import react library from node modules;
import HeroSection from "./../component/HeroSection"; // import HeroSection component from componnet folder;
import TaileresSection from "../component/TaileresSection";
import FeatureSection from "../component/FeatureSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TaileresSection />
    </>
  );
};

export default Home;
