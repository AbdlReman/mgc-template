import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';




// copy right text
const footer_content = {
    copy_right_info:  <> Copyright & Design By <a href="#">@Theme Pure</a> - {new Date().getFullYear()} </>,
  };

const { copy_right_info } = footer_content;


const FooterFour = () => {
    return (
        <>
             <footer>
        <div className="bs-footer dark-bg ">
            <div className="container">
                <div className="ptg-footer__main pb-120 pt-120 tp-border-top-dark tp-border-bottom-dark text-center">
                    <div className="ptg-footer-logo mb-40">
                        <Link href="/"><img src="/assets/img/logo/dark-logo.png" alt="" /></Link>
                    </div>
                    <div className="ptg-footer-info">
                        <span>NEED A PHOTOGRAPHER? SOMEONE WITH EXPERIENCE TO <br />
                            COLLABORATE WITH?<Link href="/about-me"> WRITE ME!</Link></span>
                    </div>
                    <div className="ptg-footer__top-social">
                        <SocialLinks />
                    </div>
                </div>

                <div className="tp-footer__bottom pt-25 pb-25">
                    <div className="row align-ptgems-center">
                        <div className="col-md-8 col-12">
                            <div className="tp-copyrigh-text text-center text-md-start ptg-footer-copyright">
                                <span>
                                    {copy_right_info}
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <div className="tp-footer-menu ptg-footer-menu text-end">
                                <ul>
                                    <li><Link href="/faq">FAQ</Link> </li>
                                    <li><Link href="/about">Insights</Link></li>
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

export default FooterFour;