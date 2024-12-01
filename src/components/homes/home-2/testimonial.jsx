import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data_home_two = [
  {
    id: 1,
    img: "/assets/img/testimonial/testi-avata-1.png",
    name: "Emily Carter",
    title: "CEO, InnovateTech",
    des: (
      <>
        “Maidaan's exceptional service and attention to detail have made my real estate journey seamless. Highly recommended!”
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/testimonial/testi-avata-3.png",
    name: "Michael Anderson",
    title: "Entrepreneur",
    des: (
      <>
        “Their expertise in connecting clients with premium properties is unmatched. The process was transparent and efficient.”
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/img/testimonial/testi-avata-4.png",
    name: "Sophia Nguyen",
    title: "Marketing Specialist",
    des: (
      <>
        “I appreciated the personal touch and excellent communication throughout. Their properties truly reflect modern living.”
      </>
    ),
  },
  
  {
    id: 6,
    img: "/assets/img/testimonial/testi-avata-2",
    name: "James Wilson",
    title: "Architect",
    des: (
      <>
        “Their focus on combining aesthetics with functionality is remarkable. Maidaan is redefining real estate excellence.”
      </>
    ),
  },
];





const setting = {
  slidesPerView: 3,
  spaceBetween: 30, 
  navigation: {
    nextEl: ".it-testi-button-next",
    prevEl: ".it-testi-button-prev",
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 1,
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
    
<div className="tp-it-testimonial fix pb-120">
         <div className="it-testi-wraper theme-bg-2 pt-120 pb-125">
            <div className="container">
               <div className="row ">
                  <div className="col-12 col-md-8">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <span className="tp-section__subtitle vogue-text-color white-bg mb-15"><i
                                 className="before-border"></i>
                              Testimonials</span>
                           <h2 className="tp-section__title vogue-text-color mb-70">Users Feedback</h2>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-none d-md-block">
                     <div className="it-testi-navigation text-end p-relative pt-40">
                        <div className="it-testi-button-prev">
                           <i className="fal fa-long-arrow-left"></i>
                           
                        </div>
                        <div className="it-testi-button-next">
                           <i className="fal fa-long-arrow-right"></i>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <Swiper 
            {...setting}
            loop={isLoop}
            modules={[Navigation]}            
            className="tp-it-testi-active swiper-container">

              {testimonial_data_home_two.map((item, i )  => 
                <SwiperSlide key={i} className="it-testimonial swiper-slide" >
                     <div className="it-testimonial-box p-relative">
                        <div className="it-testimonial-box__ratting">
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fal fa-star"></i>
                        </div>
                        <div className="it-testimonial-box__review" style={{color:"#757c80"}}>
                           {item.des}
                        </div>
                        <div className="it-testimonial-bg">
                           <img  src="/assets/img/testimonial/testi-icon-bg.png" alt="" />
                        </div>
                     </div>
                     <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                        <div className="tesi-reviewer-avata mr-15">
                           <img src={item.img} alt="them-pure" />
                        </div>
                        <div className="it-tesi-reviewer-name">
                           <h4 className="mb-5 vogue-text-color">{item.name}</h4>
                           <span>{item.title}</span>
                        </div>
                     </div>
                  </SwiperSlide>                
                
                )
              }
            </Swiper>
         </div>

      </div>

    </>
  );
};

export default Testimonial;
