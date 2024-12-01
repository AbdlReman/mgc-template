import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import SerivceVideos from "./serivce-videos";
import ServiceArea from "./service-area";

const ServiceTwo = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Service V2"  title="What We Do" />
      <ServiceArea />
      <SerivceVideos />
      <Footer />
    </>
  );
};

export default ServiceTwo;
