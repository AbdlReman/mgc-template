import React from "react";
import  Link  from 'next/link';

const CtaArea = () => {
  return (
    <>
      <div
        className="da-cta-section d-none d-lg-block wow tpfadeUp"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div
            className="da-cta-area pt-45 pb-45"
            style={{backgroundImage: `url(/assets/img/cta/da-pattern.png)`}}
          >
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="da-cta-info ml-130">
                  <h4>
                    Explore innovative real estate solutions and unlock unparalleled investment opportunities.
                  </h4>
                </div>
              </div>
              <div className="col-xl-4 d-none d-lg-block">
                <div className="da-cta-wraper mr-60 text-end">
                  <Link href="/contact" className="tp-grd-btn">
                    Get In Touch
                    <span className="ml-10">
                      <i className="fal fa-long-arrow-right"></i>
                      <i className="fal fa-long-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
