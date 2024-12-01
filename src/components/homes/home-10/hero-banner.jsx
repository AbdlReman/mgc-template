import React from 'react';


// hero are content here
const hero_content = {
    hero_img: "/assets/img/hero/seo-hero.png",
    title: <>We Bring <br /> You New <span>Customers</span> </>,
    service_btn: "Our Services",
    learn_btn: "Learn more",
}
const {hero_img, title, service_btn, learn_btn}  = hero_content





const HeroBanner = () => {
    return (
      <>
        <div className="seo-hero-area mt-20 theme-bg-9 pt-170">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="seo-hero-info text-center">
                  <div className="seo-hero__content">
                    <h2
                      className="seo-hero__content-title text-capitalize mb-30 wow tpfadeUp"
                      data-wow-delay=".3s"
                    >
                      {title}
                    </h2>
                    <div className="seo-hero-btns mb-40">
                      <span className="seo-hero-btn-wapper mr-30 ">
                        <a
                          href="tel:78568065900"
                          className="tp-seo-btn wow tpfadeUp"
                          data-wow-delay=".2s"
                        >
                          {service_btn}
                          <span className="ml-10">
                            <i className="fal fa-long-arrow-right"></i>
                            <i className="fal fa-long-arrow-right"></i>
                          </span>
                        </a>
                      </span>
                      <span
                        className="seo-hero-btn-wapper wow tpfadeUp"
                        data-wow-delay=".3s"
                      >
                        <a
                          href="tel:78568065900"
                          className="tp-white-rounder-btn"
                        >
                          {learn_btn}
                        </a>
                      </span>
                    </div>
                    <div className="seo-hero-img wow tpfadeUp">
                      <img src={hero_img} alt="" />
                    </div>
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