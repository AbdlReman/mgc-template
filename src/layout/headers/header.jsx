import useSticky from '@/hooks/use-sticky';
import Sidebar from '@/src/layout/headers/sidebar';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';
import { motion } from "framer-motion"



const Header = ({style_home_one}) => {

  const { sticky } = useSticky();
      const [isOffer, setIsOffer] = useState(false)  
      const offerHandler = () =>{         
            setIsOffer(true)         
      }
    const [isActive, setIsActive] = useState(false);


    return (
   <>     
   <header>
      <div className={`${style_home_one ? "" : "tp-header__1 theme-bg p-relative"}`}>
         {/* {style_home_one && 
            <motion.div layout className={`tost-box-area ${isOffer ? "d-none"  : ""}`}>
               <div className="header__top-toast text-end header-bg d-none d-lg-block cornblue-bg pt-5 pb-5">
                  <div className="container">
                     <div className="row">
                        <div className="col-8 text-center">
                           <span>Hot Offer: Don’t miss the offer price. Buy Now $19</span>
                        </div>
                        <div className="col-4">
                           <button><span onClick={offerHandler} className="close-btns">Close x</span></button>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

         } */}
            
         <div id="header-sticky" className={`tp-header__1-main header-border-button pl-105 pr-105  ${ sticky ? "header-sticky" : ""}`}>
            <div className="container-fluid">
               <div className="mega-menu-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-6">
                        <div className="logo border-right">
                           <Link href="/">
                              <img src="/assets/img/logo/black-logo.png" alt="logo" />
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                        <div className="main-menu p-relative">
                           <nav id="mobile-menu">
                            <NavMenu />                             
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-3 d-xl-block col-md-6 col-6">
                        <div className="tp-header__1-right d-flex justify-content-end align-items-center">
                           {/* <div className="header-mail-info mr-40">
                              <a href="mailto:info@gencio.com"><i className="fas fa-envelope-open"></i>info@maidaangroup.com</a>
                           </div> */}
                           <Link href="/contact" className="tp-btn d-none d-xl-block tp-btn-hover">Get Quote<span>
                                 <i className="fal fa-long-arrow-right"></i>
                                 <i className="fal fa-long-arrow-right"></i>
                              </span> 
                              <b></b>
                           </Link>


                           <div className="tp-header-search-nav d-flex justify-content-end d-xl-none">
                              <div className="tp-header-search p-relative">
                                 <form onSubmit={(e)  => e.preventDefault()}>
                                    <input type="text" placeholder="Keyword..." />
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                 </form>
                              </div>
                              <div className="tp-header-nav" onClick={()  => setIsActive(true)}>
                                 <span></span>
                                 <span></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </>
    );
};

export default Header;