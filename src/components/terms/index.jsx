import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import TermsArea from "./terms-area";

const Terms = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Terms"  title="Terms & Conditions"/>
      <TermsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Terms;
