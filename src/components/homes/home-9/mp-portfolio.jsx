import React from 'react';
import Tilt from 'react-parallax-tilt';


const portfolio_data =[
    {
        id: 1,
        title: "V7 Height",
        city: "Jhelum",
        hover_img: "/assets/img/portfolio/ha-pf-img.jpg",
    },
    {
        id: 2,
        title: "Prince One Mall",
        city: "Jhelum",
        hover_img: "/assets/img/portfolio/ha-pf-img01.jpg",
    },
    {
        id: 3,
        title: "Victory Chib Heights",
        city: "Jhelum",
        hover_img: "/assets/img/portfolio/ha-pf-img02.jpg",
    },
    {
        id: 4,
        title: "Downtown Lane",
        city: "Jhelum",
        hover_img: "/assets/img/portfolio/ha-pf-img03.jpg",
    },
]



const MpPortfolio = () => {
  return (
    <>
      <div className="mp-portfolio ha-portfolio pt-120 pb-120 black-bg fix">
        <div className="container">
          {portfolio_data.map((item, i) => (
            <div
              key={i}
              className="mp-portfolio-item d-flex justify-content-between align-items-center p-relative"
            >
              <div className="mp-portfolio-info wow tpfadeUp">
                <h3 className="mp-portfolio-title">
                  <a href="#">{item.title}</a>
                </h3>
                <div
                  className="mp-portfoio-img p-relative"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >

              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900} 
                transitionSpeed={1000}
                gyroscope={true}
                >             
                  <img src={item.hover_img} alt="theme-pure" />
                </Tilt>
                </div>
              </div>
              <div className="mp-portfolio-tag">
                <span>
                  <a href="#">{item.city}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MpPortfolio;