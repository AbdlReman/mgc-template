import RequestSubmitForm from '@/src/forms/request-submit-form';
import React from 'react';

const it_cta_content ={
   title: <>Any project on your mind. Let us know.</>,
   des: <>We bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards.</>
}

const {title, des}  = it_cta_content

const ItCtaArea = () => {
    return (
        <>
        <div className="it-cta-area law-cta-area about-me-cta-area pt-120 pb-85 black-bg"
            style={{backgroundImage: `url(/assets/img/about/about-me-contact-bg.png)`}}
         >
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="mb-30">
                     <div className="it-cta__title">
                        <div className="section-title-wraper">
                           <div className="tp-section">
                              <div className="pb-40"><img src="/assets/img/icons/red-what-icon.png" alt="" /></div>
                              <h2 className="tp-section__title text-white text-capitalize mb-25 wow tpfadeUp">{title}</h2>
                              <p className="pr-45 wow tpfadeUp" data-wow-delay=".3s">{des}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 wow tpfadeUp">
                  <div className="it-cta-form about-cta-form">
                    <RequestSubmitForm /> 
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default ItCtaArea;