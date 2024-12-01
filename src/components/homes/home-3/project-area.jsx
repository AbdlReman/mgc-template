import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';

const project_data = [
  {
    id: 1,
    img: "/assets/img/project/tp-da-pt-1.jpg",
    name: "Company Case Study",
    title: "UX, Website Design",
  },
  {
    id: 2,
    img: "/assets/img/project/tp-da-pt-2.jpg",
    name: "Company Case Study",
    title: "UX, Website Design",
  },
  {
    id: 3,
    img: "/assets/img/project/tp-da-pt-3.jpg",
    name: "Company Case Study",
    title: "UX, Website Design",
  },
  {
    id: 4,
    img: "/assets/img/project/tp-da-pt-4.jpg",
    name: "Company Case Study",
    title: "UX, Website Design",
  },
  {
    id: 5,
    img: "/assets/img/project/tp-da-pt-5.jpg",
    name: "Company Case Study",
    title: "UX, Website Design",
  },
];

// slider setting
const setting = {
  // loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
      el: ".da-project-pagenation",
      clickable: true,
  },

  navigation: {
      nextEl: ".da-project-button-next",
      prevEl: ".da-project-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};


const ProjectArea = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="da-project-section pt-120 pb-120 fix">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__subtitle white-bg mb-15 shadow-none text-grey p-0 wow tpfadeUp"> 
                    Case Studies
                  </span>
                  <h2
                    className="tp-section__title mb-55 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Company Case <span>Study</span> 
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="da-project-navigation text-end p-relative pt-40">
                <div className="da-project-button-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="da-project-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="da-project-slider mb-60">
                <Swiper
                {...setting} 
                  loop={isLoop}
                  modules={[Navigation]}
                  className="swiper-container da-project-active"
                >
                  {project_data.map((item, i) => (
                    <SwiperSlide key={i} className="da-project-item wow tpfadeUp">
                        <img src={item.img} alt="slider-img" />
                        <div className="da-project-item__info">
                          <span> {item.title}</span>
                          <h3 className="da-project-item__title">
                            <Link href="/portfolio-4"> {item.name}</Link>
                          </h3>
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-12">
              <div className="da-pj-btn-wrapper">
                <Link
                  href="/portfolio-5"
                  className="tp-border-btn br-btn-bg-dark"
                >
                  More Works
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectArea;
