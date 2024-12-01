import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <>
      <div className="tp-da-about pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".3s">
              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div
                  className="da-about-img mb-30"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <img
                    src="/assets/img/about/da-about-1.jpg"
                    alt="about-img"
                  />
                </div>
              </Tilt>
            </div>
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".5s">
              <div className="tp-da-about-info mb-30">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0">
                    Simplifying Real Estate
                    </span>
                    <h2 className="tp-section__title mb-30">
                      A Core Center Of Real Estate <span>Investment</span>
                    </h2>
                  </div>
                </div>
                <div className="tp-da-about-fea pb-25 mb-10">
                  <p>
                    Maidaan is a leading real estate
                    marketing business in Pakistan, committed to simplifying the
                    intricacies of the real estate sector.Our mission is to make real estate
                    accessible to everyone.
                  </p>
                  <p>
                    With a focus on simplifying market complexities, we provide
                    comprehensive services that include not just buying and
                    selling properties but also offering Event as a Service
                    (EAAS) and Marketing as a Service (MAAS) across Pakistan
                    and beyond. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
