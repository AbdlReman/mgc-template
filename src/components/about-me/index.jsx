import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutMeImages from "./about-me-images";
import AboutMeInfo from "./about-me-info";
import HeroAboutMe from "./hero-about-me";
import ItCtaArea from "./it-cta-area";

const AboutMe = () => {
  return (
    <>
      <Header /> 
      <HeroAboutMe />
      <AboutMeInfo />
      <AboutMeImages /> 
      <ItCtaArea />
      <Footer />
    </>
  );
};

export default AboutMe;
