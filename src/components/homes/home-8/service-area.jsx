import React from "react";




const service_data = [
  {
    id: 1,
    title: "Modern Architecture",
    des: <>Our team of skilled architects delivers sleek, modern designs that blend functionality with aesthetic appeal.</>,
  },
  {
    id: 2,
    title: "Construction Services",
    des: <>We undertake complete construction projects, ensuring durability, precision, and adherence to industry standards.</>,
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    des: <>Victory Builders excels in breathing new life into old spaces, offering comprehensive renovation and remodeling solutions.</>,
  },
  
];


const service_content ={
    title: "Service",
    main_title: "Our Services",
    we_do: "What We Do",
    btn_text: "More Services"
}


const {title, main_title , we_do, btn_text}  = service_content

const ServiceArea = () => {
  return (
    <>
      <div
        className="ca-service-area theme-bg-7 pt-120 pb-90"
        id="services"
        style={{
          backgroundImage: `url(/assets/img/services/ca-sv-pattern-bg.png)`,
        }}
      >
        <div className="container">
          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__bigtitle">{title}</span>
                  <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">
                    {main_title}
                  </span>
                  <h2 className="tp-section__title mb-40">{we_do}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow tpfadeUp">
              <div className="ca-service-btn-wrapper float-md-end mb-75">
                {/* <a href="#" className="tp-white-btn-rgb">
                  {btn_text}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="ca-service-wrapper mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="ca-service__item text-center aos-init aos-animate">
                   
                    <h3 className="ca-service__item-title mb-20">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="mb-30">{item.des}</p>
                 
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

export default ServiceArea;
