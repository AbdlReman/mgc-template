import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Header from "@/src/layout/headers/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import Footer from "@/src/layout/footers/footer";


const Portfolio = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio" title="Case Study" />
      <PortfolioArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Portfolio;
