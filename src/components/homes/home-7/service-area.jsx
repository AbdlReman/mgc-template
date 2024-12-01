import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const service_data = [
    {
        id: 1,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-1.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: "",
    },
    {
        id: 2,
        title: "PERSONAL INJURY",
        img: "/assets/img/services/icon/law-sv-2.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".3s",
    },
    {
        id: 3,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-3.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    {
        id: 4,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-4.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    {
        id: 5,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-1.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    {
        id: 6,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-2.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    {
        id: 7,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-3.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    {
        id: 8,
        title: "ESTATE PLANNING",
        img: "/assets/img/services/icon/law-sv-4.png",
        item_list : [
            "Domestic violence",
            "Drug crimes",
            "DUI defense",
            "Expungements",
            "Federal appeals",
        ],
        delay: ".4s",
    },
    
]



const setting = {
    slidesPerView: 4,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".da-project-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".law-sv-button-next",
        prevEl: ".law-sv-button-prev",
    },
    breakpoints: {
        '1200': {
            slidesPerView: 3,
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
const ServiceArea = () => {


    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);

    

    return (
        <>
            <div className="law-service-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="section-title-wraper mb-60">
                            <div className="tp-section">
                                <h2 className="tp-section__title wine-text-color mb-20 text-uppercase wow tpfadeUp" data-wow-delay=".4s">Practice Area</h2>
                                <p className="text-grey wow tpfadeUp">A lawyer's content marketing strategy should include adding & <br />
                                    updating your most important.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 wow tpfadeUp" data-wow-delay=".4s">
                        <div className="law-service-navigation d-flex justify-content-lg-end pb-40">
                            <div className="law-sv-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="law-sv-button-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <Swiper 
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="swiper-container law-service-slider">

                {
                    service_data.map((item, i) => 
                    <SwiperSlide key={i} className="wow tpfadeUp" data-wow-delay={item.delay}>
                            <div className="law-sv-item">
                                <div className="law-sv-item-head d-flex align-items-center mb-25">
                                    <div className="law-sv-item-icon mr-20">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="law-sv-item-title">{item.title}</h3>
                                    </div>
                                </div>
                                <div className="law-sv-item-list">
                                    <ul>
                                        {
                                            item.item_list.map((list, i)  => 
                                            <li key={i}>
                                                {list} <span><i className="fal fa-check"></i></span>
                                                
                                            </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    
                    )
                }



{/* 
                    <div className="swiper-wrapper">

                        <div className="swiper-slide wow tpfadeUp">
                            <div className="law-sv-item">
                                <div className="law-sv-item-head d-flex align-items-center mb-25">
                                    <div className="law-sv-item-icon mr-20">
                                        <img src="/assets/img/services/icon/law-sv-1.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="law-sv-item-title">ESTATE PLANNING</h3>
                                    </div>
                                </div>
                                <div className="law-sv-item-list">
                                    <ul>
                                        <li>Domestic violence <span><i className="fal fa-check"></i></span></li>
                                        <li>Drug crimes <span><i className="fal fa-check"></i></span></li>
                                        <li>DUI defense <span><i className="fal fa-check"></i></span></li>
                                        <li>Expungements <span><i className="fal fa-check"></i></span></li>
                                        <li>Federal appeals <span><i className="fal fa-check"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide wow tpfadeUp" data-wow-delay=".3s">
                            <div className="law-sv-item">
                                <div className="law-sv-item-head d-flex align-items-center mb-25">
                                    <div className="law-sv-item-icon mr-20">
                                        <img src="/assets/img/services/icon/law-sv-2.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="law-sv-item-title">PERSONAL INJURY</h3>
                                    </div>
                                </div>
                                <div className="law-sv-item-list">
                                    <ul>
                                        <li>Warrants <span><i className="fal fa-check"></i></span></li>
                                        <li>Expungements <span><i className="fal fa-check"></i></span></li>
                                        <li>Violent crimes <span><i className="fal fa-check"></i></span></li>
                                        <li>Sex crimes <span><i className="fal fa-check"></i></span></li>
                                        <li>Theft crimes <span><i className="fal fa-check"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide wow tpfadeUp" data-wow-delay=".4s">
                            <div className="law-sv-item">
                                <div className="law-sv-item-head d-flex align-items-center mb-25">
                                    <div className="law-sv-item-icon mr-20">
                                        <img src="/assets/img/services/icon/law-sv-3.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="law-sv-item-title">ESTATE PLANNING</h3>
                                    </div>
                                </div>
                                <div className="law-sv-item-list">
                                    <ul>
                                        <li>Domestic violence <span><i className="fal fa-check"></i></span></li>
                                        <li>Drug crimes <span><i className="fal fa-check"></i></span></li>
                                        <li>DUI defense <span><i className="fal fa-check"></i></span></li>
                                        <li>Expungements <span><i className="fal fa-check"></i></span></li>
                                        <li>Federal appeals <span><i className="fal fa-check"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide wow tpfadeUp" data-wow-delay=".4s">
                            <div className="law-sv-item">
                                <div className="law-sv-item-head d-flex align-items-center mb-25">
                                    <div className="law-sv-item-icon mr-20">
                                        <img src="/assets/img/services/icon/law-sv-4.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="law-sv-item-title">ESTATE PLANNING</h3>
                                    </div>
                                </div>
                                <div className="law-sv-item-list">
                                    <ul>
                                        <li>Domestic violence <span><i className="fal fa-check"></i></span></li>
                                        <li>Drug crimes <span><i className="fal fa-check"></i></span></li>
                                        <li>DUI defense <span><i className="fal fa-check"></i></span></li>
                                        <li>Expungements <span><i className="fal fa-check"></i></span></li>
                                        <li>Federal appeals <span><i className="fal fa-check"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div> */}




                </Swiper>
            </div>
        </div>
        </>
    );
};

export default ServiceArea;