import useSticky from "@/hooks/use-sticky";
import Sidebar from "@/src/layout/headers/sidebar";
import Link from "next/link";
import React, {useState} from "react";
import NavMenu from "./nav-menu";

const HeaderFour = () => {
  const { sticky } = useSticky();


  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-app-header transparent-header pl-200 pr-200 ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="tp-da-header__main">
              <div className="row align-items-center">
                <div className="col-xl-3  col-6">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/img/logo/gradian-logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                  <div className="main-menu app-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="tp-header-search-nav d-flex justify-content-end">
                    <div className="tp-header-sing-icon d-none d-xl-block">
                      <span>
                        <a href="#">
                          <i className="fas fa-user"></i>sign in
                        </a>
                      </span>
                    </div>
                    <div onClick={() => setIsActive(true)} className="tp-header-nav">
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

export default HeaderFour;
