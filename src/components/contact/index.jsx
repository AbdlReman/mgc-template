import BreadcrumbArea from "@/src/common/breadcrumb-area";
import MapArea from "@/src/common/map-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";
import CallToAction from "../homes/home-2/call-to-action";

const Contact = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <ContactArea />
      <MapArea />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Contact;
