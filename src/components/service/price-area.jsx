import PricingPlan from "@/src/common/pricing-plan";
import React from "react";

const price_tp_content = {
  title: "Price & Plans",
  des: <> Business content marketing strategy should include adding & updating your most important and high-performing. </> ,
};

const { title, des } = price_tp_content;

const PriceArea = () => {
  return (
    <>
      <div className="tp-app-price-area theme-bg fix pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-30">{title}</h2>
                  <p>{des}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <PricingPlan service_style={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;
