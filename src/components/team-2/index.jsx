import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import TeamArea from "./team-area";

const TeamTwo = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Team V2" title="Our Team" />
      <TeamArea />
      <Footer tp_border={true} />
    </>
  );
};

export default TeamTwo;
