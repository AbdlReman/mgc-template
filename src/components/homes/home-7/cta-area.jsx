import React from 'react';


const category_content = {
    bg_img: "/assets/img/cta/law-cta-bg.jpg",
    img: "/assets/img/cta/red-circle-logo.png",
    title: "NEED LEGAL ADVICE?",
    des: <>A lawyer's content marketing strategy should include adding and updating your most <br /> 
    important and high-performing pages and blog posts.</>,
    phone: "1800 500 4540"
}

const { bg_img,img, title, des, phone}  = category_content


const CtaArea = () => {
    return (
        <>
        <div className="law-cta-area text-center pt-120 pb-120" 
        style={{backgroundImage: `url(${bg_img})`}}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="law-cta-circle mb-80 wow tpfadeUp" data-wow-delay=".4s">
                            <img src={img} alt="" />
                        </div>
                        <div className="section-title-wraper mb-40">
                            <div className="tp-section">
                                <h2 className="tp-section__title wine-text-color mb-20 text-uppercase wow tpfadeUp" data-wow-delay=".5s">
                                    {title}
                                </h2>
                                <p className="text-grey wow tpfadeUp" data-wow-delay=".3s">{des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="law-cta-contact-wrapper">
                            <span>Get Free Legal Consultant :</span>
                            <h1><a href={`tel: ${phone}`}> {phone} </a></h1>
                            <a href="#" className="tp-red-btn-alt tp-btn-hover alt-bg-red">
                                get a quote
                                <span className="ml-10">
                                    <i className="fal fa-long-arrow-right"></i>
                                    <i className="fal fa-long-arrow-right"></i>
                                </span>
                                <b></b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default CtaArea;