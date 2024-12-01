import React from "react";
import Tilt from "react-parallax-tilt";

// about_brands_content
const about_brands_content = {
  dashboard_img: "/assets/img/about/app-dashboard-1.jpg",
  chart_img: "/assets/img/about/app-chart.png",
  title: "About",
  main_title: "Grand Prairie Gardens.",
};

const { dashboard_img, chart_img, title, main_title } = about_brands_content;

// features_list
const features_list = [
  "Features include Multi Factor Authentication",
  "We strongly believe in providing open source solutions",
];

const Feature = ({ feature }) => (
  <li>
    <span>
      <i className="fal fa-check"></i>
    </span>
    {feature}
  </li>
);

const AboutBrand = () => {
  return (
    <div className="tp-app-about pb-90 mt-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-xl-7 col-lg-6 wow tpfadeUp">
            <Tilt
              className="tilt-img"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={900}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="tp-about-img-wrapper p-relative">
                <div className="tp-app-about-img d-inline-block">
                  <img src={dashboard_img} alt="App Dashboard" />
                  <div className="app-chart-img">
                    <img src={chart_img} alt="App Chart" />
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Content Section */}
          <div
            className="col-xl-5 col-lg-6 wow tpfadeUp"
            data-wow-delay=".4s"
          >
            <div className="tp-da-about-info mb-30">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size">
                    <i className="far fa-circle"></i>
                    {title}
                  </span>
                  <h2 className="tp-section__title mb-30 text-mirage">
                    {main_title}
                  </h2>
                </div>
                <p>
                  Victory Builders is excited to partner with Maidaan
                  Properties to bring Grand Prairie Gardens to life. As one of
                  our visionary projects, Grand Prairie Gardens will feature
                  community-centered amenities and high-quality construction,
                  creating a lasting and inviting environment for future
                  residents.
                </p>
              </div>
              <div className="tp-app-about-fea pb-25 mb-10">
                <ul>
                  {features_list.map((feature, i) => (
                    <Feature key={i} feature={feature} />
                  ))}
                </ul>
              </div>
              {/* <div className="tp--indo-btns">
                <div className="tp-app-link-btn">
                  <a
                    href="#learn-more"
                    className="tp-grey-btn tp-btn-hover alt-black-color"
                  >
                    Learn More
                    <span className="ml-10">
                      <i className="fal fa-long-arrow-right"></i>
                      <i className="fal fa-long-arrow-right"></i>
                    </span>
                    <b></b>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
