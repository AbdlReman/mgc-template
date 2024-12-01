import service_data from "@/src/data/service-data";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      {/* <!-- scroll btn --> */}
      <div className="arrow-down-btn dark-bg">
        <a href="#ptg-portfolio" className="down-arrow-btn">
          <i className="fal fa-long-arrow-down"></i>
        </a>
      </div>
      {/* <!-- scroll btn end  --> */}

      {/* <!-- service start  --> */}
      <div className="ptg-service dark-bg pt-120 pb-80">
        <div className="container">
          <div className="row">
            {service_data.slice(3, 7).map((item, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div
                  className="ptg-service__box p-relative wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="ptg-service__box-icon">
                    <span>
                      <i className={item.icon}></i>
                    </span>
                  </div>
                  <h3 className="ptg-service__box-title">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p className="mb-0"> {item.des}</p>
                  <span className="ptg-counter">01</span>
                </div>
              </div>
            ))}
          </div>
          <div className="row flex-column-reverse wow tpfadeUp">
            <div className="tp-ptg-service-review text-center pt-40 mt-50 pb-40 tp-border-top-dark">
              <div className="tp-pg-sv-avata d-lg-inline-block pr-25">
                <img
                  src="/assets/img/services/service-avatas-black.png"
                  alt=""
                />
              </div>
              <p className="d-inline-block pr-5 text-uppercase">
                Here are some of the rewards from putting our customers first.
                <a href="#">
                  Make Request{" "}
                  <span>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service start end  --> */}
    </>
  );
};

export default ServiceArea;
