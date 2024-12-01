import useSticky from '@/hooks/use-sticky';
import Sidebar from '@/src/layout/headers/sidebar';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';


const header_ten_content = {
    email: "info@gencio.com",
    phone: "750 252 000 02",

}

const {email, phone} = header_ten_content

const HeaderTen = () => {

 const {sticky} =     useSticky()
 const [isActive, setIsActive] = useState(false);



    return (
        <>
             <header>
        <div className="tp-seo-header transparent-header">
            <div className="tp-law-header__top seagreen-bg pl-60 pr-60 d-none d-lg-block p-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="tp-law-header__top-left">
                                <span>Email: <a  href={`mailto:${email}`}> {email}</a></span>
                                <span>Phone: <a href={`tel:${phone}`}> {phone}</a></span>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="tp-law-header__top-right text-end">
                                <div className="tp-law-header__top-right-menu">
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
                    <div className="tp-border-btn-wine">
                    </div>
                </div>
            </div>
            <div id="header-sticky" className={`tp-law-header__main tp-seo-header__main pl-60 pr-60 ${sticky && "header-sticky"}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-3">
                            <div className="logo">
                                <Link href="/"><img src="/assets/img/logo/seo-logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                            <div className="main-menu seo-menu text-lg-center">
                                <nav id="mobile-menu">
                                     <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 d-none d-xl-block">
                            <div className="law-header-cta-btn float-end">
                                <a href="#" className="tp-solid-btn">
                                    get a quote
                                    <span className="ml-10">
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>

                                </a>
                            </div>
                        </div>

                        <div className="col-9 d-xl-none d-block">
                            <div className="tp-header-search-nav d-flex justify-content-end">
                                <div className="tp-header-search p-relative">
                                    <form onSubmit={e => e.preventDefault()}>
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

export default HeaderTen;