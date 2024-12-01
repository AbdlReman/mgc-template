import Link from "next/link";
import React,{useState, useEffect} from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import {   Autoplay, EffectFade, Navigation } from 'swiper';



const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/slider/it-slider-2.jpg",
    title: "Maidaan Properties",
    des: <>Experience seamless real estate solutions with <br /> transparency and expertise.</>,
    btn_text: "Get support",
    slder_quite: <><b> “ Simplifying real estate, empowering <br /> your investments ” </b> <span> Ali Raza <i>- CEO, Maidaan Properties</i> </span></>
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/it-slider-1.jpg",
    title: "Maidaan Properties",
    des: <>Connecting overseas Pakistanis to <br /> prime real estate opportunities.</>,
    btn_text: "Contact us",
    slder_quite: <><b> “ Bridging communities through <br /> innovative property solutions ” </b> <span> Fatima Rizvi <i>- Client, Property Expo</i> </span></>
  },
  {
    id: 3,
    bg_img: "/assets/img/slider/it-slider-3.jpg",
    title: "Maidaan Properties",
    des: <>Transforming real estate with a focus on <br /> community and excellence.</>,
    btn_text: "Get in Touch",
    slder_quite: <><b> “ A trusted name in property <br /> development and management ” </b> <span> John Malik <i>- Business Partner</i> </span></>
  },
];



const Slider = () => {

    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);

    
  return (
    <>
      <div className="tp-it-slider-area">
        <Swiper
          loop={isLoop}
          modules={[Navigation, Autoplay, EffectFade]}
          autoplay={{
            delay: 5000,
          }}
          effect="fade"
          className="swiper-container ptg-slider-active"
        >
          {slider_data.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="tp-it-slider it-slider-height fix"
                style={{
                  backgroundImage: `url(${item.bg_img})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="it-slider__content">
                        <h2
                          className="it-slider__content-title mb-20"
                          data-animation="tpfadeUp"
                          data-delay=".5s"
                        >
                          {item.title}
                        </h2>
                        <p
                          className="mb-50"
                          data-animation="tpfadeUp"
                          data-delay=".6s"
                        >
                          {item.des}
                        </p>
                        <Link
                          href="/contact"
                          className="tp-slider-btn orange-chat-color tp-btn-hover alt-color alt-bg-orange"
                          data-animation="tpfadeUp"
                          data-delay=".9s"
                        >
                          <span className="mr-10">
                            <i className="fas fa-comments"></i>
                            <i className="fas fa-comments"></i>
                          </span>
                          {item.btn_text}
                          <b></b>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                      <div className="it-slider-img p-relative">
                        <img
                          src="/assets/img/slider/it-slider-img.png"
                          alt="image-here"
                        />
                        <div className="it-slder-quite">{item.slder_quite}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
