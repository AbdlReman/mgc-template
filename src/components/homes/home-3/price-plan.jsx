import price_plan_data from "@/src/data/price-plan";
import Link from "next/link";
import React from "react";


// // price_plan_data
// const price_plan_data = [
//     {
//         id: 1,
//         price: "99",
//         title: "For Enterprise",
//         active: "",
//         des: <>Best choice for priority support</>,
//         price_list: [
//              <><b>Free Custorm </b>Domain</>,
//              <><b>Unlimited </b>Boost Power</>,
//              <><b>Mobile-Optimized </b>Website</>,
//              <><b>Lifetime </b>Usages</>,
//         ]

//     },
//     {
//         id: 2,
//         price: "120",
//         title: "For Agency & Company",
//         active: "active",
//         des: <>Best choice for priority support</>,
//         price_list: [
//              <><b>Free Custorm </b>Domain</>,
//              <><b>Unlimited </b>Boost Power</>,
//              <><b>Mobile-Optimized </b>Website</>,
//              <><b>Lifetime </b>Usages</>,
//         ]

//     },
//     {
//         id: 3,
//         price: "500",
//         title: "For Big Company & Team",
//         active: "",
//         des: <>Best choice for priority support</>,
//         price_list: [
//              <><b>Free Custorm </b>Domain</>,
//              <><b>Unlimited </b>Boost Power</>,
//              <><b>Mobile-Optimized </b>Website</>,
//              <><b>Lifetime </b>Usages</>,
//         ]

//     },
// ]



const PricePlan = () => {
  return (
    <>
      <div className="tp-price-area pt-120 pb-90 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp">
                  Maidaan's Milestones:
                  </span>
                  <h2 className="tp-section__title mb-30 wow tpfadeUp">
                  Our  <span>Achievements</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            {price_plan_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className={`tp-price-box ${item.active} white-bg mb-30 p-relative wow tpfadeUp`}
                >
                  <div className="tp-price-box__info mb-35">
                    <b>
                      {/* <span>0</span> */}
                      {item.price}
                    </b>
                    <h4 className="tp-price-box__info-title">{item.title}</h4>
                    <span>{item.des}</span>
                  </div>
                  <div className="tp-purcase-btn--wrapper mb-25">
                    {/* <Link href="/checkout" className="tp-grd-border-btn">
                      <span className="mr-5">
                        <i className="fas fa-shopping-basket"></i>
                        <i className="fas fa-shopping-basket"></i>
                      </span>
                      Purchase Now
                    </Link> */}
                  </div>
                  <div className="tp-price-fea-list">
                    <ul>
                      {item.price_list.map((list, i) => (
                        <li key={i}>
                          <i className="fal fa-check"></i>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-price-box__star">
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricePlan;
