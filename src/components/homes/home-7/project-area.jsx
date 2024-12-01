import project_data from '@/src/data/project-data';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// pagination: {
//     el: ".da-project-pagenation",
//     clickable: true,
// },


const setting = {
    loop: true,
    slidesPerView: "3",
    // centeredSlides: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".da-project-pagenation",
        // dynamicBullets: true,
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".law-pf-button-next",
        prevEl: ".law-pf-button-prev",
    },
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
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },

}


const ProjectArea = () => {
    
    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);



    return (
        <>
          <div className="law-project-area fix pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="section-title-wraper mb-60">
                            <div className="tp-section">
                                <h2 className="tp-section__title wine-text-color mb-10 text-uppercase wow tpfadeUp" data-wow-delay=".3s">Practice Area</h2>
                                <p className="text-grey wow tpfadeUp" data-wow-delay=".4s">A lawyer's content marketing strategy should include adding & <br />
                                    updating your most important.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="law-service-navigation d-flex justify-content-lg-end mb-70 wow tpfadeUp" data-wow-delay=".5s">
                            <div className="law-pf-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="law-pf-button-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="law-porffolio-slider">
                    <Swiper 
                    {...setting}
                    loop={isLoop}
                    modules={[Navigation]}
                    className="swiper-container law-porffolio-active">

                        {
                            project_data.map((item, i) =>
                            <SwiperSlide key={i} className="wow tpfadeUp" data-wow-delay=".6s">
                            <div className="tp-porffolio-wrapper aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="2500">
                                <div className="it-portfolio-item">
                                    <div className="it-portfolio-item__thumb w-img p-relative overlay-none">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="it-portfolio-item__content it-pt-border">
                                        <div className="it-portfolio-item__meta red-text">
                                            <a href="#">{item.sub_title}</a>
                                        </div>
                                        <h3 className="it-portfolio-item__title wine-text-color">
                                            <Link href="/blog-list">{item.title}</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="tp-pt-full-btn">
                                    <a href="#" className="it-portfolio-item__btn wine-text-color"> Case Details
                                        <span className="mt-5">
                                            <i className="fal fa-long-arrow-right"></i>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                            
                            )
                        }
                           


                    </Swiper>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectArea;