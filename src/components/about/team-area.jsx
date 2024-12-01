import team_data from '@/src/data/team-data';
import Link from 'next/link';
import React from 'react';


const team_content = {
    title: "Meet our talanted team",
    des: <>Lawyer's content marketing strategy should include adding & updating your most important and high-performing.</>
}
const {title, des}  = team_content


const TeamArea = () => {
    return (
        <>
            <div className="da-team-area pt-120 pb-90">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-md-6">
                  <div className="section-title-wraper mb-60">
                     <div className="tp-section text-center">
                        <h2 className="tp-section__title wow tpfadeUp mb-30">{title}</h2>
                        <p className="wow tpfadeUp" data-wow-delay=".3s">{des}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
            {team_data.slice(0,3).map((item , i)  => 
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="da-team p-relative mb-30 wow tpfadeUp" data-wow-delay={item.delay}>
                     <div className="da-team-img w-img fix">
                        <img src={item.img} alt="" />
                     </div>
                     <div className="da-team-info" 
                     style={{backgroundImage: `url(/assets/img/team/da-deam-info-bg.png)`}}
                     > <span>{item.title}</span>
                        <h3 className="da-team-name"><Link href="/team-details">{item.name}</Link></h3>
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

export default TeamArea;