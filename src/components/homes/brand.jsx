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



const Brand = ({ style_2 ,style_7, style_faq}) => {

  
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className={`tp-it-brand ${style_2 && "vogue-bg"}  ${style_7 && "red-bg"} ${style_faq && "black-bg"}  pt-100 pb-100`} 
      style={{backgroundImage: `url(${style_7 ? "/assets/img/brand/red-dot_map.png" : null})`}}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-breand-title text-center">
                <span>
                <b>Our Mission</b><br/>
At Maidaan Properties, our mission is to streamline the real estate process, making it accessible, transparent, and efficient for all. We offer comprehensive services tailored to our clients' diverse needs, delivering innovative solutions that elevate every step of the buying and selling experience.
<br/>
<b>Our Vision</b><br/>
We envision a real estate landscape where transparency, efficiency, and creativity converge to create an integrated and rewarding property experience for everyone involved.
                </span>
              </div>
              {/* <div className="tp-bs-brand-slider">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
