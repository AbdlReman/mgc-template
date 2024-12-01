import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PortfolioArea from "../../common/portfolio-area";
import JobDetailsArea from "./job-details-area";

const JobDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Careers"  title="Job Details"/>
      <JobDetailsArea />
      <PortfolioArea />
      <Footer />
    </>
  );
};

export default JobDetails;
