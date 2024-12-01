import React from 'react';
import Tilt from "react-parallax-tilt";



const about_details_content = {
    img: "/assets/img/about/about-page-lg.jpg",
    title: "To make your digital experience brighter.",

    description: <>Being employee-owned keeps us focused on the unique needs of our users, and we wouldn't have it any other way. Our many security features
                    include Multi Factor Authentication, auto-enabled sFTP . </>,
    service_1: <>Fashion Photography <br />
                Wedding Photography <br />
                Commercial Shooting <br />
                Photo Studio</>,

    service_2: <>Geographic Photo Contest 2022 <br />
                <a href="#">Sony World Photography 2018</a> <br />
                Monovisions Photography 2017</>,

}

const {img, title, description, service_1, service_2}  = about_details_content



const AboutDetails = () => {
    return (
        <>
             <div className="about-page-details-3 pt-120 pb-60">
         <div className="container">
            <div className="row">
               <div className="col-12 wow tpfadeUp">
                  <div className="about-page-img-3 mb-60 w-img" data-tilt=""  data-tilt-perspective="2000">
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                     <img src={img} alt="" />

                </Tilt>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6">
                  <div className="about-page-ab">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title mb-30 wow tpfadeUp">{title}</h2>
                           <p className="pr-40 wow tpfadeUp" data-wow-delay=".3s">
                            {description}
                           </p>
                        </div>
                     </div>
                     <div className="about-page-ab-btn-wrapper mb-30 wow tpfadeUp">
                        <a href="#" className="tp-btn">Our Services<span><i className="fal fa-long-arrow-right"></i>
                              <i className="fal fa-long-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 wow tpfadeUp">
                  <div className="about-page-3-content">
                     <div className="ptg-about-content ptg-about-content-2 d-flex mb-40">
                        <div className="about-step-info about-step-info-2 mr-100">
                            <h3>Services</h3>
                            <p>{service_1}</p>
                        </div>
                        <div className="about-step-info about-step-info-2">
                            <h3>Services</h3>
                            <p>
                                {service_2}
                            </p>
                        </div>
                    </div>
                    <div className="ptg-about-btn-wrapper mb-30">
                     <a href="#" className="tp-white-border-btn">get in touch
                         <span className="ml-10">
                             <i className="fal fa-long-arrow-right"></i>
                             <i className="fal fa-long-arrow-right"></i>
                         </span>
                     </a>
                 </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default AboutDetails;