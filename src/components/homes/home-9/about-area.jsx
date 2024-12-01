import React from 'react';


const about_content = {
    img: "/assets/img/about/ha-about-img.jpg",
    circle_img: "/assets/img/about/ha-abpiut-circle.png",
    sub_title: "About",
    title: "Building Dreams, One Project at a Time",
    description: (
        <>
            At Victory Construction, we believe that great design is the cornerstone of great business. With over 40 years of 
            expertise, we focus on delivering innovative, high-quality, and sustainable solutions that bring your vision to life. 
            Our commitment to excellence and attention to detail ensure every project is a step toward success.
        </>
    ),
    features: [
        <>Over 40 years of experience in construction</>,
        <>Specialists in innovative and sustainable designs</>,
        <>Unwavering commitment to client satisfaction</>
    ],
    btn: "Get in touch"
}


const {img, circle_img, sub_title, title, description, features, btn }  = about_content

const AboutArea = () => {
    return (
        <>
            <div className="tp-ha-about pt-120 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="ha-about-img mb-30 p-relative wow tpfadeUp">
                            <img src={img} alt="img" />
                            <div className="ha-about-circle">
                                <img src={circle_img} alt="circle-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="tp-ha-about-info mb-75">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <span className="tp-section__subtitle shadow-none text-grey mb-15 p-0 wow tpfadeUp" data-wow-delay=".3s">{sub_title}</span>
                                    <h2 className="tp-section__title mb-25 wow tpfadeUp" data-wow-delay=".4s">{title}</h2>
                                    <p className="mb-0 pb-25 wow tpfadeUp" data-wow-delay=".5s">{description}</p>
                                </div>
                            </div>
                            <div className="tp-ha-about-fea pb-25 wow tpfadeUp" data-wow-delay=".6s">
                                <ul>
                                    {features.map((feature, i)  => 
                                        <li key={i}> <span><i className="fal fa-check"></i></span>{feature}</li>
                                        
                                        )
                                    }                                    
                                </ul>

                            </div>
                            {/* <div className="tp--indo-btns d-flex flex-wrap align-items-center wow tpfadeUp" data-wow-delay=".6s">
                                <div className="tp-da-link-btn">
                                    <a href="#" className="tp-black-bg-btn">{btn}
                                        <span className="ml-10">
                                            <i className="fal fa-long-arrow-right"></i>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutArea;