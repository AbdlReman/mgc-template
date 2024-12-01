import SocialLinks from "@/src/common/social-links";
import React, { useState, useEffect } from "react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const slider_content = [
  {
    id: 1,
    bg_img: "/assets/img/slider/ptg-hero-1.jpg",
    title: "Gencio",
    category: "Photography",
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/ptg-hero-2.jpg",
    title: "Gencio",
    category: "Photography",
  },
  {
    id: 3,
    bg_img: "assets/img/slider/ptg-hero-3.jpg",
    title: "Gencio",
    category: "Photography",
  },
];


const HeroSlider = () => {
    
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  const hero_content = {
    btn: "Hire Us Now",
    email: "info@webmail.com",
    phone: "222 090 000 01",
  };
  const { btn, email, phone } = hero_content;
  return (
    <>
      <div className="tp-ptg-slider p-relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          className="swiper-container ptg-slider-active"
          effect="fade"
          modules={[EffectFade, Navigation, Pagination]}
          pagination={{
            el: ".ptg-sldider-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
            },
          }}
        >
          {slider_content.map((item, i) => (
            <SwiperSlide
              key={i}
              className="ptg-slider-item ptg-slider-height d-flex align-items-center p-relative"
              data-background="assets/img/slider/ptg-hero-1.jpg"
              style={{
                backgroundImage: `url(${item.bg_img})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-ptg-slider-content text-center p-relative">
                      <h3
                        className="tp-ptg-slider-title mb-45"
                        data-animation="tpfadeUp"
                        data-delay=".3s"
                      >
                        {item.title} <br />
                        <span>{item.category}</span>
                      </h3>
                      <a
                        href="#"
                        className="ptg-slider-btn"
                        data-animation="tpfadeUp"
                        data-delay=".5s"
                      >
                        <span className="circle mr-20">
                          <i className="fal fa-long-arrow-right"></i>
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                        Hire Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptg-slider-social">
                <b>Connect Here:</b>
                <span>  <a href="#"> <i className="fab fa-facebook-f"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-twitter"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-behance"></i> </a> </span>
                <span> <a href="#"> <i className="fab fa-youtube"></i> </a> </span>
              </div>
              <div className="ptg-contact-slider-info">
                <span>
                  <a href={`mailto:${email}`}></a>{email}</span>
                <span className="ptg-spt"> - </span>
                <span>
                  <a href={`te:${phone}`}></a>{phone}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="ptg-sldider-dot"></div>
      </div>
    </>
  );
};

export default HeroSlider;
