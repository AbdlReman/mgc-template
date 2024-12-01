import team_data from '@/src/data/team-data';
import Link from 'next/link';
import React from 'react';

const OurTeam = () => {
    return (
        <>
            <div className="da-team-area pt-120 pb-90 theme-bg-7">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-md-6">
                  <div className="section-title-wraper mb-60">
                     <div className="tp-section text-center">
                        <h2 className="tp-section__title mb-30">Meet with team</h2>
                        <p>Lawyer's content marketing strategy should include adding & updating
                           your most important and high-performing.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
                {
                    team_data.slice(3, 7).map((item, i)  =>                     
                    <div key={i} className="col-md-6 col-lg-4 col-xl-3 wow tpfadeUp">
                     <div className="ca-team-item mb-30">
                        <div className="ca-team-item__img ca-team-item-after w-img mb-35 fix">
                           <img src={item.img} alt="" />
                           <div className="ca-team-item__img-social">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-behance"></i></a>
                              <a href="#"><i className="fab fa-youtube"></i></a>
                              <a href="#"><i className="fab fa-linkedin"></i></a>
                           </div>
                        </div>
                        <div className="ca-team-item__content">
                           <h3 className="ca-team-item__content-title"><Link href="/team-details">{item.name}</Link></h3>
                           <span>{item.title}</span>
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

export default OurTeam;