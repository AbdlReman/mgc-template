import Link from "next/link";
import React from "react";

// about_content data
const about_content = {
  sub_title: "The Maidaan Group",
  title: "Revolutionizing Real Estate & Construction Services.",
  des: (
    <>
      Maidaan Group is a pioneer in real estate and construction, offering a
      seamless blend of innovative solutions. With expertise in Event as a
      Service (EAAS) and Marketing as a Service (MAAS), we simplify property
      ownership and redefine industry standards. Through our construction
      services, we bring visions to life by crafting modern, sustainable, and
      high-quality structures that reflect our clients’ unique needs and aspirations.
    </>
  ),
  about_img1: "/assets/img/about/tp-bs-img.jpg",
  about_img2: "/assets/img/about/tp-bs-img-sm-top.jpg",
  about_img3: "/assets/img/about/tp-bs-circle.png",
};

const { title, des, about_img1, about_img2, about_img3, sub_title } =
  about_content;

// features data
const features = [
  { title: "Expertise in Event as a Service (EAAS) and Marketing as a Service (MAAS)" },
  { title: "Innovative and sustainable construction solutions" },
  { title: "Simplifying real estate transactions through advanced technology" },
];

const AboutArea = () => {
  return (
    <>
      <div className="tp-bs-about pt-160 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-12 wow tpfadeUp">
              <div
                className="tp-bs-imgs p-relative "
                data-tilt=""
                data-tilt-perspective="2000"
              >
                <div
                  className="tp-bs-img text-center text-xl-start ml-100"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <img src={about_img1} alt="About Maidaan Group" />
                </div>
                <div
                  className="tp-bs-sm-top"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <img src={about_img2} alt="Our Services" />
                </div>
                <div className="tp-bs-sm-button">
                  <img src="/assets/img/about/tp-bs-img-sm-button.jpg" alt="Innovative Solutions" />
                </div>
                <div className="tp-bs-bg-circle">
                  <img src={about_img3} alt="Our Vision" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 wow tpfadeUp" data-wow-delay=".4s">
              <div className="tp-bs-about-info ml-40">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span className="tp-section__subtitle white-bg mb-15">
                      <i className="before-border"></i>
                      {sub_title}{" "}
                    </span>
                    <h2 className="tp-section__title mb-30"> {title}</h2>
                    <p>{des}</p>
                  </div>
                </div>
                <div className="tp-bs-about-fea pb-25 mb-40">
                  <ul>
                    {features.map((item, i) => (
                      <li key={i}>
                        <i className="fal fa-check"></i>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="tp-bs-indo-btns d-flex flex-wrap align-items-center">
                  <div className="tp-bs-link-btn mr-30 mb-30">
                    <Link
                      href="/contact"
                      className="tp-common-btn tp-btn-hover alt-color"
                    >
                      get in touch
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                      <b></b>
                    </Link>
                  </div>
                  <div className="tp-bs-contact-btn d-flex align-items-center mb-30">
                    <span>
                      <i className="fas fa-phone"></i>
                    </span>
                    <b>
                      <span>Phone number</span> <br />
                      <a href="tel:78568065900">785 680 659 00</a>
                    </b>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
