import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import BlogDetailsArea from "./blog-details-area";

const BlogDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Blog Details" title="Service construct deals physical..." />
      <BlogDetailsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default BlogDetails;
