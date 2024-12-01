import React from 'react';

// progress
const progress = [
   {
      id: 1,
      title: "Product Design",
      count: "70%",
      width_progress: "70%",

   },
   {
      id: 2,
      title: "Design & Development Support",
      count: "52%",
      width_progress: "52%",

   },
   {
      id: 3,
      title: "User Experience & Research",
      count: "82%",
      width_progress: "82%",

   },
]

const  progress_content ={
   title: "Personal Skills",
   img_right: "/assets/img/team/team-details-skill.jpg"
}
const {title, img_right}  = progress_content



const TeamProgress = () => {
    return (
        <>
         <div className="tp-team-details-progress">
         <div className="container">
            <div className="tp-border-bottom tp-border-top pt-120 pb-120">
               <div className="row align-items-lg-center">
                  <div className="col-lg-5">
                     <div className="team-dt-progress-item mb-30">
                        <h3 className="team-dt-progress-title mb-35">{title}</h3>

                        {
                           progress.map((item, i )  =>
                           <div key={i} className="team-dt-progress-wrapper mb-30">
                           <div className="d-flex align-items-center justify-content-between mb-5">
                              <div>
                                 <h4 className="team-dt-progress-sm-title">{item.title}</h4>
                              </div>
                              <div>
                                 <span className="team-dt-progress-count">{item.count}</span>
                              </div>
                           </div>
                           <div className="progress">
                              <div 
                              className="progress-bar wow slideInLeft" 
                              data-wow-duration="1s" 
                              data-wow-delay=".3s" 
                              role="progressbar" 
                              style={{width: item.width_progress}} 
                              aria-valuenow="25" 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                              ></div>
                           </div>
                        </div>
                           )
                        }
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="team-dt-skill-img text-md-end wow tpfadeUp" >
                        <img src={img_right} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default TeamProgress;