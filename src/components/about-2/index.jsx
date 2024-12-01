import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AbFactAreaTwo from "./ab-fact-area-2";
import AboutPageAbout from "./about-page-about";
import FeatureArea from "./feature-area";
import OurTeam from "./our-team";

const AboutTwo = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="About V2" title="Our Company History" />
      <AboutPageAbout />
      <FeatureArea />
      <AbFactAreaTwo />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AboutTwo;
