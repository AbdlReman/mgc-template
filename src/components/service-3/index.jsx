import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import BusinessJourney from "../../common/business-journey";
import ServiceArea from "./service-area";

const ServiceThree = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Service V3"  title="What We Do" />
      <ServiceArea />
      <BusinessJourney style_service={true}/>
      <Footer />
    </>
  );
};

export default ServiceThree;
