import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";


const about_content = {
    about: "About Our Agency",
    title: <>Catch Your Memories <br /> In <span> Photo & Video.</span></>,
    service_title: "Service",
    service_1: <>Fashion Photography <br /> Wedding Photography <br /> Commercial Shooting <br /> Photo Studio</>,
    service_2: <>Geographic Photo Contest 2022 <br /> <a href="#">Sony World Photography 2018</a> <br /> Monovisions Photography 2017</>,
    btn: "get in touch"

}


const { about, title, service_title, service_1, service_2, btn } =
  about_content;
  
const AboutArea = () => {
  return (
    <>
      <div className="ptg-about dark-bg pt-120 pb-90 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="ptg-about-info pt-50">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span
                      className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp"
                      data-wow-delay=".3s"
                    >
                      {about}
                    </span>
                    <h2
                      className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      {title}
                    </h2>
                  </div>
                </div>
                <div
                  className="ptg-about-content d-flex mb-40 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="about-step-info mr-100">
                    <h3>{service_title}</h3>
                    <p>{service_1}</p>
                  </div>
                  <div className="about-step-info">
                    <h3>{service_title}</h3>
                    <p>{service_2}</p>
                  </div>
                </div>
              </div>
              <div
                className="ptg-about-btn-wrapper mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link href="/contact" className="tp-black-btn br-btn-bg-dark">
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="ptg-about-img-wrapper p-relative wow tpfadeUp">
                <Tilt
                  className="tilt-img"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={900}
                  scale={1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div
                    className="ptg-about-img"
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                    <img
                      src="/assets/img/about/pta-about-img.jpg"
                      alt="about"
                    />
                  </div>
                </Tilt>
                <div className="pta-about-circle">
                  <img src="/assets/img/about/ptg-ab-circle.png" alt="circe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
