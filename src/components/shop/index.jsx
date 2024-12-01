import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ShopArea from "./shop-area";

const Shop = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Terms" title="Terms & Conditions" />
      <ShopArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Shop;
