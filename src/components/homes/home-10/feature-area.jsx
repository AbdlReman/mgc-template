import React from 'react';

// feature_data

const feature_data = [
    {
        id: 1,
        icon: "flaticon-sketchbook",
        position: "down",
        cls: "",
        title: "Strat From Sketch",
        des: <>Maximize your presence on search engine results pages.</>,
        delay: ".3s"
    },
    {
        id: 2,
        icon: "flaticon-settings",
        position: "up",
        cls: "",
        title: "Creative Process",
        des: <>Maximize your presence on search engine results pages.</>,
        delay: ".4s",
    },
    {
        id: 3,
        icon: "flaticon-design",
        position: "",
        cls: "",
        title: "Design & Development",
        des: <>Maximize your presence on search engine results pages.</>,
        delay: ".5s",
    },
    {
        id: 4,
        icon: "flaticon-box",
        position: "up",
        cls: "",
        title: "Final Product",
        des: <>Maximize your presence on search engine results pages.</>,
        delay: ".6s",
    },
]

const FeatureArea = () => {
    return (
      <>
        <div className="seo-feature-area seagreen-bg p-relative pt-120 pb-90">
          <div className="seo-fea-line-share d-none d-xl-block">
            <img src="/assets/img/icons/seo-feature-line.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title-wraper text-center">
                  <div className="tp-section">
                    <h2
                      className="tp-section__title text-white mb-25 wow tpfadeUp"
                      data-wow-delay=".3s"
                    >
                      Our Working Process
                    </h2>
                    <p className="pb-60 wow tpfadeUp" data-wow-delay=".4s">
                      Search Engine & Social Media Optimization Experts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {feature_data.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-6 wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div
                    className={`seo-feature-item ${item.position} text-center mb-30`}
                  >
                    <div className="seo-feature-item__icon p-relative">
                      <span className="seo-circle-bg">
                        <i className={item.icon}></i>
                      </span>
                    </div>
                    <div className="seo-feature-item__content mt-40">
                      <h3 className="seo-feature-item__content-title mb-20">
                        <a href="#">{item.title}</a>
                      </h3>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="seo-fea-shapes">
            <div className="icon-left wow tpfadeUp" data-wow-delay=".3s">
              <span>
                <i className="flaticon-megaphone"></i>
              </span>
            </div>
            <div className="icon-right wow tpfadeUp" data-wow-delay=".4s">
              <span>
                <i className="flaticon-globe"></i>
              </span>
            </div>
          </div>
        </div>
      </>
    );
};

export default FeatureArea;