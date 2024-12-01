import React from "react";



const hero_content = {
    sub_title: "Welcome to ",
    title: "Victory Builders",
    phone: "78568065900", 
    btn_text: "Discover Now"
}

const { sub_title, title , phone, btn_text} = hero_content
const HeroBanner = () => {
  return (
    <>
      <div
        className="ca-hero-area p-relative"
        style={{ backgroundImage: `url(/assets/img/hero/ca-hero.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="law-hero-info text-center">
                <div className="law-hero__content">
                  <span
                    className="law-hero__content-subtitle mb-10 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    {sub_title}
                  </span>
                  <h2
                    className="law-hero__content-title mb-50 text-capitalize wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    {title}
                  </h2>
                  <a
                    href="/contact"
                    className="tp-grd-btn wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    {btn_text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
