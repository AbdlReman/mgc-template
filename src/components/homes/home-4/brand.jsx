import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const brands_data = [
  {
    id: 1,
    img: "/assets/img/brand/app-brand-1.jpg",
  },
  {
    id: 2,
    img: "/assets/img/brand/app-brand-5.jpg",
  },
  {
    id: 3,
    img: "/assets/img/brand/app-brand-3.jpg",
  },
  {
    id: 4,
    img: "/assets/img/brand/app-brand-4.jpg",
  },
  {
    id: 5,
    img: "/assets/img/brand/app-brand-5.jpg",
  },
  {
    id: 6,
    img: "/assets/img/brand/app-brand-3.jpg",
  },
  {
    id: 7,
    img: "/assets/img/brand/app-brand-4.jpg",
  },
  {
    id: 8,
    img: "/assets/img/brand/app-brand-3.jpg",
  },{
    id: 9,
    img: "/assets/img/brand/app-brand-1.jpg",
  },
  {
    id: 10,
    img: "/assets/img/brand/app-brand-5.jpg",
  },
];

// brands setting
const setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
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
      <div className="tp-app-brand pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-breand-title text-center mb-60">
                <span>The best teams around the world can back us.</span>
              </div>
              <div className="tp-bs-brand-slider ">
                <Swiper
                  {...setting}
                  loop={isLoop}
                  modules={[Navigation]}
                  className="it-brand-slider-active swiper-container"
                >
                  {brands_data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="tp-it-brand-item">
                        <img src={item.img} alt="" />
                      </div>
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
