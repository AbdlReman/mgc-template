import service_data from "@/src/data/service-data";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <div className="tp-it-service serive-page-item-title pt-120 pb-90">
        <div className="container">
          <div className="row it-sv-counter">
            {service_data.slice(11, 17).map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6"
                data-aos={item.data_aos}
                data-aos-duration={item.duration}
              >
                <div className="it-service__item mb-30 text-center">
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.icon} alt="them-pure" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
