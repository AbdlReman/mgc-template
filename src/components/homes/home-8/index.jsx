import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderEight from "@/src/layout/headers/header-8";
import React from "react";
import Brand from "../home-5/brand";
import AboutArea from "./about-area";
import Blog from "./blog";
import BusinessJourney from "../../../common/business-journey";
import HeroBanner from "./hero-banner";
import OurTeam from "./our-team";
import PortfolioArea from "./portfolio-area";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";
import Header from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";

const HomeEight = () => {
  return (
    <>
      <Header/>
      <HeroBanner />
      <AboutArea />
      <ServiceArea  />
      <PortfolioArea />
      {/* <OurTeam /> */}
      <BusinessJourney />
      <Testimonial />
      {/* <Brand style_8={true} />
      <Blog /> */}
      <Footer />
    </>
  );
};

export default HomeEight;
