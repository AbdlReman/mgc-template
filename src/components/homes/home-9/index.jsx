import LineWrap from "@/src/common/line-wrap";
import FooterSeven from "@/src/layout/footers/footer-7";
import HeaderNine from "@/src/layout/headers/header-9";
import React from "react";
import AboutArea from "./about-area";
import Blog from "./blog";
import Brand from "./brand";
import FaqArea from "./faq-area";
import HeroBanner from "./hero-banner";
import MpPortfolio from "./mp-portfolio";
import PortfolioArea from "../../../common/portfolio-area";
import ServiceArea from "./service-area";
import Header from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";

const HomeNine = () => {
  return (
    <>
    <LineWrap />
      <Header/>
      <HeroBanner /> 
      {/* <ServiceArea /> */}
      <AboutArea />
      {/* <Brand /> */}
      <PortfolioArea />
      <FaqArea />
      <MpPortfolio />
      {/* <Blog /> */}
      <Footer />
    </>
  );
};

export default HomeNine;
