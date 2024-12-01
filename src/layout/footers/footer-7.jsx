import SocialLinks from '@/src/common/social-links';
import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';

const FooterSeven = () => {
    return (
        <>
            <footer>

<div className="bs-footer ha-footer black-bg" 
        style={{backgroundImage: `url(/assets/img/footer/ha-footer-bg.png)`}}
        >
    <div className="container">
        <div className="bs-footer__top fotter-btn-bottom pt-100 pb-40 d-none d-md-block">
            <div className="row align-items-center">
                <div className="col-lg-7 col-4">
                    <div className="bs-footer__top-logo">
                    <a href="#">
                        <img src="/assets/img/logo/ha-footer-logo.png" alt="theme-pure" />
                    </a>
                    </div>
                </div>
                <div className="col-lg-5 col-8 text-md-end">
                    <div className="tp-footer-from-2 p-relative">
                        <form onSubmit={e => e.preventDefault()}>
                            <span><i className="fas fa-envelope-open"></i></span>
                            <input type="email" placeholder="Email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="bs-footer__main pb-10 pt-80 tp-border-bottom ">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-md-6">
                    <div className="tp-footer__widget mb-40">
                        <h3 className="tp-footer__widget-title mb-35">
                            About
                        </h3>
                        <p className="pr-40">
                            Your goals are individual. We believe
                            business advice should be too, so we have
                            to help your business thrive in this work
                            environment situation.
                        </p>
                    </div>
                    <div className="da-footer__top-social mb-30">
                        <SocialLinks />  
                    </div>
                </div>

                <CommonFooter />
                

                <div className="col-xl-4 col-md-6">
                    <div className="tp-footer__widget bs-pl-60 mb-40">
                        <h3 className="tp-footer__widget-title mb-35">
                            News & Feeds
                        </h3>
                        <div className="footer-blog-feed mb-20 d-flex align-items-center">
                            <div className="footer-blog-thum mr-20">
                                <img src="/assets/img/footer/ha-ft-thum-1.jpg" alt="theme-pure" />
                            </div>

                            <div className="footer-blog-info pt-5">
                                <div className="footer-blog-info-meta mb-10">
                                    <span><a href="#">June 12, 2022</a></span>
                                </div>
                                <h5 className="footer-blog-info-title"><a href="#"> Chip startup says sensors may <br /> replace buttons on</a></h5>
                            </div>
                        </div>
                        <div className="mb-25">
                            <div className="tp-border-bottom"></div>
                        </div>
                        <div className="footer-blog-feed d-flex mb-20">
                            <div className="footer-blog-thum mr-20">
                                <img src="/assets/img/footer/ha-ft-thumb-2.jpg" alt="theme-pure" />
                            </div>
                            <div className="footer-blog-info pt-5">
                                <div className="footer-blog-info-meta mb-10">
                                    <span><a href="#">June 12, 2022</a></span>
                                </div>
                                <h5 className="footer-blog-info-title"><a href="#"> Way Technology Has Improve <br /> Business Today</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterCopyRight style_9={true} />

         
    </div>
</div>
</footer>
        </>
    );
};

export default FooterSeven;