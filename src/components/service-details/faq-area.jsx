import Accordion from "@/src/common/accordion";
import React from "react";


const faq_content ={
    title: "Our Companys Some Q &Answer",
    img: "/assets/img/faq/sv-page-faq.jpg",
}
const {title, img}  = faq_content
const FaqArea = () => {
  return (
    <>
      <div className="seo-faq-area sv-fea-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="seo-faq-cotent mb-30">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-45 wow tpfadeUp">
                      {title}
                    </h2>
                  </div>
                </div>
                <div
                  className="accordion tp-accordion wow tpfadeUp"
                  id="accordionExample"
                >
                  <Accordion />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="seo-faq-img text-end p-relative mb-30 wow tpfadeUp">
                <img src={img} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
