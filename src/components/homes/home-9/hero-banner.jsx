import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div
        className="ha-hero-area p-relative"
        style={{backgroundImage: `url(/assets/img/hero/ha-hero-bg.jpg)`}}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ha-hero-info">
                <div className="ha-hero__content">
                  <span
                    className="ha-hero__content-subtitle mb-10 wow tpfadeUp" data-wow-delay=".3s" >
                    Architecture & interior solution
                  </span>
                  <h2
                    className="ha-hero__content-title mb-50 wow tpfadeUp" data-aos-duration=".4s" >
                    Build Residencial <br /> space though
                  </h2>
                  <a
                    href="tel:78568065900"
                    className="tp-white-btn wow tpfadeUp"
                    data-wow-delay=".5s" >
                    view project
                    <span className="ml-10">
                      <i className="fal fa-long-arrow-right"></i>
                      <i className="fal fa-long-arrow-right"></i>
                    </span>
                    <b></b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
