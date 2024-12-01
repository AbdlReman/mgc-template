import portfolio_data from '@/src/data/portfolio-data';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




const setting = {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    centeredSlides: true,
    centeredSlidesBounds: true,
    pagination: {
        el: ".da-project-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".law-pf-button-next",
        prevEl: ".law-pf-button-prev",
    },
    breakpoints: {
        '1400': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 2.5,
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
const PortfolioArea = () => {


    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);

    


    return (
        <>
            <div className="ha-portfolio ha-portfolio-slider pt-120 fix">
            <Swiper 
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container ha-portfolio-slider-active">

            {
                portfolio_data.slice(0,7).map((item, i)  => 
                <SwiperSlide key={i} className="ha-portfolio__item p-relative wow tpfadeUp" data-wow-delay={item.delay}>
                        <div className="ha-portfolio__item-img w-img p-relative">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="ha-portfolio__item-content">
                            <span>{item.name}</span>
                            <h3 className="ha-portfolio__item-content-title"><Link href="/portfolio-details"> 
                            {item.title}
                            </Link></h3>
                        </div>
                    </SwiperSlide>
                
                )
            }
                
            </Swiper>
        </div>
        </>
    );
};

export default PortfolioArea;

