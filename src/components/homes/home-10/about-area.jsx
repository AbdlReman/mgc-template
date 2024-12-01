import React from 'react';
import Tilt from 'react-parallax-tilt';




const about_content = {
    about_img : "/assets/img/about/seo-about.png",
    title: "About SEO Agency",
    des: <>Being employee-owned keeps us focused on the unique needs of
    our users, &amp; we wouldn't have it any other way. Our many security
    features include Multi Factor Authentication.</>,

    features: [
        <>Features include Multi Factor Authentication</>,
        <>We strongly believe in providing open source solutions</>,
    ],
    about_btn: "get in touch",
    phone: "785 680 659 00",

}

const {about_img, title, des, features, about_btn, phone}  = about_content

const AboutArea = () => {
    return (
        <>
            <div className="seo-about-area pt-120 pb-90 theme-bg-9">
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-xl-6 wow tpfadeUp" data-wow-delay=".3s">
                        <div className="seo-about-img mb-30" data-tilt="" data-tilt-perspective="2000">
                        <Tilt
                            className="tilt-img"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            transitionSpeed={1000}
                            gyroscope={true}
                            > 
                            <img src={about_img} alt="theme-pure" />
                            </Tilt>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-seo-about-info mr-60 mb-30">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title seagreen-text-color mb-25 wow tpfadeUp" data-wow-delay=".3s">{title}</h2>
                                    <p className="mb-0 pb-45 wow tpfadeUp" data-wow-delay=".4s">{des}</p>
                                </div>
                            </div>
                            <div className="tp-ha-about-fea pb-25 mb-40 tp-border-bottom wow tpfadeUp" data-wow-delay=".4s">
                                <ul>
                                {features.map((feature, i) => 
                                             <li key={i}><span><i className="fal fa-check"></i></span>
                                             {feature}
                                             </li>       
                                                    
                                 )
                                 }
                                     
                                </ul>
                            </div>
                            <div className="tp--indo-btns d-flex align-items-center">
                                <div className="tp-da-link-btn d-flex flex-wrap seo-hero-info text-center">
                                    <div className="seo-about-btn-wrapper mr-30 mb-30 wow tpfadeUp" >
                                        <a href="#" className="tp-seo-btn">
                                            {about_btn}
                                            <span className="ml-10">
                                                <i className="fal fa-long-arrow-right"></i>
                                                <i className="fal fa-long-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="tp-seo-about-cta d-flex align-items-center mb-30 wow tpfadeUp">
                                        <span className="call-icon"><i className="fas fa-phone"></i></span>
                                        <p className="mb-0">
                                            <span>Phone number</span> <br />
                                            <b><a href={`callto:${phone}`}>{phone} </a></b>
                                        </p>
                                    </div>
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

export default AboutArea;