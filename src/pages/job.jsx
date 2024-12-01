import React from "react";
import SEO from "../common/seo";
import Job from "../components/job";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Gencio - Job"} />
      <Job />
    </>
  );
};

export default index;
