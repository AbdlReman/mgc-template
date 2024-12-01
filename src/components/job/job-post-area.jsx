import Link from 'next/link';
import React from 'react';

const job_post_data = [
    {
        id: 1,
        job_info: "Full-time",
        location: "Paris",
        title:"Android engineer",
    },
    {
        id: 2,
        job_info: "Remote",
        location: "Paris",
        title:"Back-end engineer",
    },
    {
        id: 3,
        job_info: "Full-time",
        location: "Delhi",
        title:"Front-end engineer",
    },
    {
        id: 4,
        job_info: "Full-time",
        location: "Dhaka",
        title:"iOS engineer",
    },
    {
        id: 5,
        job_info: "Full-time",
        location: "Delhi",
        title:"Full-stack engineer",
    },
    {
        id: 6,
        job_info: "Full-time",
        location: "Delhi",
        title:"Machine learning engineer",
    },
    {
        id: 7,
        job_info: "Full-time",
        location: "Delhi",
        title:"Graphic designer",
    },
    {
        id: 1,
        job_info: "Full-time",
        location: "Delhi",
        title:"Product designer",
    },
]

const JobPostArea = () => {
    return (
        <>
        <div className="tp-job-post-area theme-bg pb-40">
         <div className="container">
            <div className="row">
                {job_post_data.map((item, i)  => 
                    <div key={i} className="col-lg-6 wow tpfadeUp">
                  <div className="tp-job-item white-bg">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                           <div className="tp-job-item__info">
                              <span>{item.job_info}, {item.location}</span>
                              <h3 className="tp-job-item__title"><a href="#">{item.title}</a></h3>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tp-job-item__btn text-lg-end">
                              <Link href="/job-details">Apply Now <span> <i className="fal fa-long-arrow-right"></i></span> </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>                    
                )
                }
            </div>
         </div>
      </div>
            
        </>
    );
};

export default JobPostArea;