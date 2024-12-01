import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';



const foter_two_content = {
    logo: "/assets/img/logo/logo-orange.png",
    description: <>Your goals are individual. We believe
    business advice should be too, so we have
    to help your business thrive in this work
    environment situation.</>
}

const {logo, description} = foter_two_content
const FooterTwo = ({style_8, style_10}) => {
    return (
        <>
            <footer>   
   <div className={`bs-footer it-footer  ${style_8 ? "ca-footer" : ""} ${style_10 && "seo-footer"} white-bg`} style={{backgroundImage: `url(/assets/img/footer/footer-patter.png)`}}>
      <div className="container">
         <div className="bs-footer__main pb-10 pt-80 tp-border-bottom">
            <div className="row justify-content-center">
               <div className="col-xl-3 col-md-6">
                  <div className="tp-footer__widget mb-40">
                     <div className="bs-footer__top-logo mb-35">
                        <Link href="/"> 
                        {
                           style_8 ? <img src="/assets/img/logo/ca-black-logo.png" alt="" />
                           :
                           style_10 ? <img src="/assets/img/logo/seo-logo.png" alt="" /> :
                           <img src={logo} alt="" />

                        }
                        
                        </Link>
                     </div>
                     <p className="pr-40">
                        {description}
                     </p>
                  </div>
                  <div className="da-footer__top-social mb-30">
                    <SocialLinks /> 
                  </div>
               </div>
                {/* Coommon Footer start */}
                <CommonFooter />
                  {/* Coommon Footer end */}
               <div className="col-xl-4 col-md-6">
                  <div className="tp-footer__widget bs-pl-60 mb-40">
                     <h3 className="tp-footer__widget-title mb-35">
                        News & Feeds
                     </h3>
                     <div className="footer-blog-feed mb-20 d-flex align-items-center">
                        <div className="footer-blog-thum mr-20">
                           <img src="/assets/img/footer/footer-blog-thum-1.jpg" alt="" />
                        </div>

                        <div className="footer-blog-info pt-5">
                           <div className="footer-blog-info-meta mb-10">
                              <span><a href="#"><b className="ft-blog-cta">Technology</b></a></span>
                              <span><a href="#"> / By <b> Admin</b></a> </span>
                           </div>
                           <h5 className="footer-blog-info-title"><Link href="/blog"> Way Technology Has Improve
                                 Business Today</Link></h5>
                        </div>
                     </div>

                     <div className="mb-25">
                        <div className="tp-border-bottom"></div>
                     </div>

                     <div className="footer-blog-feed d-flex mb-20">
                        <div className="footer-blog-thum mr-20">
                           <img src="/assets/img/footer/footer-blog-thum-2.jpg" alt="" />
                        </div>
                        <div className="footer-blog-info pt-5">
                           <div className="footer-blog-info-meta mb-10">
                              <span><a href="#"><b className="ft-blog-cta">Technology</b></a></span>
                              <span><a href="#"> / By <b> Admin</b></a> </span>
                           </div>
                           <h5 className="footer-blog-info-title"><Link href="/blog"> Way Technology Has Improve
                                 Business Today</Link></h5>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
        {/* footer copy right start */}
         <FooterCopyRight/>
        {/* footer copy right end */}
        
      </div>
   </div>
</footer>
        </>
    );
};

export default FooterTwo;