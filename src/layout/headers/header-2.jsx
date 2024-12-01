import useSticky from '@/hooks/use-sticky';
import Language from '@/src/common/language';
import Sidebar from '@/src/layout/headers/sidebar';
import { SocialLinksHomeTwo } from '@/src/common/social-links';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';

const HeaderTwo = () => {

  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

    return (
        <>
      <header>
      <div className="tp-it-header">
         <div className="tp-it-header__top d-none d-lg-block">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-6">
                     <div className="tp-it-header__top-left">
                        <span>Connect Now:</span>
                        <SocialLinksHomeTwo />                        

                     </div>
                  </div>
                  <div className="col-6">
                     <div className="tp-it-header__top-right text-end">
                        <div className="tp-it-header__top-right-menu">
                           <ul>
                             <li><Link href="/job">Careers</Link></li>
                              <li><Link href="/faq">FAQ</Link> </li>
                           </ul>
                        </div>
                        <div className="tp-it-header__top-right-lang">
                           <span>English <i className="fal fa-angle-down"></i></span>
                           <ul>
                            <Language />
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <div id="header-sticky" className={`tp-it-header__main p-relative ${sticky ? "header-sticky"  : ""}`}>
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-lg-3 col-3">
                     <div className="logo">
                        <Link href="/"><img src="/assets/img/logo/logo-orange.png" alt="logo" /></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                     <div className="main-menu it-menu">
                        <nav id="mobile-menu">
                            <NavMenu />
                            
                        </nav>
                     </div>
                  </div>
                  <div className="col-xl-3 d-none d-xl-block">
                     <div className="d-flex justify-content-end">
                        <div className="tp-it-header__main-cta">
                           <span><i className="fas fa-envelope-open"></i> Support Email</span>
                           <b><a href="mailto:info@gencio.com">info@gencio.com</a></b>
                        </div>
                     </div>

                  </div>
                  <div className="col-9 d-xl-none">
                     <div className="tp-header-search-nav d-flex justify-content-end">
                        <div className="tp-header-search p-relative">
                           <form onSubmit={(e) => e.preventDefault()}>
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
   </header>
   <Sidebar isActive={isActive}  setIsActive={setIsActive} />
        </>
    );
};

export default HeaderTwo;