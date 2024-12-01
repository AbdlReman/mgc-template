import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isActive, setIsActive}) => {

    return (
        <>
    <div className="tp-offcanvas-wrapper">
        <div className={`tp-offcanvas white-bg ${isActive ? "opened" : ""}`}>
            <div className="offc-top-pattern">
                <img src="/assets/img/hero/nav-parrten-top.png" alt="" />
            </div>
            <div className="tp-offcanvas__top tp-border-bottom pb-30 mb-30">
                <div className="tp-offcanvas-close" onClick={() => setIsActive(false)}>
                    <span><i className="fal fa-times"></i></span>
                </div>
                <div className="tp-offcanvas__logo mb-50">
                    <Link href="/"><img src="/assets/img/logo/black-logo.png" alt="sticky-logo" /></Link>
                </div>
                <p> We bring your ideas to better product. Base in NYC</p>
                <div className="tp-offcanvas__social">
                    <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                    <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                    <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                    <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                </div>
            </div>
            <div className="tp-offcanvas__widget mb-40 d-none d-xl-block">
                <h3 className="tp-footer__widget-title mb-35">
                    Get In Touch
                </h3>
                <div className="tp-offcanvas-cta d-flex align-items-center tp-border-bottom pb-20  mb-30">
                    <span className="icon mr-20"><img src="/assets/img/icons/ofp-phone.png" alt="" /></span>
                    <span>
                        <span className="d-block mb-0">Phone number</span>
                        <b><a href="callto:0002229090"> Call Us: 000-222-9090 </a></b>
                    </span>
                </div>

                <div className="tp-offcanvas-cta d-flex align-items-center tp-border-bottom pb-20 mb-30">
                    <span className="icon mr-20"><img src="/assets/img/icons/ofc-mail-icon.png" alt="" /></span>
                    <span>
                        <span className="d-block mb-0">Email address</span>
                        <b><a href="mailto:info@webmail.com"> info@webmail.com </a></b>
                    </span>
                </div>
                <div className="tp-offcanvas-cta d-flex align-items-center pb-20  mb-30">
                    <span className="icon mr-20"><img src="/assets/img/icons/ofc-locaiton.png" alt="" /></span>
                    <span>
                         <span className="d-block mb-0">1300 Don City, NYC</span>
                        <b><a href="callto:0002229090"> Call Us: 000-222-9090 </a></b>
                    </span>
                </div>
            </div>
            <div className={`tp-mobile-menu mean-container d-xl-none`}> 
            <div className="mean-bar">
                <MobileMenus />
            </div>
            </div>
            <div className="tp-offcanvas__bottom mt-80 d-none d-lg-block">
                <p>Our team applies its wide ranging in
                    experience to determining.</p>
                <div className="tp-offcanvas-btn-wrapper">
                    <a href="#" className="tp-common-btn">get in touch
                        <span>
                            <i className="fal fa-long-arrow-right"></i>
                            <i className="fal fa-long-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div className="offc-bottom-pattern">
                <img src="/assets/img/hero/nav-parrten-botoom.png" alt="" />
            </div>
        </div>
    </div>    

<div className={`body-overlay ${isActive ? "opened"  : ""}`} onClick={() => setIsActive(false)}></div>
        </>
    );
};

export default Sidebar;