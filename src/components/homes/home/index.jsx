import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import Brand from "./brand";
import CtaArea from "./cta-are";
import HeroBusiness from "./hero-business";
import ProjectsArea from "./projects-area";
import ServiceAre from "./service-are";
import TestimonialArea from "./testimonial-area";

const HomeOne = () => {
  return (
    <>
      <Header style_home_one={true} />
      <HeroBusiness />
      <AboutArea />
      {/* <Brand /> */}
      <ServiceAre />
      <TestimonialArea />
      <ProjectsArea />
      <CtaArea />
      <Footer />
    </>
  );
};

export default HomeOne;
