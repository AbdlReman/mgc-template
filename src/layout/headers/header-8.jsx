import useSticky from '@/hooks/use-sticky';
import Sidebar from '@/src/layout/headers/sidebar';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';

const HeaderEight = () => {

    const { sticky} = useSticky()
    const [isActive, setIsActive] = useState(false);


    return (
        <>
            <header>
        <div className="tp-ca-header transparent-header">
            <div id="header-sticky" className={`tp-ca-header__main pl-120 pr-120 ${sticky ? "header-sticky"  : ""}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-3">
                            <div className="logo">
                                <Link href="/"><img src="/assets/img/logo/ca-logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                            <div className="main-menu ca-menu text-lg-center">
                                <nav id="mobile-menu">
                                     <NavMenu />
                                 </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 d-none d-xl-block">
                            <div className="law-header-cta-btn float-end">
                                <a href="#" className="tp-white-btn-rgb">
                                    <span className="mr-10">
                                        <i className="fas fa-comments"></i>
                                        <i className="fas fa-comments"></i>
                                    </span>
                                    Free Consultation
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
    <Sidebar isActive={isActive}  setIsActive={setIsActive} />
        </>
    );
};

export default HeaderEight;