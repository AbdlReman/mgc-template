import React from "react";
import { TypeAnimation } from 'react-type-animation';



const hero_content = {
    top_title: "Comprehensive Branding Solutions",
    title: "for Every Size  of ",
    sub_title: <>At Maidaan Group, we blend creativity with strategy to deliver impactful branding solutions. Our holistic approach ensures your brand reflects its true essence while driving engagement and growth.</>,
    total_review: "1500",
    hero_img: "/assets/img/hero/hero-1.png",
    hero_pie_img : "/assets/img/hero/hero-pie-chart.png",
    hero_docu_img : "/assets/img/hero/hero-chart.png"

}

const {sub_title, top_title, title, total_review , hero_img, hero_pie_img , hero_docu_img }  = hero_content


const HeroBusiness = () => {


  return (
    <>
      <div className="tp-hero-business theme-bg fix pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="bs-hero-section mr-40">
                <span className="bs-hero-section__subtitle white-bg mb-15 d-inline-block wow tpfadeUp">
                  <i className="before-border"></i>
                  {top_title}
                </span>
                <div className="cd-intro">
                  <h3
                    className="bs-hero-section__title cd-headline loading-bar mb-25 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <span>{title}</span>
                    <span className="cd-words-wrapper">

                    <TypeAnimation
                          sequence={[
                            'Business', 
                            2000,
                            'Branding', 
                            3000,
                            'Business', 
                          ]}
                          wrapper="div"
                          cursor={false}
                          repeat={Infinity}
                          style={{ color: "#0a61c1", textDecorationLine: "underline" }}
                        />

                    </span>
                  </h3>
                </div>
                <p className="mb-40 wow tpfadeUp" data-wow-delay=".4s">
                   {sub_title}
                </p>
              </div>
              <div className="bs-hero__subscribe mr-40 mb-30">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div
                    className="bs-hero__subscribe-box p-relative wow tpfadeUp"
                    data-wow-delay=".6s"
                  >
                    <div className="bs-hero__subscribe-input p-relative">
                      <i className="fas fa-envelope-open"></i>
                      <input type="email" placeholder="Email address..." />
                    </div>
                    <button
                      className="hero-submit-btn tp-btn-hover alt-color"
                      type="submit"
                    >
                      subscribe
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                      <b></b>
                    </button>
                  </div>
                </form>
              </div>
              <div className="bs-hero-feature wow tpfadeUp">
                <span
                  className="bs-hero-feature__review wow tpfadeRight"
                  data-wow-delay=".6s"
                >
                  <i className="fas fa-star"></i>
                  <b>{total_review}+</b> Reviews
                </span>
                <span
                  className="bs-hero-feature__credit wow tpfadeLeft"
                  data-wow-delay=".6s"
                >
                  {/* <i className="fas fa-credit-card"></i>
                  <b> No credit card required</b> */}
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="bs-hero__img text-lg-end p-relative pr-40">
                <img src={hero_img} alt="" />
                <div className="hero-business-chart">
                  <img src={hero_docu_img} alt="" />
                </div>
                <div className="hero-business-pie">
                  <img src={hero_pie_img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBusiness;
