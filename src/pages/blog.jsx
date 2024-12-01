import React from "react";
import SEO from "../common/seo";
import Blog from "../components/blog-pages/blog";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Gencio - blog"} />
      <Blog />
    </>
  );
};

export default index;
