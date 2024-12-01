import testimonial_data from '@/src/data/testimonial-data';
import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



const testimonial_content  = {
    big_title: "Feedback",
    title:"Testimonials",
    sub_title: "Users Feedback",
}

const {big_title, title, sub_title}  = testimonial_content



const setting = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".ptg-testi-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".ca-tasti-button-next",
        prevEl: ".ca-tasti-button-prev",
    },
    breakpoints: {
        '1200': {
            slidesPerView: 2,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

const Testimonial = () => {


    
    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);



    return (
        <>
            <div className="ca-testi-area theme-bg-7 pt-120 pb-120 wow tpfadeUp">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="section-title-wraper">
                            <div className="tp-section">
                                <span className="tp-section__bigtitle">{big_title}</span>
                                <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">{title}</span>
                                <h2 className="tp-section__title mb-40">{sub_title} </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="da-project-navigation text-end p-relative pt-40">
                            <div className="ca-tasti-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="ca-tasti-button-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper 
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="ca-testi-active swiper-container">

{
    testimonial_data.slice(7, 10).map((item, i) =>
    <SwiperSlide key={i} className="it-testimonial" data-aos="fade-up" data-aos-duration="1500">
                            <div className="it-testimonial-box p-relative">
                                <div className="it-testimonial-box__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </div>
                                <div className="it-testimonial-box__review">
                                {item.des}
                                </div>
                                <div className="it-testimonial-bg">
                                    <img src="/assets/img/testimonial/testi-icon-bg.png" alt="" />
                                </div>
                            </div>
                            <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                <div className="tesi-reviewer-avata mr-15">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="it-tesi-reviewer-name">
                                    <h4 className="mb-5 vogue-text-color">{item.name}</h4>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </SwiperSlide>
    
    )
}

                  
{/*                   
                    <div className="swiper-wrapper">



                        <div className="it-testimonial swiper-slide" data-aos="fade-up" data-aos-duration="1000">
                            <div className="it-testimonial-box p-relative">
                                <div className="it-testimonial-box__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </div>
                                <div className="it-testimonial-box__review">
                                    “ Our award-winning US-based experts are
                                    available to help when you get stuck anytime
                                    day or night here is ready. ”
                                </div>
                                <div className="it-testimonial-bg">
                                    <img src="/assets/img/testimonial/testi-icon-bg.png" alt="" />
                                </div>
                            </div>
                            <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                <div className="tesi-reviewer-avata mr-15">
                                    <img src="/assets/img/testimonial/testi-avata-1.png" alt="" />
                                </div>
                                <div className="it-tesi-reviewer-name">
                                    <h4 className="mb-5 vogue-text-color">Shuvo Hoq</h4>
                                    <span>Founder, Romdon Co.</span>
                                </div>
                            </div>
                        </div>


                        <div className="it-testimonial swiper-slide" data-aos="fade-up" data-aos-duration="1500">
                            <div className="it-testimonial-box p-relative">
                                <div className="it-testimonial-box__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </div>
                                <div className="it-testimonial-box__review">
                                    “ Our award-winning US-based experts are
                                    available to help when you get stuck anytime
                                    day or night here is ready. ”
                                </div>
                                <div className="it-testimonial-bg">
                                    <img src="/assets/img/testimonial/testi-icon-bg.png" alt="" />
                                </div>
                            </div>
                            <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                <div className="tesi-reviewer-avata mr-15">
                                    <img src="/assets/img/testimonial/testi-avata-2.png" alt="" />
                                </div>
                                <div className="it-tesi-reviewer-name">
                                    <h4 className="mb-5 vogue-text-color">Salim Rana</h4>
                                    <span>Founder, Romdon Co.</span>
                                </div>
                            </div>
                        </div>


                        <div className="it-testimonial swiper-slide" data-aos="fade-up" data-aos-duration="2000">
                            <div className="it-testimonial-box p-relative">
                                <div className="it-testimonial-box__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </div>
                                <div className="it-testimonial-box__review">
                                    “ Our award-winning US-based experts are
                                    available to help when you get stuck anytime
                                    day or night here is ready. ”
                                </div>
                                <div className="it-testimonial-bg">
                                    <img src="/assets/img/testimonial/testi-icon-bg.png" alt="" />
                                </div>
                            </div>
                            <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                <div className="tesi-reviewer-avata mr-15">
                                    <img src="/assets/img/testimonial/testi-avata-3.png" alt="" />
                                </div>
                                <div className="it-tesi-reviewer-name">
                                    <h4 className="mb-5 vogue-text-color">Tushar Biswas</h4>
                                    <span>Founder, Romdon Co.</span>
                                </div>
                            </div>
                        </div>


                    </div>
 */}



                </Swiper>
            </div>
        </div>
        </>
    );
};

export default Testimonial;