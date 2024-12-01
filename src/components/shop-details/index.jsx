import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import RelatedProducts from "./related-products";
import ShopDetailsArea from "./shop-details-area";

const ShopDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Shop Details" title="Shop Details" />
      <ShopDetailsArea />
      <RelatedProducts />
      <Footer tp_border={true} />
    </>
  );
};

export default ShopDetails;
