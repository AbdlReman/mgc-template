import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// brands data 
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
    {
        id: 7,
        img: "/assets/img/brand/white-brand-1.png",
      },
      {
        id: 8,
        img: "/assets/img/brand/white-brand-2.png",
      },
      {
        id: 9,
        img: "/assets/img/brand/white-brand-3.png",
      },
      {
        id: 10,
        img: "/assets/img/brand/white-brand-4.png",
      },
      {
        id: 11,
        img: "/assets/img/brand/white-brand-5.png",
      },
      {
        id: 12,
        img: "/assets/img/brand/white-brand-2.png",
      },
  ];

  // brand slider setting 
const setting = {
    slidesPerView: 4,
    spaceBetween: 30,
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
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}




const Brand = () => {

    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);

    return (
        <>
           <div className="tp-bs-brand tp-seo-brand pt-60 p-relative wow tpfadeUp" 
            style={{backgroundImage: `url(/assets/img/brand/seo-brand-bg.jpg)`}} >
            <div className="container">
                <div className="tp-seo-brand-wrapper tp-border-bottom pb-60">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="tp-bs-brand mr-60">
                                <h3 className="tp-bs-brand__title"> 
                                    Trusted by <span>Companies</span> all over the world
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tp-bs-brand-slider">
                                <Swiper 
                                {...setting}
                                loop={isLoop}
                                modules={[Navigation]}
                                className="brand-slider-active swiper-container">
                                { brands_data.map((item, i)  => 
                                    <SwiperSlide key={i} className="tp-seo-brand-item swiper-slide">
                                        <img src={item.img} alt="theme-pure" />
                                    </SwiperSlide>
                                    )
                                }               
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Brand;