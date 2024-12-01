import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import FaqArea from "./faq-area";
import FeatureArea from "./feature-area";
import ItCtaArea from "./it-cta-area";
import ServiceDetailsArea from "./service-details-area";

const ServiceDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Service Details" title="What We Do" />
      <ServiceDetailsArea />
      <FeatureArea />
      <FaqArea />
      <ItCtaArea />
      <Footer />
    </>
  );
};

export default ServiceDetails;
