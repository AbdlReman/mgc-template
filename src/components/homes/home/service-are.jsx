import Link from "next/link";
import React from "react";

// service data
const service_data = [
  {
    id: 1,
    description: "Expert guidance in buying, selling, and managing properties to meet your goals.",
    name: "Real Estate",
    link: "service-real-estate",
    delay: ".3s",
  },
  {
    id: 2,
    description: "State-of-the-art construction services, ensuring sustainability and timely delivery of projects.",
    name: "Construction",
    link: "service-construction",
    delay: ".4s",
  },
  {
    id: 3,
    description: "Personalized advice to help you make informed and profitable investment decisions.",
    name: "Investment Consulting",
    link: "service-investment-consulting",
    delay: ".5s",
  },
  {
    id: 4,
    description: "Comprehensive event management for property and real estate showcases.",
    name: "Event as a Service",
    link: "service-eaas",
    delay: ".6s",
  },
  {
    id: 5,
    description: "Innovative marketing strategies to boost your brand's visibility and reach.",
    name: "Marketing as a Service",
    link: "service-maas",
    delay: ".7s",
  },
  
];




const service_content = {
    name: "Services",
    title: <> The Benefits of Prioritizing <br /> Our Customers</>
}

const {name, title}  = service_content
const ServiceAre = () => {
  return (
    <>
      <div className="tp-bs-service pt-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle white-bg mb-15 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <i className="before-border"></i> {name}
                    <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".5s"
                  >
                   {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-bs-service pb-55 tp-border-bottom pt-35">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="col wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-bs-service-box text-center pt-40 pb-40 mb-25">
                   
                    <h3 className="tp-bs-sv-title">
                       {item.name}

                    </h3>
                    <p className="m-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tp-bs-service-review text-center pt-40 pb-40 wow tpfadeUp">
            <div className="tp-bs-sv-avata d-lg-inline-block pr-25">
              <img src="/assets/img/services/service-avatas.png" alt="" />
            </div>
            <p className="d-inline-block pr-5">
  At Maidaan Group, we prioritize our customers by offering expert services in real estate, construction, investment consulting, and event management, ensuring you achieve your goals.
</p>
<Link href="/contact">
  Get In Touch With Us
  <span>
    <i className="fal fa-long-arrow-right"></i>
  </span>
</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAre;
