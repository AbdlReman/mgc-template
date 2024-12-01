import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import HelpArea from "./help-area";
import HelpSearch from "./help-search";

const Help = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Help" title="Help Centre" />
      <HelpSearch />
      <HelpArea />
      <Footer tp_border={true} />

    </>
  );
};

export default Help;
