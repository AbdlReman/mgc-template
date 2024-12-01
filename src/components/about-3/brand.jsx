import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// brands_data
const brands_data = [
  {
    id: 1,
    img: "/assets/img/brand/white-brand-1.png",
  },
  {
    id: 2,
    img: "/assets/img/brand/white-brand-2.png",
  },
  {
    id: 3,
    img: "/assets/img/brand/white-brand-3.png",
  },
  {
    id: 4,
    img: "/assets/img/brand/white-brand-4.png",
  },
  {
    id: 5,
    img: "/assets/img/brand/white-brand-5.png",
  },
  {
    id: 6,
    img: "/assets/img/brand/white-brand-5.png",
  },
  {
    id: 7,
    img: "/assets/img/brand/white-brand-1.png",
  },
  {
    id: 8,
    img: "/assets/img/brand/white-brand-2.png",
  },
  {
    id: 9,
    img: "/assets/img/brand/white-brand-3.png",
  },
  {
    id: 10,
    img: "/assets/img/brand/white-brand-4.png",
  },
  {
    id: 11,
    img: "/assets/img/brand/white-brand-5.png",
  },
  {
    id: 12,
    img: "/assets/img/brand/white-brand-5.png",
  },
];


const setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
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
      <div className="tp-app-brand pt-120 pb-120 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-breand-title text-center mb-60">
                <span className="text-white">
                  The best teams around the world can back us.
                </span>
              </div>
              <div className="tp-bs-brand-slider ">
                <Swiper
                  {...setting}
                  loop={isLoop}
                  className="app-brand-slider-active ab-brand-overlay swiper-container"
                >
                  {brands_data.map((item, i) => (
                    <SwiperSlide key={i} className="tp-app-brand-item">
                      <img src={item.img} alt="theme-pure" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
