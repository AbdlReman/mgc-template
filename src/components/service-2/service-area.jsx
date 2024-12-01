import service_data from '@/src/data/service-data';
import React from 'react';


const service_content = {
    sircle_img: "/assets/img/services/icon/service-page-cirlce-logo.png",
    avatas_img: "/assets/img/services/service-avatas.png",
    title: "Here are some of the rewards from putting our customers first."
}
const {sircle_img, avatas_img, title}  = service_content
const ServiceArea = () => {
    return (
        <>
            <div className="tp-bs-service pt-120 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="sv-cicle-logo-wraper text-center mb-25 wow tpfadeUp" data-wow-delay=".2s">
                        <img src={sircle_img} alt="them-pure" />
                  </div>
               </div>
            </div>
            <div className="tp-bs-service pb-55 tp-border-bottom pt-35">
               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
                    {service_data.slice(17, 22).map((item, i) =>
                        <div key={i} className="col">
                     <div className="tp-bs-service-box text-center pt-40 pb-40 mb-25 wow tpfadeIn" data-wow-delay=".2s">
                        <div className="tp-bs-sv-icon mb-25">
                           <img src={item.img} alt="them-pure" />
                        </div>
                        <h3 className="tp-bs-sv-title">
                           <a href="#"> {item.title}</a>
                        </h3>
                     </div>
                  </div>
                        )
                    }
               </div>
            </div>

            <div className="tp-bs-service-review text-center pt-40 pb-40 wow tpfadeUp" data-wow-delay=".3s">
               <div className="tp-bs-sv-avata d-lg-inline-block pr-25">
                  <img src={avatas_img} alt="them-pure" />
               </div>
               <p className="d-inline-block pr-5">{title}</p>
               <a href="#">Make Request <span><i className="fal fa-long-arrow-right"></i></span></a>
            </div>
         </div>
      </div>
        </>
    );
};

export default ServiceArea;