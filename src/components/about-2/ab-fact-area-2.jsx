import Count from '@/src/common/count';
import React from 'react';


const ab_fact_data = [
    {
        id: 1,
        count_number: 328,
        title: "Successful projects",
    },
    {
        id: 2,
        count_number: 522,
        title: "Years of exeperience",
    },
    {
        id: 3,
        count_number: 1020,
        title: "Cost of savings",
    },
    {
        id: 4,
        count_number: 256,
        title: "Email leads generated",
    },
]

const AbFactAreaTwo = () => {
    return (
      <>
        <div className="tp-ab-fact-area p-relative pb-85">
          <div className="container">
            <div className="tp-border-top pt-120">
              <div className="row">
                {ab_fact_data.map((item, i) => (
                  <div key={i} className="col-xl-3 col-lg-6">
                    <div className="ab-fact-item ab-fact-item-2 mb-30">
                      <Count version_two={true} number={item.count_number} />
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AbFactAreaTwo;