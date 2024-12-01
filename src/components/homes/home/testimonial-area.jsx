import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination} from "swiper";

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,

  pagination: {
    el: ".tesi-bs-pagination",
    clickable: true,
  },
};

const ts_slider = [
  {
    id: 1,
    img: "/assets/img/testimonial/testi-avata-1.png",
    name: "River Craft",
    title: "Founder, Grand Realty Co.",
    des: "“ Maidaan Group's innovative approach and unparalleled service have truly elevated our projects. Their dedication to excellence is unmatched. ”",
  },
  {
    id: 2,
    img: "/assets/img/testimonial/testi-avata-2.png",
    name: "Jayson Mahoney",
    title: "CEO, Elevate Homes",
    des: "“ Working with Maidaan Group was a game-changer. Their real estate expertise and marketing strategies transformed our business trajectory. ”",
  },
  {
    id: 3,
    img: "/assets/img/testimonial/testi-avata-3.png",
    name: "Andre Xiong",
    title: "Director, UrbanSpaces Inc.",
    des: "“ The team at Maidaan Group brings professionalism and innovation to every interaction. Their construction solutions are both sustainable and cutting-edge. ”",
  },
];

const TestimonialArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-bs-testimonial theme-bg mt-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-12">
              <div className="tp-bs-testi-left p-relative">
                <div className="tp-bs-testi-img">
                  <img src="/assets/img/testimonial/review-img.png" alt="" />
                </div>
                <div className="testi-circle-bg">
                  <img
                    src="/assets/img/testimonial/reviewer-bg-circle.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="tp-bs-testi-info white-bg wow tpfadeUp">
                <div className="section-title-wraper p-relative">
                  <div className="tp-section tp-bs-testimonial">
                    <span className="tp-section__subtitle white-bg mb-15">
                      <i className="before-border"></i>
                      Testimonials
                    </span>
                    <h2 className="tp-section__title mb-30">Users Feedback</h2>
                    <Swiper
                      {...setting}
                      loop={false}
                      modules={[Navigation , Pagination]}
                      className="tp-bs-testi-active swiper-container"
                    >
                      {ts_slider.map((item, i) => (
                          <SwiperSlide key={i}>
                              <span className="tp-testi-ratting d-inline-block mb-10">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                              </span>
                              <p className="bs-review">{item.des}</p>
                              <div className="tp-bs-testi-reviewer d-flex align-items-center">
                                <div className="tesi-reviewer-avata mr-15">
                                  <img src={item.img} alt="" />
                                </div>
                                <div className="tesi-reviewer-name">
                                  <h4 className="mb-5">{item.name}</h4>
                                  <span>{item.title}</span>
                                </div>
                              </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="tp-bs-testi-icon">
                      <img
                        src="/assets/img/testimonial/testi-icon-bg.png"
                        alt=""
                      />
                    </div>
                      <div className="tesi-bs-pagination"> </div>
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

export default TestimonialArea;
