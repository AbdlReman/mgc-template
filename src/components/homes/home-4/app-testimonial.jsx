import testimonial_data from "@/src/data/testimonial-data";
import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const setting = {
    slidesPerView: "auto",
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 2,
    pagination: {
        el: ".app-testi-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".app-testi-button-next",
        prevEl: ".app-testi-button-prev",
    },
    breakpoints: {

        '1200': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },


}

const app_content = {
bg_img : "/assets/img/testimonial/testi-pattren-app.png"
}

const {bg_img}  = app_content


const AppTestimonial = () => {
  
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div
        className="app-testimonial theme-bg-3 pt-120 pb-120 fix"
        style={{
            backgroundImage: `url(${bg_img})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <div className="section-title-wraper mb-70">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp">
                    <i className="far fa-circle"></i>
                    Our Pricing
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-30 text-mirage wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    Users Feedback
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-none d-md-block wow tpfadeUp"
              data-wow-delay=".3s"
            >
              <div className="app-testi-navigation d-flex justify-content-end mb-70">
                <div className="app-testi-button-prev mr-20">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="app-testi-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-relative wow tpfadeUp" data-wow-delay=".3s">
          <Swiper
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container app-testi-active"
          >
            {testimonial_data.slice(0,4).map((item, i) => (
              <SwiperSlide key={i}>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-md-3 col-12">
                        <div className="app-testi-avata p-relative">
                          <img src={item.img} alt="" />
                          <div className="app-testi-icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 col-12">
                        <div className="app-testi ml-40">
                          <span className="app-testi__ratting d-inline-block mb-10">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                          </span>
                          <p className="app-testi__review mb-40">{item.des}</p>
                          <div className="app-testi__meta">
                            <h3 className="app-testi__reviewer-name">
                              {item.name}
                            </h3>
                            {item.title_home_4}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppTestimonial;
