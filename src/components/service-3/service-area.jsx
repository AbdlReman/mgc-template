import service_data from '@/src/data/service-data';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
        <div className="tp-service-page pt-120 pb-90">
         <div className="container">
            <div className="row">
                { service_data.slice(22, 28).map((item, i)  => 
                    <div key={i} className="col-lg-4 wow">                
                  <div className="sv-page-item white-bg mb-30 wow tpfadeUp" data-wow-delay=".3s">
                     <div className="sv-page-item__img p-relative mb-30">
                        <div className="w-img">
                           <img src={item.img} alt="theme-pure"/>
                        </div>
                        <div className="sv-page-item__icon">
                           <span><i className={`${item.icon}`}></i></span>
                        </div>
                     </div>
                     <h3 className="sv-page-item__title text-center pb-30"><a href="#">{item.title}</a></h3>
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

export default ServiceArea;