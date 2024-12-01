import React from "react";

const hero_content = {
  bg_img: "/assets/img/hero/dot-pattern-full.jpg",
  title:   <> Grand Prairie  <br /> Gardens </>,
  img: "/assets/img/hero/app-hero-pic.png",
};
const { bg_img, title, img } = hero_content;
const HeroBanner = () => {
  return (
    <>
      <div
        className="tp-app-hero pt-160"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-hero-section text-center">
                <h3
                  className="app-hero__title mb-30 text-mirage wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  {title}
                </h3>
                <div className="tp-app-hero-btns d-flex justify-content-center mb-10">
                  <div
                    className="palystole-btn-wrapper d-inline-block mr-30 wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <a href="/contact" className="playstole-btn">
                      {/* <span>
                        <i className="fab fa-google-play"></i>
                        <i className="fab fa-google-play"></i>
                      </span> */}
                      Contact Us
                    
                    </a>
                  </div>
                  {/* <div
                    className="applestole-btn-wrapper d-inline-block wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <a href="#" className="applestole-btn">
                      <span>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-apple"></i>
                      </span>
                      Download On
                      <b>App Store</b>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="app-hero-images">
                <div
                  className="app-hero-img-1 wow tpfadeUp"
                  data-wow-duration="1.5s"
                >
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
