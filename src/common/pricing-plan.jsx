import Link from 'next/link';
import React from 'react';
import price_plan_data from '../data/price-plan';

const PricingPlan = ({service_style}) => {
    return (
        <>
        {/*   white-bg    */}
        {price_plan_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 ">
                <div
                  className={`tp-price-box ${item.active} app-box-shadow ${service_style ? "white-bg" : item.bg_color} mb-30 p-relative wow tpfadeUp`}
                  data-wow-delay=".5s"
                >
                  <div className="tp-price-box__info mb-35">
                    <b className="text-mirage">
                      <span>$</span>
                      {item.price}
                    </b>
                    <h4 className="tp-price-box__info-title text-mirage">
                      {item.title}
                    </h4>
                    <span>{item.des}</span>
                  </div>
                  <div className="tp-purcase-btn--wrapper mb-25">
                    <Link
                      href="/checkout"
                      className={`${item.btn_color} text-capitalize w-100 text-center`}
                    >
                      <span className="mr-10">
                        <i className="fas fa-shopping-basket"></i>
                        <i className="fas fa-shopping-basket"></i>
                      </span>
                      Purchase Now
                    </Link>
                  </div>
                  <div className="tp-price-fea-list app-list">
                    <ul>
                      {item.price_list.map((list, i) => (
                        <li key={i}> <i className="fal fa-check"></i>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-price-box__star color-redical">
                    <span> <i className="fas fa-star"></i> </span>
                  </div>
                </div>
              </div>
            ))}
            
        </>
    );
};

export default PricingPlan;