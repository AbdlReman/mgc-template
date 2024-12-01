import Link from 'next/link';
import React from 'react';


const job_content  = {
    img: "/assets/img/job/job-cirile-logo.png",
    title: "Gencio is hiring",
    description: <>Join a multidisciplinary team of entrepreneurs, engineers and physicians at the forefront
                 <br /> of medical practice transformation and AI-augmented care.</>,
    btn_text : "apply now",
}

const {img, title, description, btn_text} = job_content


const JobContentArea = () => {
    return (
        <>
            <div className="job-about-area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="job-about-cicle-img text-center mb-60">
                     <img src={img} alt="" />
                  </div>
                  <div className="section-title-wraper text-center wow tpfadeUp">
                     <div className="tp-section">
                        <h2 className="tp-section__title mb-30">{title}</h2>
                        <p>{description}</p>
                     </div>
                  </div>
                  <div className="job-btn-wrapper text-center">
                     <Link href="/job-details" className="tp-btn wow tpfadeUp">
                        {btn_text}
                        <span>
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

export default JobContentArea;