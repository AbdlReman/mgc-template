import testimonial_data from "@/src/data/testimonial-data";

import React, { useState, useEffect } from "react";
import {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: false,
  navigation: {
    nextEl: ".ptg-testi-button-next",
    prevEl: ".ptg-testi-button-prev",
  },
  
}


const Testimonial = () => {

    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
        setIsLoop(true);
    }, []);



  return (
    <>
      <div className="ptg-testimonial-area dark-bg pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp"
                    data-wow-delay=".4a"
                  >
                    Testimonials
                  </span>
                  <h2
                    className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp"
                    data-wow-delay=".5s"
                  >
                    users <span> feedback</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="ptg-testi-navigation text-end p-relative mb-80 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="ptg-testi-button-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="ptg-testi-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <Swiper
          {...setting}
          loop={isLoop}
          modules={[Navigation, Pagination]} 
          breakpoints= {{
            '1200': {
              slidesPerView: 2,
            },
            '992': {
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
          }}         
          className="tp-ptg-testi-active swiper-container"
          >
          {testimonial_data.slice(4, 8).map((item, i)  =>
                <SwiperSlide
                key={i}
                className="ptg-testimonial swiper-slide wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="ptg-testimonial-box p-relative">
                  <div className="ptg-testimonial-box__ratting">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fal fa-star"></i>
                  </div>
                  <div className="ptg-testimonial-box__review">
                     {item.des}
                  </div>
                  <div className="ptg-testimonial-bg">
                    <span>
                      <i className="flaticon-bubble-chat-1"></i>
                    </span>
                  </div>
                </div>
                <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                  <div className="tesi-reviewer-avata mr-15">
                    <img
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="ptg-tesi-reviewer-name">
                    <h4 className="mb-5 vogue-text-color"> {item.name}</h4>
                    <span> {item.title}</span>
                  </div>
                </div>
              </SwiperSlide>
                
                )
            }


          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
