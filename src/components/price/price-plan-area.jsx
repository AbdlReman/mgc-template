import PricingPlan from '@/src/common/pricing-plan';
import React from 'react';

const PricePlan = () => {
    return (
        <>
        <div className="tp-app-price-area fix pt-120 pb-90">
         <div className="container">
            <div className="row gx-5">
                <PricingPlan  />
            </div>
         </div>
      </div> 
        </>
    );
};

export default PricePlan;