import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const brands_data = [
  {
    img: "/assets/img/brand/brand-1.png",
    tpfade: "tpfadeRight",
    delay: ".4s",
  },
  {
    img: "/assets/img/brand/brand-2.png",
    tpfade: "tpfadeRight",
    delay: "",
  },
  {
    img: "/assets/img/brand/brand-3.png",
    tpfade: "tpfadeRight",
    delay: "",
  },
  {
    img: "/assets/img/brand/brand-4.png",
    tpfade: "tpfadeLeft",
    delay: "",
  },
  {
    img: "/assets/img/brand/brand-1.png",
    tpfade: "tpfadeLeft",
    delay: "",
  },
  { img: "/assets/img/brand/brand-3.png", tpfade: "", delay: "" },
];

// brands slider setting
const setting = {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
};
const Brand = () => {
    
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);


  return (
    <>
      <div className="tp-bs-brand pt-60">
        <div className="container">
          <div className="tp-border-bottom pb-60">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="tp-bs-brand mr-60">
                  <h3 className="tp-bs-brand__title wow tpfadeRight">
                    Trusted by <span>Companies</span> all over the world
                  </h3>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tp-bs-brand-slider">
                  <Swiper
                    {...setting}
                    loop={isLoop}
                    modules={[Navigation]}
                    className="brand-slider-active swiper-container"
                  >
                    {brands_data.map((item, i) => (
                      <SwiperSlide key={i} className={`tp-bs-brand-item wow ${item?.tpfade}`}
                      data-wow-delay={item?.delay}>
                          <img src={item.img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

