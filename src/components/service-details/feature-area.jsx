import React from 'react';


const feature_content_data = {
    title_one: "About SEO Agency",
    description: <>Being employee-owned keeps us focused on the unique needs of
                    our users, &amp; we wouldn't have it any other way. Our many security
                    features include Multi Factor Authentication.</>,
    list_one: [
        <>Features include Multi Factor Authentication</>,
        <>We strongly believe in providing open source solutions</>,
        <>Way of thinking, both inside and outside the box.</>,
        
    ],

    title_two: "The challenges it  presents may seem",
    description_two: <>Being employee-owned keeps us focused on the unique needs of
                        our users, &amp; we wouldn't have it any other way. Our many security
                        features include Multi Factor Authentication.</>,
    items: [
        {
            id: 1,
            img: "/assets/img/icons/bulb-icon.png",
            title: "Key of success"
        },
        {
            id: 2,
            img: "/assets/img/icons/tv-icon.png",
            title: "Stone for business"
        },
    ],
}

const {title_one, description, list_one,  title_two, description_two, items}  = feature_content_data

const FeatureArea = () => {
    return (
        <>
        <div className="tp-sv-page-feature-area black-bg p-relative pt-120 pb-120">
         <div className="sv-page-fea-img-1" 
         style={{backgroundImage: `url(/assets/img/services/sv-page-fea-img-1.jpg)`}}
         ></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-sv-fea-ab-content mr-60">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title text-white mb-25 wow tpfadeUp">{title_one}</h2>
                           <p className="mb-0 pb-55 wow tpfadeUp" data-wow-delay=".3s">{description}</p>
                        </div>
                     </div>
                     <div className="tp-ha-about-fea tp-sv-fea-list wow tpfadeUp" data-wow-delay=".4s">
                        <ul>
                            {list_one.map((list, i)  =>  <li key={i}><span><i className="fal fa-check"></i></span>{list}</li>)}
                        </ul>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tp-sv-page-feature-area black-bg p-relative pt-120 pb-120">
         <div className="sv-page-fea-img-2" 
         style={{backgroundImage: `url(/assets/img/services/sv-page-fea-img-2.jpg)`}}
         ></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 offset-lg-6" >
                  <div className="tp-sv-fea-ab-content ml-80">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title text-white mb-25 wow tpfadeUp">{title_two}</h2>
                           <p className="mb-0 pb-55 wow tpfadeUp" data-wow-delay=".3s">{description_two}</p>
                        </div>
                     </div>
                     <div className="sv-details-feature-wrapper">
                        <div className="row">

                            {items.map((item, i)  => 
                                <div key={i} className="col-md-6">
                              <div className="sv-details-fea-item wow tpfadeRight">
                                 <div className="sv-details-fea-item__icon mb-20">
                                    <img src={item.img} alt={item.title}/>
                                 </div>
                                 <h3 className="sv-details-fea-item__title">{item.title}</h3>
                                 <div className="sv-details-fea-item__arrow">
                                    <span><i className="fal fa-long-arrow-right"></i></span>
                                 </div>
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

export default FeatureArea;