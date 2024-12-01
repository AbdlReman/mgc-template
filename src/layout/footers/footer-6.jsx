import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';

const FooterSix = () => {
    return (
        <>
          
    <footer>
        <div className="bs-footer law-footer wine-bg">
            <div className="container">
                <div className="bs-footer__main law-footer__main pb-10 pt-80 ">
                    <div className="row justify-content-center">

                        <CommonFooter />
                       
                        <div className="col-xl-3 col-md-6">
                            <div className="tp-footer__widget mb-40">
                                <h3 className="tp-footer__widget-title mb-35">
                                    Get In Touch
                                </h3>
                                <div className="tp-footer-cta d-flex align-items-center mb-30">
                                    <span className="call-icon"><img src="/assets/img/icons/law-call.png" alt="" /></span>
                                    <p className="mb-0">
                                        <span>1300 Don City, NYC</span> <br />
                                        <b><a href="callto:0002229090"> Call Us: 000-222-9090 </a></b>
                                    </p>
                                </div>
                                <div className="tp-footer-cta d-flex align-items-center mb-30">
                                    <span className="call-icon"><img src="/assets/img/icons/law-mail.png" alt="" /></span>
                                    <p className="mb-0">
                                        <span>1300 Don City, N</span> <br />
                                        <b><a href="mailto:info@gencio.com"> info@gencio.com </a></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="tp-footer__widget bs-pl-60 mb-40">
                                <h3 className="tp-footer__widget-title mb-35">
                                    Subscribe Now
                                </h3>
                                <p>Subscribe to get the latest news from us</p>

                                <div className="tp-footer-from mb-5 p-relative">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <span><i className="fas fa-envelope-open"></i></span>
                                        <input type="email" placeholder="Enter your mail" />
                                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                    </form>

                                </div>
                                <p className="tp-form-note"> <span>** </span>We are not going to save your data </p>
                                <div className="da-ft-social">
                                    <b> Connect Here:</b>
                                    <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterCopyRight style_7={true} />
            </div>
        </div>
    </footer>

        </>
    );
};

export default FooterSix;