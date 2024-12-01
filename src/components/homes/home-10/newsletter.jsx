import React from 'react';


const newsletter_content = {
    newsletter: "Newsletter",
    title: "Weekly Newsletter",
    des: <>On the other hand we denounce with righteous indignation &amp; dislike men who are so beguiled and demoralized by the charms of pleasure.</>,
    newsletter_feature_1: "Cancel anytime",
    newsletter_feature_2: " No credit card required",
    newsletter_feature_3: "Subscribe & save",
    newsletter_feature_4: "Love offers and discounts",

}

const {
    newsletter, 
    title, des, 
    newsletter_feature_1, 
    newsletter_feature_2, 
    newsletter_feature_3, 
    newsletter_feature_4
} =  newsletter_content



const Newsletter = () => {
    return (
        <>
            <div className="tp-seo-newsletter pt-100 pb-90" 
            style={{backgroundImage: `url(/assets/img/newsletter/dot-map.png)`}}
            >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 wow tpfadeUp" data-wow-delay=".4s">
                        <div className="app-newsletter-img mb-30">
                            <img src="/assets/img/newsletter/newsletter-seo.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-newsletter-content float-end">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <span className="tp-section__subtitle mb-15 shadow-none lochmara-text-color p-0 wow tpfadeUp">
                                        {newsletter}</span>
                                    <h2 className="tp-section__title mb-15 seagreen-text-color wow tpfadeUp" data-wow-delay=".3s">{title}</h2>
                                    <p className="m-0 pb-40 wow tpfadeUp" data-wow-delay=".3s">
                                        {des}
                                        </p>
                                </div>
                            </div>

                            <div className="app-hero__subscribe seo_newsletter-form mr-40 mb-30  wow tpfadeUp" data-wow-delay=".5s">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="app-hero__subscribe-box p-relative">
                                        <div className="app-hero__subscribe-input p-relative">
                                            <i className="fas fa-envelope-open"></i>
                                            <input type="email" placeholder="Email address..." />
                                        </div>
                                        <button className="hero-submit-btn" type="submit">try it free
                                            <span>
                                                <i className="fal fa-long-arrow-right"></i>
                                                <i className="fal fa-long-arrow-right"></i> 
                                            </span>
                                        </button>
                                    </div>
                                </form>
                                <div className="seo-nl-feature mt-30">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span><i className="fal fa-check"></i>  {newsletter_feature_1} </span>
                                            <span><i className="fal fa-check"></i>  {newsletter_feature_2}</span>
                                        </div>
                                        <div className="col-md-6">
                                            <span><i className="fal fa-check"></i>  {newsletter_feature_3}
                                            </span>
                                            <span><i className="fal fa-check"></i>  {newsletter_feature_4}</span>
                                        </div>
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

export default Newsletter;