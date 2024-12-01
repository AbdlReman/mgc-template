import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import JobContentArea from "./job-content-area";
import JobImgGallery from "./job-img-gallery";
import JobPostArea from "./job-post-area";

const Job = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Careers" title="Job Listings" />
      <JobContentArea />
      <JobImgGallery />
      <JobPostArea />
      <Footer />
    </>
  );
};

export default Job;
