import products_data from "@/src/data/product-data";
import NiceSelect from "@/src/ui/nice-select";
import Link from "next/link";
import React from "react";

const ShopArea = () => {
  const selectHandler = (e) => {};

  return (
    <>
      <div className="tp-shop-page pt-120 pb-120">
        <div className="container">
          <div className="tp-shop-page-hero-area mb-40">
            <div className="row align-items-center">
              <div className="col-6">
                <span className="tp-product-page-subtitle">
                  <b>20</b> Item On List
                </span>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="tp-view-number-icon mr-30">
                  <NiceSelect
                    options={[
                      { value: "Show 12", text: "Show 12" },
                      { value: "Show 8", text: "Show 8" },
                      { value: "Show 16", text: "AShow 16" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                  />
                </div>

                <div className="tp-grid-project-view mr-20">
                  <a href="#">
                    <span>
                      <i className="flaticon-menu-1"></i>
                    </span>
                  </a>
                </div>
                <div className="tp-grid-project-view">
                  <a href="#">
                    <span>
                      <i className="flaticon-menu"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-shop-products mb-30">
            <div className="row">
              {products_data.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-product mb-40">
                    <div className="tp-product__img w-img mb-25">
                      <div className="fix">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="tp-product__action">
                        <span>
                          <a href="#">
                            <i className="fal fa-heart"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fal fa-shopping-basket"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fal fa-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <h3 className="tp-product__title">
                      <Link href="/shop-details">{item.title}</Link> 
                    </h3>
                    <span className="tp-product__price">£{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="basic-pagination text-center">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <i className="fal fa-angle-double-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <span className="current">2</span>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;
