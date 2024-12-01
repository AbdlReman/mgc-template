import React from 'react';
import Tilt from 'react-parallax-tilt';



const news_letter_content = {
    bg_img: "/assets/img/newsletter/newsletter-bg.jpg",
    img: "/assets/img/newsletter/newsletter-img.jpg",
    title: "Newsletter",
    heading: "Get 7 Days Trail",
    des: <>On the other hand we denounce with righteous indignation & dislike men who are so beguiled and demoralized by the charms of pleasure.</>
}

const { bg_img, img, title, des, heading}  = news_letter_content
const AppNewsletter = () => {
    return (
        <>
            <div className="tp-app-newsletter pt-100" 
            style={{backgroundImage : `url(${bg_img})`}}
            
            >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                    <Tilt
                className="tilt-img"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                transitionSpeed={1000}
                gyroscope={true}
            > 
                        <div className="app-newsletter-img wow tpfadeUp" data-wow-delay=".3s" data-tilt=""  data-tilt-perspective="2000">
                            <img src={img} alt="" />
                        </div>
            </Tilt>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-newsletter-content float-end">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <span
                                        className="tp-section__subtitle mb-15 shadow-none text-white p-0 change-icon-size wow tpfadeUp">
                                        <i className="far fa-circle"></i>
                                         {title}
                                    </span>
                                    <h2 className="tp-section__title mb-15 text-white wow tpfadeUp" data-wow-delay=".4s">{heading}</h2>
                                    <p className="text-fog m-0 pb-35">
                                         {des}
                                         </p>
                                </div>
                            </div>

                            <div className="app-hero__subscribe mr-40 mb-30 wow tpfadeUp" data-wow-delay=".4s">
                                <form  onSubmit={(e) => e.preventDefault()}>
                                    <div className="app-hero__subscribe-box p-relative">
                                        <div className="app-hero__subscribe-input p-relative">
                                            <i className="fas fa-envelope-open"></i>
                                            <input type="email" placeholder="Email address..." />
                                        </div>
                                        <button className="hero-submit-btn color-alt" type="submit">try it free
                                            <span>
                                                <i className="fal fa-long-arrow-right"></i>
                                                <i className="fal fa-long-arrow-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                                <div className="app-hero-feature mt-20">
                                    <span className="app-hero-feature__review"><i className="fal fa-check"></i> Cancel anytime
                                    </span>
                                    <span className="app-hero-feature__credit"><i className="fal fa-check"></i> No credit card
                                        required</span>
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

export default AppNewsletter;