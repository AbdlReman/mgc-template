import SocialLinks from '@/src/common/social-links';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const HeroAboutMe = () => {
    return (
        <>
             <div className="tp-about__me theme-bg pt-60" 
             style={{backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg.png)`}}
             >
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6 col-xl-5 wow tpfadeUp">
                  <div className="about-me-1 mb-30" data-tilt="" data-tilt-perspective="2000">
                  <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={900}
                        transitionSpeed={1000}
                        gyroscope={true}
                        > 
                        <img src="/assets/img/about/about-me-1.jpg" alt="" />
                  </Tilt>
                  </div>
               </div>
               <div className="col-md-6 wow tpfadeUp">
                  <div className="section-title-wraper">
                     <div className="tp-section">
                        <span className="tp-section__subtitle shadow-none text-redical mb-10 p-0">Head Of Idea</span>
                        <h2 className="tp-section__title mb-20">Alonso D. Dowson</h2>
                        <p className="mb-0 pb-40">Business content marketing strategy should include adding & updating
                           your most important and high-performing. Certain circumstances seds
                           owing to the claims duty ourighteous.</p>
                     </div>
                     <div className="about-me-socials">
                        <div className="bs-footer__top-social">
                           <SocialLinks />   
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default HeroAboutMe;