import PricingPlan from "@/src/common/pricing-plan";
import price_plan_data from "@/src/data/price-plan";
import Link from "next/link";
import React from "react";


const price_content = {
    title: "Our Pricing",
    sub_title: "Our Price & Plans"
}

const {title, sub_title}  = price_content
const PriceArea = () => {
  return (
    <>
      <div className="tp-app-price-area fix pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp">
                    <i className="far fa-circle"></i>
                    {title}
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-30 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    {sub_title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <PricingPlan />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;
