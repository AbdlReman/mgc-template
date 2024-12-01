import React from "react";


// service_data
const service_data = [
  {
    id: 1,
    counter: "01",
    title: <>Marketing as a Service</> ,
    des:  <>
From strategy to design and production, we deliver marketing solutions tailored to elevate your brand’s presence and growth..</>,
    delay: ".4s",
    list_item: [
      // "Product Branding",
      // "Platform & Positioning",
      // "Trends & Insights",
      // "Marketing Strategy",
    ],
  },
  {
    id: 2,
    counter: "02",
    title: <> Event As a Service</> ,
    des: <>Our all-in-one event solutions handle every detail—from concept and design to execution and post-event analysis..</> ,
    delay: ".5s",
    list_item: [
      // "Product Branding",
      // "Platform & Positioning",
      // "Trends & Insights",
      // "Marketing Strategy",
    ],
  },
  {
    id: 3,
    counter: "03",
    title:  <> Sales <br/>Support </> ,
    des:  <>
At Maidaan Properties, we provide expert assistance for buying and selling properties, ensuring smooth and transparent transactions.</>,
    delay: ".5s",
    list_item: [
      // "Product Branding",
      // "Platform & Positioning",
      // "Trends & Insights",
      // "Marketing Strategy",
    ],
  },
];



const ServiceArea = () => {
  return (
    <>
      <div className="tp-da-service-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp ">
                    Our Services
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Service We <span>Provide</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className="da-service pr-30 pl-30 mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <h3 className="da-service__title ">{item.title}</h3>
                    <div className="da-service__counter">{item.counter}</div>
                  </div>
                  <div className="da-service__list-box white-bg">
                    <p>{item.des}</p>
                    <ul>
                      {item.list_item.map((list, i) => (
                        <li key={i}>
                          {list}
                          <span>
                            <i className="fal fa-check"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
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
