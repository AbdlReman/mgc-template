// import portfolio_data from '@/src/data/portfolio-data';
import fillter_data from "@/src/data/fillter-data";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";

// data
const categories = [
  "All",
  ...new Set(fillter_data.map((item) => item.category)),
];

const PortfolioArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(fillter_data);
  // const [catItems, setCatItems]  = useState(categories)

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);

    if (cateItem === "All") {
      return setItems(fillter_data);
    } else {
      const findItems = fillter_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="tp-portfoliop-page-area pt-120 pb-120">
        <div className="container">
          <div className="tp-portfolio-header mb-30">
            <div className="row">
              <div className="col-12">
                <div className="tp-pf-btn-group text-center">
                  {categories.map((cate, i) => (
                    <button
                      onClick={() => filterItems(cate)}
                      key={i}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div layout className="row tp-portfolio-isotop-active">
            {items.map((item, i) => (
              <div
                key={i}
                className={`col-12 tp-portfolio-item mb-25 w-img ${item.cls}`}
              >
                <div className="pf-item-wrapper p-relative">
                  <div className="pf-single-item">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="pf-single-item__info">
                    <span>{item.title}</span>
                    <h3 className="pf-single-item__title">
                      <Link href="/portfolio-details">{item.name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="pt-istop-btn-wrapper text-center mt-30">
            <a href="#" className="tp-common-btn">
              load more
              <span>
                <i className="fal fa-plus"></i>
                <i className="fal fa-plus"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
