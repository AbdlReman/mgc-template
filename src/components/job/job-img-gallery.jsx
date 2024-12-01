import React from 'react';
import Tilt from "react-parallax-tilt";



const job_gallery = [
    "/assets/img/job/job-1.jpg",
    "/assets/img/job/job-2.jpg",
    "/assets/img/job/job-3.jpg",
]

const JobImgGallery = () => {
    return (
        <>
            <div className="job-img-gallery pb-140">
         <div className="container">
            <div className="row justify-content-center">

                {
                    job_gallery.map((item,  i) =>
                 <div key={i} className="col-lg-6 wow tpfadeUp">
                  <div className="job-img-1 mb-30 w-img" data-tilt="" data-tilt-perspective="2000">
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                     <img src={item} alt="theme-pure" />
                </Tilt>
                  </div>
               </div>
                    )
                }


               {/* <div className="col-lg-6 wow tpfadeUp">
                  <div className="job-img-1 mb-30 w-img" data-tilt="" data-tilt-perspective="2000">
                     <img src="/assets/img/job/job-1.jpg" alt="theme-pure" />
                  </div>
               </div>

               <div className="col-lg-6 wow tpfadeUp" >
                  <div className="job-img-1 mb-30 w-img" data-tilt="" data-tilt-perspective="2000">
                     <img src="/assets/img/job/job-2.jpg" alt="theme-pure" />
                  </div>
               </div>

               <div className="col-lg-8 col-12 wow tpfadeUp">
                  <div className="job-lg-img-1 mb-30 w-img" data-tilt="" data-tilt-perspective="2000">
                     <img src="/assets/img/job/job-3.jpg" alt="theme-pure" />
                  </div>
               </div> */}


            </div>
            
         </div>
      </div>
        </>
    );
};

export default JobImgGallery;