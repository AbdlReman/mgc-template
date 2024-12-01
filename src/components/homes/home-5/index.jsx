import FooterFour from "@/src/layout/footers/footer-4";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import HeroSlider from "./hero-slider";
import Portfolio from "./portfolio";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";
import Header from "@/src/layout/headers/header";

const HomeFive = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutArea />
      <ServiceArea />
      <Portfolio />
     <Testimonial />
      <Brand /> 
      <Blog />
      <FooterFour />
    </>
  );
};

export default HomeFive;
