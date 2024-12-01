import React from 'react';


const about_me_info ={
    about_me: "",
    about_des: <>Being employee-owned keeps us focused on the unique needs of our
                users, and we wouldn't have it any other way. Our many security features
                include Multi Factor Authentication, auto-enabled sFTP. A continuous
                technology R&D program, along with an uncompromising approach to
                quality and professionalism on each level. <br />
                <br />
                Highly appreciated by our long-term partners and attracts influencers
                from different industries.</>,
    contact_me: "Contact Info",
    contact_des: <>Our many security features include Multi Factor Authentication, auto-enabled
                sFTP. A continuous technology R&D program.</>,

    address: "Vesturbraut 17-3 Keflavík, US",
    email: "gencio@web-agency.com",
    phone: "+351 258 548 56",
    mobile: "+354 547 244 00 ",

}

const {about_me, about_des, contact_me, contact_des, address, email, phone, mobile}  = about_me_info


const AboutMeInfo = () => {
    return (
        <>
           <div className="about-me-about-area pt-150 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 wow tpfadeUp">
                  <div className="about-me-about-left pr-40">
                     <div className="tp-section">
                        <span className="tp-section__subtitle white-bg mb-25"><i className="before-border"></i>{about_me}</span>
                        <p>{about_des}</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 wow tpfadeUp">
                  <div className="about-me-about-right">
                     <div className="tp-section">
                        <span className="tp-section__subtitle white-bg mb-25"><i className="before-border"></i> {contact_me}</span>
                        <p className="mb-25">
                            {contact_des}
                        </p>
                     </div>
                     <div className="about-me-about-cta-wraper mb-30">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="about-me-about-cta">
                                 <span>{address}</span>
                                 <span><a  href={`mailto:${email}`}>{email}</a></span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="about-me-about-cta">
                                 <span>Phone: <a href={`tel:${phone}`}>{phone}</a></span>
                                 <span> Mobile: <a href={`tel:${mobile }`}>{mobile}</a></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about-me-about-download">
                        <a href="#" className="tp-white-border-btn">
                           download cv
                           <span className="">
                              <i className="fas fa-download"></i>
                              <i className="fas fa-download"></i>
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

export default AboutMeInfo;