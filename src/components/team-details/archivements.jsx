import React from 'react';



const archivements_content = {
    title: "Great Archivements",
    description: <>Sed do eiusmod tempor incididunt ut labore et dolore magna aliq
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
                    derit in voluptate velit esse cillum dolor.</>

}


const { title, description}  = archivements_content




const archivements_data = [
    {
        id: 1,
        img: "assets/img/team/details/arch-1.jpg",
        clg: "tpfadeRight",       
    
    },
    {
        id: 2,
        img: "assets/img/team/details/arch-2.jpg",
        clg: "tpfadeIn",       
    
    },
    {
        id: 3,
        img: "assets/img/team/details/arch-3.jpg",
        clg: "tpfadeLeft",       
    
    },

]



const Archivements = () => {
    return (
        <>
            <div className="tp-team-details-info-wrapper pt-120 pb-90">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="tp-team-dt-info-right w-img mb-30 wow tpfadeUp" >
                     <img src="/assets/img/team/team-details-skill-2.jpg" alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tp-team-dt-info-left ml-40">
                     <div className="tp-inner-pt-section wow tpfadeUp">
                        <h4 className="tp-inner-pt-section__title mb-30">{title}</h4>
                        <p className="mb-30">{description}</p>
                     <div className="row">

                        {
                            archivements_data.map((item, i)  =>
                            <div key={i} className="col-lg-4">
                           <div className="arch-img mb-30 wow">
                              <img src={item.img} alt="" />
                           </div>
                        </div>
                            )
                        }
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

export default Archivements;