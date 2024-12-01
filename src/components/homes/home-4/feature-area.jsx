import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: <>Community-Focused Living</>,
    des: <>Grand Prairie Gardens offers community-centered amenities designed to foster connections and a sense of belonging among residents.</>,
  },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: <>Prime Location</>,
    des: <>Situated near essential landmarks, Grand Prairie Gardens ensures easy access to schools, healthcare, and shopping facilities.</>,
  },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: <>High-Quality Construction</>,
    des: <>Each property at Grand Prairie Gardens is built with precision and care, ensuring lasting durability and aesthetic appeal.</>,
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: <>Green Spaces</>,
    des: <>The project features lush green landscapes and parks, offering residents serene spaces to relax and unwind.</>,
  },
];



const FeatureArea = () => {
  return (
    <>
      <div className="tp-app-feature theme-bg-3 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Core Features
                    <i className="far fa-circle"></i>
                  </span>
                  {/* <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Through Our Application
                  </h2> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12">
                <div
                  className="app-feature-box d-flex white-bg p-relative wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  {/* <div className="app-feature-box-icon">
                    <img src={item.icon} alt="iclud" />
                  </div> */}
                  <div className="app-feature__info">
                    <h4 className="app-feature__title text-mirage">
                      <Link href="/service-2">{item.title}</Link>
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
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

export default FeatureArea;
