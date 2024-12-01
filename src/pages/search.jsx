import React from "react";
import SEO from "../common/seo";
import Search from "../components/search";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Gencio - Search"} />
      <Search />
    </>
  );
};

export default index;
