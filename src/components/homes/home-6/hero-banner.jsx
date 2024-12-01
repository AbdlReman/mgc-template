import React from 'react';
import { Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const hero_slider = [
    {
        id: 1,
        text: "Hilixio Dowson",
        icon: "-"
    },
    {
        id: 2,
        text: "Hilixio Dowson",
        icon: "-"
    },
    {
        id: 3,
        text: "Hilixio Dowson",
        icon: "-"
    },
    {
        id: 4,
        text: "Hilixio Dowson",
        icon: "-"
    },
]

const setting = {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 30000,
    slidesPerView: 1,
    
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
}



const HeroBanner = () => {
    return (
        <>
            <div className="mp-hero-area theme-bg-4 pt-60 p-relative fix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mp-hero-img text-center">
                            <img src="/assets/img/hero/mp-hero.png" alt="theme-pure" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mp-hero-left d-inline-flex align-items-center black-bg">
                <div className="mp-hero-left__info mr-80">
                    <span>Located <br />
                        In The <br />
                        New York</span>
                </div>
                <div className="mp-hero-left__icon">
                    <span><i className="flaticon-globe"></i></span>
                </div>
            </div>
            <div className="mp-hero-right">
                <h3 className="mb-hero-title white-border wow tpfadeUp">Freelance</h3>
                <h3 className="mb-hero-title wow tpfadeUp" data-wow-delay=".3s">Designer & Developer</h3>
            </div>

            <div className="mp-marque-slider">
                <Swiper 
                {...setting}
                modules={[ Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                className="swiper-container swiper--top pt-80 pb-120">

                {
                    hero_slider.map((item, i)  => 
                    <SwiperSlide key={i} className="swiper-slide">
                            <p>{item.text} <span>{item.icon} </span></p>
                    </SwiperSlide>
                    )
                }
                    {/* <div className="swiper-wrapper"> */}

                        {/* <div className="swiper-slide">
                            <p>Hilixio Dowson <span> - </span></p>
                        </div>

                        <div className="swiper-slide">
                            <p>Hilixio Dowson <span>-</span></p>
                        </div>
                        
                        <div className="swiper-slide">
                            <p>Hilixio Dowson <span>-</span></p>
                        </div>

                        <div className="swiper-slide">
                            <p>Hilixio Dowson <span>-</span></p>
                        </div> */}

                    {/* </div> */}



                </Swiper>
            </div>
        </div>
        </>
    );
};

export default HeroBanner;