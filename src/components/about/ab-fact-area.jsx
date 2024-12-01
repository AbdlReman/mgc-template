import Count from '@/src/common/count';
import React from 'react';

const about_feature_data = [
    {
        id: 1,
        count: 10000,
        title: "Registered Customers",
        description: <>Transforming lives by offering unparalleled lifestyle solutions.</>,
    },
    {
        id: 2,
        count: 20,
        title: "Years of Trust",
        description: <>Delivering projects on time and exceeding expectations since our inception.</>,
    },
    {
        id: 3,
        count: 30,
        title: "Awards Won",
        description: <>A testimony to excellence and leadership in the real estate industry.</>,
    },
    {
        id: 4,
        count: 50000,
        title: "Happy Clients",
        description: <>Committed to creating value and fostering long-lasting relationships.</>,
    },
];

const AbFactArea = () => {
    return (
        <div
          className="tp-ab-fact-area fact-overlay p-relative pt-120 pb-85"
          style={{
            backgroundImage: `url(/assets/img/about/about-fact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              {about_feature_data.map((item, i) => (
                <div key={item.id} className="col-xl-3 col-md-6">
                  <div className="ab-fact-item mb-30">
                    <Count number={item.count} />
                    <h3 className="ab-fact-item__title">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default AbFactArea;
