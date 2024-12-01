import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import SearchArea from "./search-area";

const Search = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="  Search Results" title="Results for: identity none...." />
      <SearchArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Search;
