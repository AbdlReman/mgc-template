import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import BlogArea from "./blog-area";

const Blog = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Blog" title="News & Feeds" />
      <BlogArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Blog;
