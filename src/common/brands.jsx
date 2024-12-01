import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
    img: "/assets/img/brand/white-brand-2.png",
  },
];

// brands setting
const setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  // loop: true,
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

const Brands = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
    
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
   
    </>
  );
};

export default Brands;

