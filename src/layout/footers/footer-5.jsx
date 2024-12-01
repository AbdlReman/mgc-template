import React from 'react';




// copy right text
const footer_content = {
    copy_right_info:  <> Copyright & Design By <a href="#">@Theme Pure</a> - {new Date().getFullYear()} </>,
  };

const { copy_right_info } = footer_content;



const FooterFive = () => {
    return (
        <>
             <footer>
            <div className="mp-footer dark-bg ">
                <div className="container">
                    <div className="mp-footer__main pb-70 pt-120  tp-border-bottom-dark">
                        <span className="mp-footer-section-title tp-border-bottom-dark">Get In Touch </span>
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-12">
                                <h3 className="mp-footer-title mb-50">
                                    Have a question, <span>or </span>
                                    Let’s work together
                                </h3>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="mp-footer-ct-btns d-md-flex justify-content-lg-end">
                                    <div className="mp-footer-mail mr-30 mb-30 ">
                                        <a  href="mailto:info@gencio.com" className="ft-mail-btn d-inline-block">info@gencio.com</a>
                                    </div>
                                    <div className="mp-footer-phone mb-30">
                                        <a href="tel:78568065900" className="ft-phone-btn d-inline-block">786 122 222 00</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer__bottom pt-25 pb-25">
                        <div className="row align-ptgems-center">
                            <div className="col-md-8 col-12">
                                <div className="tp-copyrigh-text text-center text-md-start mp-footer-copyright">
                                    {/* <span>Copyright &amp; Design By <a href="#">@Theme Pure</a> - 2022</span>
                                     */}
                                     {copy_right_info}
                                </div>
                            </div>
                            <div className="col-md-4 d-none d-md-block">
                                <div className="tp-footer-menu mp-footer-menu text-end">
                                    <ul>
                                        <li><a href="#">Fb</a> </li>
                                        <li><a href="#">Tw</a></li>
                                        <li><a href="#">Be.</a></li>
                                        <li><a href="#">Ln.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default FooterFive;