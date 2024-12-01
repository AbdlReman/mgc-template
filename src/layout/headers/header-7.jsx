import useSticky from '@/hooks/use-sticky';
import Sidebar from '@/src/layout/headers/sidebar';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';

const HeaderSeven = () => {

    const { sticky } = useSticky();
    const [isActive, setIsActive] = useState(false);


    return (
        <>
            <header>
        <div className="tp-law-header transparent-header">
            <div className="tp-law-header__top wine-bg pl-120 pr-120 d-none d-lg-block p-relative">
                <div className="container-fluid">
                    <div className="tp-law-border-bottom pb-10">
                        <div className="row">
                            <div className="col-6">
                                <div className="tp-law-header__top-left">
                                    <span>Connect Now:</span>
                                    <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-linkedin"></i></a></span>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-law-header__top-right text-end">
                                    <div className="tp-law-header__top-right-menu">
                                        <ul>
                                           <li><Link href="/job">Careers</Link></li>
                                            <li><Link href="/faq">FAQ</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="tp-law-header__top-right-lang">
                                        <span>English <i className="fal fa-angle-down"></i></span>
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Aribic</a> </li>
                                            <li><a href="#">Bangla</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-border-btn-wine">
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className={`tp-law-header__main pl-120 pr-120 ${sticky ? "header-sticky" : ""}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-3">
                            <div className="logo">
                                <Link href="/"><img src="/assets/img/logo/white-loog.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="main-menu law-menu">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                    
                                 </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 d-none d-xl-block">
                            <div className="law-header-cta-btn float-end">
                                <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white">
                                    <span className="mr-10">
                                        <i className="fas fa-comments"></i>
                                        <i className="fas fa-comments"></i>
                                    </span>
                                    Free Consultation
                                    <b></b>
                                </a>
                            </div>
                        </div>

                        <div className="col-9 d-xl-none d-block">
                            <div className="tp-header-search-nav d-flex justify-content-end">
                                <div className="tp-header-search p-relative">
                                    <form  onSubmit={(e) => e.preventDefault()}>
                                        <input type="text" placeholder="Keyword..." />
                                        <button type="submit"><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="tp-header-nav" onClick={() => setIsActive(true)}>
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
    <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </>
    );
};

export default HeaderSeven;