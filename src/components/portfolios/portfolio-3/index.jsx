import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PortfolioItemsArea from "./portfolio-items-area";

const PortfolioThree = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio layout 3" title="Case Study" />
      <PortfolioItemsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default PortfolioThree;
