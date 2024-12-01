import React from "react";
import { TypeAnimation } from 'react-type-animation';



const CtaArea = () => {
  return (
    <>
      <div className="tp-bs-cta-area pt-105 pb-120 theme-bg p-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-cta-section text-center">
                <span className="bs-cta-section__subtitle mb-5 d-inline-block wow tpfadeUp">
                  Schedule a  call
                </span>
                <div className="cd-intro">
                  <h3 className="bs-cta-section__title cd-headline loading-bar mb-55 wow tpfadeUp">
                    <span>
                      Start your business journey better <br />
                      with {" "}
                    </span>
                    <span className="cd-words-wrapper bs-cta-wrapper">

                   <TypeAnimation
                          sequence={[
                            'Maidaan', 
                            1000,
                            'Branding', 
                            3000,
                            'Markting', 
                          ]}
                          wrapper="div"
                          cursor={false}
                          repeat={Infinity}
                          style={{ color: "#c1cbd1", textDecorationLine: "underline" }}
                        /> 
                    </span>
                    <span>{" "} Consulting</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bs-cta-btns text-center">
              <a href="#" className="tp-btn tp-btn-hover mr-30 wow tpfadeRight">
                Schedule a meeting
                <span>
                  <i className="fal fa-long-arrow-right"></i>
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                <b></b>
              </a>
              {/* <a
                href="#"
                className="tp-white-btn tp-btn-hover alt-color cronblue-g-color wow tpfadeLeft"
              >
                <span>
                  <i className="fab fa-google"></i>
                  <i className="fab fa-google"></i>
                </span>
                Google Calendar <b></b>
              </a> */}
            </div>
          </div>
        </div>
        <div className="red-nots">
          <img src="/assets/img/cta/point-bg.png" alt="" />
        </div>
        <div className="thumb-animation d-none d-lg-block">
          <div className="like-thumb">
            <img src="/assets/img/cta/like-thumb.jpg" alt="" />
          </div>
          <div className="like-thumb-border"></div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
