import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContactHomeSeven from "../homes/home-7/contact-home";
import PricePlan from "./price-plan-area";

const Price = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Our Plans" title="Pricing & Plans" />
      <PricePlan />
      <ContactHomeSeven style_from_pric={true} />
      <Footer tp_border={true} />
    </>
  );
};

export default Price;
