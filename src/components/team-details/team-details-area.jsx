import React from 'react';


const team_details_content = {
    img: "/assets/img/team/team-details-me.jpg",
    name: "Hexol D. Drownix",
    description: <>The spectacular Harbour Central is a brand new development in London’s
                    The Docklands, comprising a total of 642 private apartments divided across five
                    residential buildings, along with a leisure complex.</>,
    phone: "785 680 659 00",
    email : "info@webexample.com",
    address: "14/A, Kilix Home Tower, NYC"
}


const {img, name, description, phone, email, address}  = team_details_content




const TeamDetailsArea = () => {
    return (
        <>
            <div className="team-deatails-area pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="team-deatails-page-img1 w-img mr-30 mb-30 wow tpfadeUp">
                     <img src={img} alt={name} />
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="tp-sv-details-serive-left mr-50 wow tpfadeUp" data-wow-delay=".3s">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0">Founder</span>
                           <h2 className="tp-section__title mb-25">{name}</h2>
                           <p className="mb-0 pb-25">{description}</p>
                        </div>
                     </div>
                     <div className="tp-sv-about-cta tp-team-details-cta d-flex align-items-center mb-30">
                        <span className="call-icon"><i className="fas fa-phone"></i></span>
                        <p className="mb-0">
                           <span>Phone number</span> <br />
                           <b><a href={`callto:${phone}`}>{phone}</a></b>
                        </p>
                     </div>
                     <div className="tp-sv-about-cta tp-team-details-cta d-flex align-items-center mb-30">
                        <span className="call-icon"><i className="fas fa-envelope"></i></span>
                        <p className="mb-0">
                           <span>Email Address</span> <br />
                           <b><a  href={`mailto:${email}`}>{email}</a></b>
                        </p>
                     </div>
                     <div className="tp-sv-about-cta tp-team-details-cta d-flex align-items-center mb-30">
                        <span className="call-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <p className="mb-0">
                           <span>Office Location</span> <br />
                           <b><a href={`callto:${phone}`}>{address}</a></b>
                        </p>
                     </div>

                     <div className="team-details-about-wrapper">
                        <a href="#" className="tp-btn">
                           Get In touch
                           <span>
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

export default TeamDetailsArea;