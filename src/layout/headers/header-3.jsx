import React, {useState} from "react";
import NavMenu from "./nav-menu";
import Link from "next/link"; 
import useSticky from './../../../hooks/use-sticky';
import Sidebar from "@/src/layout/headers/sidebar";

const HeaderThree = () => {

  const { sticky } = useSticky();
 const [isActive, setIsActive] = useState(false);

  return (
    <>

      <header>
        <div
          id="header-sticky"
          className={`tp-da-header pl-200 pr-200 p-relative ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="tp-da-header__main">
              <div className="row align-items-center">
                <div className="col-xl-3 col-3">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/img/logo/gradian-logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                  <div className="main-menu da-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <div className="da-header-cta-btn float-end mt-35">
                    <a href="#" className="tp-grd-btn">
                      Get Quote
                      <span className="ml-10">
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </a>
                    <p className="mt-10 mb-0">
                      or <b>call:</b>
                      <a href="tel:+89700011102">+897 000 111 02 </a>
                    </p>
                  </div>
                </div>

                <div className="col-9 d-xl-none d-block">
                  <div className="tp-header-search-nav d-flex justify-content-end">
                    <div className="tp-header-search p-relative">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Keyword..." />
                        <button type="submit">
                          <i className="fal fa-search"></i>
                        </button>
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

export default HeaderThree;
