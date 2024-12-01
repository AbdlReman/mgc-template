import Link from 'next/link';
import React from 'react';

// feature_data_2
const feature_data_2 = [
    {
        id: 1,
        icon: "flaticon-megaphone",
        color: "ab-megapone-icon",
        title: "Cloud Compatible",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 2,
        icon: "flaticon-computer",
        color: "ab-computer-icon",
        title: "IT Consultancy",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 3,
        icon: "flaticon-bubble-chat",
        color: "ab-bubble-icon",
        title: "24/7 Online Support",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
]

const feature_content  = {
    title: "Core level features",
    des: <>Business content marketing strategy should include adding & updating your most important and high-performing.</>
}
const {title, des}  = feature_content

const FeatureArea = () => {
    return (
      <>
        <div className="tp-ab-feature-area pb-90">
          <div className="ab-title-section-bg theme-bg pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="section-title-wraper mb-60">
                    <div className="tp-section text-center">
                      <h2 className="tp-section__title mb-30 wow tpfadeUp">
                        {title}
                      </h2>
                      <p className="wow tpfadeUp">{des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-ab-sv-feature-boxes">
            <div className="container">
              <div className="row">
                {feature_data_2.map((item, i) => (
                  <div key={i} className="col-lg-4 wow tpfadeUp">
                    <div className="app-feature-box about-feature-item white-bg text-center">
                      <div className={`app-feature-box-icon ${item.color}`}>
                        <span> 
                          <i className={item.icon}></i>
                        </span>
                      </div>
                      <div className="app-feature__info">
                        <h4 className="app-feature__title text-mirage">
                          <Link href="/service-details">{item.title}</Link>
                        </h4>
                        <span>{item.des}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default FeatureArea;