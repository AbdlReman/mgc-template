import useSticky from "@/hooks/use-sticky";
import Sidebar from "@/src/layout/headers/sidebar";
import Link from "next/link";
import React,{useState} from "react";
import NavMenu from "./nav-menu";

const HeaderSix = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-mp-header transparent-header pl-100 pr-80 ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="tp-mp-header__main">
              <div className="row align-items-center">
                <div className="col-xl-4 col-6">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/black-logo-2.png"
                        alt="theme-pure"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-7 d-none d-xl-block">
                  <div className="main-menu mp-menu text-end">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-1 d-none d-xl-block">
                  <div className="tp-header-nav tp-header-nav-black" onClick={() => setIsActive(true)}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-xl-3 col-6 d-xl-none">
                  <div className="tp-header-search-nav d-flex justify-content-end">
                    {/* <!-- <div className="tp-header-sing-icon">
                                    <span><a href="#"><i className="fas fa-user"></i>sign in</a></span>
                                </div> --> */}
                    <div className="tp-header-search p-relative">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Keyword..." />
                        <button type="submit">
                          <i className="fal fa-search"></i>
                        </button>
                      </form>
                    </div>

                    <div className="tp-header-nav tp-header-nav-black" onClick={() => setIsActive(true)}>
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

export default HeaderSix;
