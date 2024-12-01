import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import portfolio_data_foure from "./portfolio-data-foure";
import Link from "next/link";



// data
const categories = [
    "All",
    ...new Set(portfolio_data_foure.map((item) => item.category)),
  ];

const PortfolioItemsArea = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_data_foure);
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_data_foure);
      } else {
        const findItems = portfolio_data_foure.filter((findItem) => {
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

            <AnimatePresence  >
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="row tp-portfolio-isotop-active">

            {items.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-lg-4 col-xl-3 tp-portfolio-item mb-25 w-img ${item.cls}`}
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
            </AnimatePresence>



            
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

export default PortfolioItemsArea;