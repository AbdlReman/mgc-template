import React from "react";

const portfolio_content = {
  img_1: "/assets/img/portfolio/ca-portfolio-1.jpg",
  img_2: "/assets/img/portfolio/ca-portfolio-2.jpg",
  title: "Interior Design ",
  name: "Victory Builders' Case Study",
};

const { img_1, img_2, title, name } = portfolio_content;

const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/portfolio/ca-portfolio-3.jpg",
    title: "Modern Interior ",
    name: "Premium Victory Projects",
  },
  {
    id: 2,
    img: "/assets/img/portfolio/ca-portfolio-4.jpg",
    title: "Luxury Home Interiors",
    name: "Innovative Design ",
  },
];





const PortfolioArea = () => {
  return (
    <>
      <div className="ca-portfolio-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span className="tp-section__bigtitle wow ">Works</span>
                  <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">
                    Portfolio
                  </span>
                  <h2 className="tp-section__title mb-40">Our Works</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div
                className="ca-portfolio-img w-img mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <img src={img_1} alt="" />
                <div className="ca-project-item__info">
                  <span>{title}</span>
                  <h3 className="ca-project-item__title">
                    <a href="#">{name}</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div
                className="ca-portfolio-img mb-25 w-img wow tpfadeUp"
                data-wow-delay=".4s"
              >
                <img src={img_2} alt="" />
                <div className="ca-project-item__info">
                  <span>{title}</span>
                  <h3 className="ca-project-item__title">
                    <a href="#">{name}</a>
                  </h3>
                </div>
              </div>

              <div className="row">
                {portfolio_data.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="ca-portfolio-img w-img mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      <img src={item.img} alt="" />
                      <div className="ca-project-item__info">
                        <span>{item.title}</span>
                        <h3 className="ca-project-item__title">
                          <a href="#">{item.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
