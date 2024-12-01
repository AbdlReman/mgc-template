import React, { useState, useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const gallery_one = [
  "/assets/img/gallery/mp-gl-1.jpg",
  "/assets/img/gallery/mp-gl-2.jpg",
  "/assets/img/gallery/mp-gl-3.jpg",
  "/assets/img/gallery/mp-gl-4.jpg",
  "/assets/img/gallery/mp-gl-5.jpg",
  "/assets/img/gallery/mp-gl-6.jpg",
];

const gallery_two = [
  "/assets/img/gallery/mp-gl-7.jpg",
  "/assets/img/gallery/mp-gl-8.jpg",
  "/assets/img/gallery/mp-gl-9.jpg",
  "/assets/img/gallery/mp-gl-10.jpg",
  "/assets/img/gallery/mp-gl-11.jpg",
  "/assets/img/gallery/mp-gl-12.jpg",
];

const setting_1 = {
  spaceBetween: 30,
  speed: 6000,
  slidesPerView: "auto",
  allowTouchMove: false,
};

const setting_2 = {
  spaceBetween: 30,
  speed: 6000,
  slidesPerView: "auto",
  allowTouchMove: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
};

const GallerySlider = () => {
  
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-mp-sw-slider">


        <div className="container-fluid gx-0">

          <Swiper
            {...setting_1}
            loop={isLoop}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            modules={[Autoplay]}
            className="swiper-container tp-gl-silder"
          >
            {gallery_one.map((item, i) => (
              <SwiperSlide key={i} className="tp-mp-slider-item">
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>



        <div className="container-fluid">

          <Swiper
            {...setting_2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            
            modules={[Autoplay]}
            className="swiper-container tp-gl-silder-2"
          >
            {gallery_two.map((item, i) => (
              <SwiperSlide key={i} className="tp-mp-slider-item">
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>



      </div>
    </>
  );
};

export default GallerySlider;
